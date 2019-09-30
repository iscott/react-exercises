import React from 'react'

const ArticleThumbnail = props => {
	const article = props.article
	return (
		<div>
			<img src={article.image.url} alt={article.image.alt} />
			<h2>{article.title}</h2>
			<h4>By: {article.author.name}</h4>
			<h4 className="tagline">{article.tagline}</h4>
		</div>
	)
}

/** Extra Credit Solution */

// const ArticleThumbnail = props => {
// 	const article = props.article
// 	return (
// 		<div>
// 			<a href={`/articles/${props.article.slug}`}>
// 				<figure>
// 					<img src={article.image.url} alt={article.image.alt} />
// 					<figcaption>{article.image.credit}</figcaption>
// 				</figure>
// 			</a>
// 			<h2>{article.title}</h2>
// 			<h4>By: {article.author.name}</h4>
// 			<h4 className="tagline">{article.tagline}</h4>
// 			<a href={`/articles/${props.article.slug}`}>Read More</a>
// 		</div>
// 	)
// }

export default ArticleThumbnail
