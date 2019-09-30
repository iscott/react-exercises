import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ArticleThumbnail from './props-basics-exercise'
import sampleArticle from './sampleData'

/**
 * To get started, remove the .skip from the tests one by one.
 * Once you have a test passing, move on to the next one.
 */

afterEach(cleanup)

const renderThumbnail = () => {
	const renderUtils = render(<ArticleThumbnail article={sampleArticle} />)
	const { container } = renderUtils

	return {
		...renderUtils,
		image: container.querySelector('img'),
		title: container.querySelector('h2'),
		byline: container.querySelector('h4'),
		tagline: container.querySelector('h4.tagline'),
		figure: container.querySelector('figure'),
		links: container.querySelectorAll('a'),
	}
}

describe('ArticleThumbnail', () => {
	it.skip('should render the article title in an <h2> element', () => {
		const { title } = renderThumbnail()
		expect(title.textContent).toBe(sampleArticle.title)
	})

	it.skip('should render the author\'s name in an <h4> element as "By: AuthorName"', () => {
		const { byline } = renderThumbnail()
		expect(byline.textContent).toBe(`By: ${sampleArticle.author.name}`)
	})

	it.skip("should render an image with the article's image's URL", () => {
		const { image } = renderThumbnail()
		expect(image.getAttribute('src')).toBe(sampleArticle.image.url)
	})

	it.skip("should render an image with the article's image's alt text", () => {
		const { image } = renderThumbnail()
		expect(image.getAttribute('alt')).toBe(sampleArticle.image.alt)
	})

	it.skip('should render the tagline in an <h4> element with a class name of ".tagline"', () => {
		const { tagline } = renderThumbnail()
		expect(tagline.textContent).toBe(sampleArticle.tagline)
	})
})

/** Extra Credit: remove the .skip below to run these tests */

describe('ArticleThumbnail (Extra Credit)', () => {
	it.skip('should render the image within a <figure> element, and with the image credit in a <figcaption> tag', () => {
		const { figure } = renderThumbnail()
		const image = figure.querySelector('img')
		const caption = figure.querySelector('figcaption')
		expect(image.getAttribute('src')).toBe(sampleArticle.image.url)
		expect(caption.textContent).toBe(sampleArticle.image.credit)
	})

	it.skip('should wrap the figure in an anchor element that links to `/articles/article-slug`', () => {
		const { figure } = renderThumbnail()
		expect(figure.parentElement.tagName).toBe('A')
		expect(figure.parentElement.getAttribute('href')).toBe(
			`/articles/${sampleArticle.slug}`,
		)
	})

	it.skip('should have a link with the text "Read More" that links to `/articles/article-slug`', () => {
		const { queryByText } = renderThumbnail()
		const anchor = queryByText('Read More')
		expect(anchor.tagName).toBe('A')
		expect(anchor.getAttribute('href')).toBe(`/articles/${sampleArticle.slug}`)
	})
})
