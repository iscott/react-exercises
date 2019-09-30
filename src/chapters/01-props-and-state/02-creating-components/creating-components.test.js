import React from 'react'
import { render, cleanup } from '@testing-library/react'
import FilmPoster from './creating-components-exercise'
import films from './sampleData.json'

const sampleFilm = films[0]

/**
 * To get started, remove the .skip from the tests one by one.
 * Once you have a test passing, move on to the next one.
 */

afterEach(cleanup)

describe('FilmPoster', () => {
	it.skip('should render an image with the poster URL', () => {
		const { container } = render(<FilmPoster film={sampleFilm} />)
		const img = container.querySelector('img')
		expect(img.getAttribute('src')).toContain(sampleFilm.poster_path)
		expect(img.getAttribute('alt')).toBe(`Poster for "${sampleFilm.title}"`)
	})

	it.skip('should have a width of 200 when given a "small" prop', () => {
		const { container } = render(<FilmPoster film={sampleFilm} small />)
		const img = container.querySelector('img')
		expect(img.getAttribute('src')).toContain('w200')
	})

	it.skip('should have a width of 500 when not given a size', () => {
		const { container } = render(<FilmPoster film={sampleFilm} />)
		const img = container.querySelector('img')
		expect(img.getAttribute('src')).toContain('w500')
	})

	it.skip('should render a caption with the film title', () => {
		const { container } = render(<FilmPoster film={sampleFilm} />)
		const caption = container.querySelector('figcaption')
		expect(caption.textContent).toBe(sampleFilm.title)
	})
})



describe('FilmPoster (extra credit)', () => {
	it.skip('should not render the caption when given a "small" prop', () => {
		const { container } = render(<FilmPoster film={sampleFilm} small />)
		const caption = container.querySelector('figcaption')
		expect(caption).toBe(null)
	})
})
