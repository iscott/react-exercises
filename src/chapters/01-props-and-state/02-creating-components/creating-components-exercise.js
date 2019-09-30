import React from 'react'

/* Sample Data: this is what your component's props will look like */

// {
// 	film: {
// 		id: 346364,
// 		title: 'It',
// 		poster_path: '/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
// 		backdrop_path: '/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg',
// 		overview:
// 			'In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.',
// 		release_date: '2017-09-05',
// 	},
// }

/**
 * ✅ Setup:
 * - Create a function named "FilmPoster" that accepts one "props" argument
 *   - this can either use the arrow syntax:
 *      const MyComponent = (props) => {
 *         return null
 *      }
 *   - or you can declare it as a function:
 *      function MyComponent(props) {
 *        return null
 *      }
 *   - (these two formats are equivalent)
 * - Export it at the bottom of the file with 'export default FilmPoster'
 */

/**
 * ✅ Test 1:
 *    Render an image with the poster URL
 *
 *  - This time, we only get the 'poster_path' from our data. We need to append
 *    it to a base URL.
 *  - Declare a const called "baseURL". This can be either within your component
 *    or at the root of the module.
 *  - Set this variable to: "https://image.tmdb.org/t/p/w500"
 *  - Now, concatenate the baseURL with the film's poster_path,
 *    and pass that into the image's src property. You can either create a new
 *    variable for this, or concatenate it within the JSX. Both of these do the same:
 *
 *      const imageUrl = baseImage + props.film.poster_path
 *      return <img src={imageUrl} />
 *
 *      // or
 *
 *      return <img src={baseImage + props.film.poster_path} />
 */

/**
 * ✅ Test 2 & 3:
 *    Change the 'w500' part of the baseURL to 'w200' when props.small is true
 *
 *  - Remove the "w500" at the end of the baseURL.
 *  - within the component, create an 'imageWidth' const. This should be equal to
 *    'w200' if props.small is true, otherwise it should be 'w500'
 *    - You can do this using a ternary expression. Psuedo-code for ternary
 *      expressions would look like:
 *
 *        const myVariable = (if this is true) ? (myVariable is this) : (otherwise it's this)
 *
 *        example:
 *
 *        const welcomeMessage = (user.language === 'spanish') ? '¡Hola!' : 'Hello!'
 *  - You can also do this with a let variable:
 *
 *       let imageWidth
 *       if (props.small === true) {
 *          imageWidth = 'w500'
 *       } else {
 *          imageWidth = 'w200'
 *       }
 *
 *  - Now that you have the image width, concatenate that with the rest of the src string.
 *
 */

/**
 * ✅ Test 4:
 *    Render a caption with the film title in a <figcaption> element
 *
 *  - Now that we are going to return more than just the image, we need to wrap everything in
 *    a wrapper element. Since we will be rendering an image with a caption, a <figure> tag
 *    would be appropriate.
 *  - Wrap the image within a <figure> element.
 *  - Within the figure, create a <figcaption> element, and populate it with the film's title
 *    (props.film.title)
 */

/** Usage
 *  Your component will be used like this:
 *
 *  const article = someData.article
 *  <ArticleThumbnail article={article} />
 */

export default null // change 'null' to 'FilmPoster'
