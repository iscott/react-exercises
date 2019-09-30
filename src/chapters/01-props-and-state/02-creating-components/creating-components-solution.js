import React from 'react'

const FilmPoster = ({ film, small }) => {
	const { poster_path, title } = film
	const width = small ? 200 : 500
	return (
		<figure>
			<img
				src={`https://image.tmdb.org/t/p/w${width}${poster_path}`}
				alt={`Poster for "${title}"`}
			/>
			<figcaption>{title}</figcaption>
		</figure>
	)
}

/** Extra Credit Solution */

// const FilmPoster = ({ film, small }) => {
// 	const { poster_path, title } = film
// 	const width = small ? 200 : 500
// 	return (
// 		<figure>
// 			<img
// 				src={`https://image.tmdb.org/t/p/w${width}${poster_path}`}
// 				alt={`Poster for "${title}"`}
// 			/>
// 			{small ? null : <figcaption>{title}</figcaption>}
// 		</figure>
// 	)
// }

export default FilmPoster
