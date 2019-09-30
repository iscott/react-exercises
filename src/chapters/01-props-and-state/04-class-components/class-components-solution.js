import React from 'react'

export class FilmPoster extends React.Component {
  render() {
    const { film, small } = this.props
    const { poster_path, title } = film
    const width = small ? 200 : 500
    return (
      <figure>
        <img src={`https://image.tmdb.org/t/p/w${width}${poster_path}`} alt={`Poster for "${title}"`} />
        {small ? <figcaption>{title}</figcaption> : null}
      </figure>
    )
  }
}

export class FilmSummary extends React.Component {
  render() {
    const { film } = this.props
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
}

export class FilmList extends React.Component {
  render() {
    const { films } = this.props
    return (
      <div>
        <h5>Total: {films.length} films</h5>
        {films.map((film) => (
          <FilmSummary key={film.id} film={film} />
        ))}
      </div>
    )
  }
}
