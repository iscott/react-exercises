import React from 'react'

// This is what this component's props will look like: (you can see it in ./sampleData.json)
// const props = {
// 	article: {
// 		image: {
// 			url: 'https://source.unsplash.com/NOLrgL3hUJg/400x400',
// 			alt: 'Kong toy on teal background',
// 			credit: 'Photo by Chris Jarvis on Unsplash',
// 		},
// 		slug: 'dog-toy-trends',
// 		title: '5 Global Trends That Will Affect Dog Toys in 2019',
// 		tagline:
// 			'How the trade war with China will change the way dogs play forever',
// 		author: {
// 			name: 'Frank',
// 			avatar: {
// 				url:
// 					'https://lh3.googleusercontent.com/HJ7caG-42NJjH4yMR030wB8k2Vm6UKx0DnPQwgXeXc0wsYPhFx7FVdHjaFp5SHTmJupwSIweS2i2rsQzWji31l4Y7_OYUstGPowdyYFFbMVj41GAsflYGBmn919oSXhZMnRr-fpc_M6ATnDxGEvMKPnpnECbzFPHT91EBvnFDe4cn-F37NaeQ2h42Rwsdntzh3YtANP5bzHvpYmRs4DyTuSDv4eZtAOVY_rtaL6hG7MccFunJjhxHXQcm37J9wmGwJERsvA6nvXrRZNOQVzBbq4ebvvipPs0bx8CvANlFTdlbBi8cKBPLaV18KnmrIhHjIsZkXFpjWnsMHbzdnZd9ipqBp8nGH5Cl9PE66XU6H0DgOai5R8EsW3eQf6V9dM0sWUbjyNARJm-Ykfp2GEAMfIaNr6h8So_5lBWVQmpCEiV7BQ9bKkIx7y6ojtzW4vfw6Bbh0vVZMrCNjSE0uCNMsbCdYU_bGnj0vt8tGzdUi3Vee7ADGqmcbO5UuLHBBZa8Bu_MZ-7MxfGV_ttEk7U5ZZtnYqF0GB0FzodL6iWKRzr5Ioa7X3Mob0ZFTZszujAio8_hvOA8i9bYLuNyuBM9-NB4PA5MWSgMS96y7UHm6-b_xhBRbSF8UTLsN9f9oJo4w8XT67guTxSRMHo224qcerwMpqDZHxc=w1478-h1498-no',
// 			},
// 		},
// 	},
// }
//
//
// You can see how your component will be used in ./props-basics-demo.js

const ArticleThumbnail = props => {
	/* 👋 Do your work in here! 👋 */

	/** ✅ Test 1:
	 * Render the article title in an <h2>.
	 *
	 *  - you can get the article's title from props.article.title
	 *  - Put it within an <h2> element, just like you would in HTML.
	 *  - Remember that, in JSX variables need to be in brackets:
	 *      <h1>{props.user.username}</h1>
	 *  - You can return your <h2> element directly. Your return statement
	 *    should look something like:
	 *      return <h2>{something...}</h2>
	 */

	/**
	 *  ✅ Test 2:
	 * Render the author's name in an <h4> element, with the format "By: Author Name"
	 *
	 * - Remember that React Components can only return a single element.
	 *   Now that we are also returning an <h4>, we can solve that problem by
	 *   by wrapping what we are returning in a div:
	 *
	 *     return (
	 *       <div>
	 *         <h2>{something...}<h2>
	 *       </div>
	 *     )
	 *
	 * - Below your <h2> element, create an <h4>.
	 * - Within it, add text that will render as "By: Author Name".
	 * - Remember that you can use plain strings next to the bracketed variables:
	 *     <h1>Hello, {props.user.firstName}!! Welcome to React 101</h1>
	 */

	/**
	 *  ✅ Test 3 & 4:
	 *  Render an image with the article's image URL, and
	 *  Render an image with the article's image alt text
	 *
	 * - Find the image URL in the props.
	 * - After your <h4> element, create an <img /> element, and pass in
	 *   the image URL to the src:
	 *      <img src={someVariable} />
	 * - Just like in HTML, the image element is "self closing" - end it with '/>'
	 * - Pass the alt text as an "alt" property to this image, the same way
	 *   you passed in the src.
	 */

	/**
	 * ✅ Test 5:
	 * Render the article's tagline within an <h4> element,
	 * with the class name "article"
	 *
	 * - Create and populate an <h4> element the same way you did before.
	 * - Give this element a class name of "tagline".
	 * - Remember that, in React, you need to use the property name "className"
	 *   instead of "class"
	 */

	return null
}

/** Usage
 *  Your component will be used like this:
 *
 *  const article = someData.article
 *  <ArticleThumbnail article={article} />
 */

export default ArticleThumbnail
