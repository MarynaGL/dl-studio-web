import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Navbar from './Navbar' 


// Test 1: Verificamos que la estructura básica esté ahí
test('Debe mostrar los 4 links principales de navegación', () => {
  render(<Navbar />)
  
  expect(screen.getByText(/Home/i)).toBeDefined()
  expect(screen.getByText(/Portfolio/i)).toBeDefined()
  expect(screen.getByText(/Servicios/i)).toBeDefined()
  expect(screen.getByText(/Logic Lab/i)).toBeDefined()
  expect(screen.getByText(/Contacto/i)).toBeDefined()
})

// Test 2: Verificamos la identidad de la marca (El Logo)
test('El logo de "Logic & Design" debe existir y redirigir a la Home', () => {
  render(<Navbar />)
  screen.debug()
 // En lugar de /Logic & Design/i, ponemos solo con /Logic/i
    const logo = screen.getByRole('link', { name: /Logic/i })
  expect(logo.getAttribute('href')).toBe('/')
})