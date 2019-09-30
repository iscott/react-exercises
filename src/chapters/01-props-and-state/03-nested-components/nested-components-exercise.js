import React from 'react'
// import FilmPoster from '../02-creating-components/creating-components-exercise'

/**
 * ✅ Setup 1: import FilmPoster:
 *
 * - Import your FilmPoster component from the previous exercise
 *   by uncommenting line 2
 * - If you don't have a working FilmPoster component, you can
 *   change the import to import from the solution:
 *
 *   '../02-creating-components/creating-components-solution'
 */

/**
 * ✅ Setup 2 Create Exports:
 *
 * - Create two new function components. Have them return null for the moment.
 *   - Name one 'FilmSummary'.
 *    - We will export this component so we can test it. To do this,
 *      prepend the function or const declaration with 'export', like so:
 *
 *      export function FilmSummary(props) {
 *        return null
 *      }
 *
 *      // or
 *
 *      export const FilmSummary = (props) => {
 *        return null
 *      }
 *
 *   - Name the other 'FilmList' and export it the same way.
 *
 */

/**
 * ⚙️  FilmSummary Usage:
 * FilmSummary components will receive a single prop, 'film'.
 * See any individual item in sampleData.json.
 *
 * <FilmSummary film={someFilm} />
 */

/**
 * ✅ FilmSummary Test 1:
 *    Render the Poster
 *
 *    - Now that we have a working FilmPoster component,
 *      we can use that within our FilmSummary. For this first test,
 *      we can simply pass props.film on to the FilmPoster.
 *    - Have your FilmSummary compnent return a FilmPoster. It will look
 *      like this:
 *
 *      return <FilmPoster film={props.film} />
 *
 */

/**
 * ✅ FilmSummary Test 2:
 *    Render the release date, and overview
 *
 *    - Now, we need to render this poster alongside some other
 *      info.
 *    - Render props.film.release_date and props.film.overview within
 *      some kind of HTML text element (You can use p, h4, or anything
 *      you'd like)
 *    - Remember to enclose everything in a single wrapping <div> tag!
 *
 */

/**
 * ⚙️  FilmList Usage:
 * FilmList components will receive a single prop, 'films',
 * which is an array of films. See sampleData.json
 *
 * <FilmList films={allFilms} />
 */

export const FilmList = null // remove this line when you have exported your own FilmSummary

/**
 * ✅ FilmList Test 1:
 *    Render a total count of all films, in the format:
 *    "Total: 99 films"
 *
 *  - Since `props.films` is an array, we can use it's .length
 *    property to get a count:
 *
 *      props.films.length
 *
 *    Render this value within a text element with the "Total: ... films"
 *    text.
 */

/**
 * ✅ FilmList Test 2:
 *    Render a FilmSummary for each film in props.films
 *
 *    - Remember to supply each FilmSummary with a unique 'key'
 *      property. You can use the film's id.
 *    - See the documentation for this exercise for an example
 *      of how to render components with Array.map
 *
 */
