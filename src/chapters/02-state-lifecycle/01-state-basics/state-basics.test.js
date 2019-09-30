import React from 'react'
import { render, wait, fireEvent, cleanup } from '@testing-library/react'
import Clicker from './state-basics-exercise'

/**
 * To get started, remove the .skip from the tests one by one.
 * Once you have a test passing, move on to the next one.
 */

afterEach(cleanup)

describe('Clicker', () => {
  it.skip('should render the text "Current Count:"', () => {
    const { container } = render(<Clicker />)
    const h2 = container.querySelector('h2')
    const button = container.querySelector('button')
    expect(h2.textContent).toContain('Current Count:')
    expect(button.textContent).toBe('+')
  })

  it.skip('should render the text "Current Count: 0"', () => {
    const { container } = render(<Clicker />)
    const h2 = container.querySelector('h2')
    expect(h2.textContent).toContain('Current Count: 0')
  })

  it.skip('should increase the count with each button click', async () => {
    const { container } = render(<Clicker />)
    const h2 = container.querySelector('h2')
    const button = container.querySelector('button')
    expect(h2.textContent).toContain('Current Count: 0')
    fireEvent.click(button)
    expect(container.querySelector('h2').textContent).toContain('Current Count: 1')
  })
})

/** Extra Credit: remove the .skip below to run these tests */

describe('ArticleThumbnail (Extra Credit)', () => {
  it.skip('should not allow the count to go over the `maxCount` prop', () => {
    const { container } = render(<Clicker maxCount={3} />)
    const h2 = container.querySelector('h2')
    const button = container.querySelector('button')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(h2.textContent).toBe('Current Count: 3')
    fireEvent.click(button)
    expect(h2.textContent).toBe('Current Count: 3')
  })

  it.skip('should render the text "Too many clicks!" when the `maxCount` is reached', () => {
    const { container } = render(<Clicker maxCount={3} />)
    const h2 = container.querySelector('h2')
    const button = container.querySelector('button')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(h2.textContent).toBe('Current Count: 3')
    fireEvent.click(button)
    expect(container.textContent).toContain('Too many clicks!')
  })
})
