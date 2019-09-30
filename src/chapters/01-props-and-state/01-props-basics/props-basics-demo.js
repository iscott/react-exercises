import React from 'react'
import { Demo, Exercise, Final } from '../../../components/Demo'
import ArticleThumbnail from './props-basics-exercise'
import ArticleThumbnailSolution from './props-basics-solution'
import sampleArticle from './sampleData.json'

const PropsBasicsDemo = () => (
	<Demo title="Props Basics">
		<Exercise>
			<ArticleThumbnail article={sampleArticle} />
		</Exercise>
		<Final>
			<ArticleThumbnailSolution article={sampleArticle} />
		</Final>
	</Demo>
)

export default PropsBasicsDemo
