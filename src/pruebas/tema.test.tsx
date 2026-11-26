import { describe, expect, it } from 'vitest'
import css from '../styles.css?raw'
import { renderizarApp } from './ayudas'

function colorDe(variable: string): [number, number, number] {
  const hex = new RegExp(`${variable}:\\s*#([0-9a-fA-F]{6})`).exec(css)?.[1]
  if (!hex) throw new Error(`Falta la variable ${variable} en styles.css`)
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number]
}

/** Azul: el canal azul domina, también en los tonos claros (p. ej. #dbeafe). */
const esAzul = ([r, g, b]: [number, number, number]) => b >= g && b > r

describe('Tema visual: color base azul', () => {
  it.each(['--base', '--base-dark', '--base-light', '--base-bg'])('la variable %s es azul', (variable) => {
    expect(esAzul(colorDe(variable))).toBe(true)
  })

  it('encabezado, botones y bordes usan el color base', () => {
    expect(css).toMatch(/\.header\s*{[^}]*background:\s*var\(--base\)/)
    expect(css).toMatch(/button,\s*\.btn\s*{[^}]*background:\s*var\(--base\)/)
    expect(css).toMatch(/input\s*{[^}]*border:\s*1px solid var\(--base\)/)
    expect(css).toMatch(/\.winner\s*{[^}]*border:\s*3px solid var\(--base\)/)
  })

  it('el color base está definido solo en :root, sin hex sueltos fuera de él', () => {
    const fueraDeRoot = css.replace(/:root\s*{[^}]*}/, '')
    expect(fueraDeRoot).not.toMatch(/#[0-9a-fA-F]{3,8}\b/)
  })

  it('la interfaz no ofrece un selector de color', () => {
    renderizarApp()
    expect(document.querySelector('input[type="color"]')).toBeNull()
    expect(document.querySelector('select')).toBeNull()
  })
})
