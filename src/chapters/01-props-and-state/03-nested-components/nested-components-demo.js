import React from 'react'
import { Demo, Exercise, Final } from '../../../components/Demo'
import { FilmList } from './nested-components-exercise'
import { FilmList as Solution } from './nested-components-solution'

import films from './sampleData.json'

const NestedComponentsDemo = () => (
	<Demo title="Nested Components">
		<Exercise>{FilmList ? <FilmList films={films} /> : null}</Exercise>
		<Final>
			<Solution films={films} />
		</Final>
	</Demo>
)

export default NestedComponentsDemo
