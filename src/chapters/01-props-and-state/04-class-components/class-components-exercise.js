import React from 'react'

/**
 * Basic class syntax:

export class FilmPoster extends React.Component {
  render() {
    // access your props with this.props
    return (
     // ...
    )
  }
}

 - 💡 Don't forget to export your components with `export class MyComponent ....`
*/

export const FilmPoster = ({ film, small }) => {
  const { poster_path, title } = film
  const width = small ? 200 : 500
  return (
    <figure>
      <img src={`https://image.tmdb.org/t/p/w${width}${poster_path}`} alt={`Poster for "${title}"`} />
      {small ? <figcaption>{title}</figcaption> : null}
    </figure>
  )
}

export const FilmSummary = ({ film }) => {
  return (
    <div>
      <FilmPoster film={film} small />
      <div>
        <h4>{film.release_date}</h4>
        <p>{film.overview}</p>
      </div>
    </div>
  )
}

export const FilmList = ({ films }) => {
  return (
    <div>
      <h5>Total: {films.length} films</h5>
      {films.map((film) => (
        <FilmSummary key={film.id} film={film} />
      ))}
    </div>
  )
}
