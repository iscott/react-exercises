import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { FilmList, FilmSummary } from './nested-components-exercise'
import films from './sampleData'

afterEach(cleanup)

describe('FilmSummary', () => {
	it.skip('should render the poster', () => {
		const { container } = render(<FilmSummary film={films[0]} />)
		expect(container.querySelector('img').getAttribute('src')).toContain(
			films[0].poster_path,
		)
	})
	it.skip('should render the release_date and overview', () => {
		const { container } = render(<FilmSummary film={films[0]} />)
		expect(container.textContent).toContain(films[0].release_date)
		expect(container.textContent).toContain(films[0].overview)
	})
})

describe('FilmListing', () => {
	it.skip('should render a total count of all films', () => {
		const { container } = render(<FilmList films={films} />)
		expect(container.textContent).toContain(`Total: ${films.length} films`)
	})

	it.skip('should render a summary for each film', () => {
		const { container } = render(<FilmList films={films} />)
		expect(container.querySelectorAll('img').length).toBe(films.length)
		films.forEach(film => {
			expect(container.textContent).toContain(film.overview)
		})
	})
})
