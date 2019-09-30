import React from 'react'
import { Demo, Exercise, Final } from '../../../components/Demo'
import FilmPoster from './creating-components-exercise'
import Solution from './creating-components-solution'
import films from './sampleData'

const sampleFilm = films[0]

const CreateComponentsDemo = () => (
	<Demo title="Nested Components">
		<Exercise>
			<h2>Normal Size:</h2>
			{FilmPoster ? <FilmPoster film={sampleFilm} /> : null}
			<h2>Small:</h2>
			{FilmPoster ? <FilmPoster film={sampleFilm} small /> : null}
		</Exercise>
		<Final>
			<h2>Normal Size:</h2>
			<Solution film={sampleFilm} />
			<h2>Small:</h2>
			<Solution film={sampleFilm} small />
		</Final>
	</Demo>
)

export default CreateComponentsDemo
