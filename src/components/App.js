import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {

  componentDidMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    })
    // api call
    // dispatch action to add movies
    this.props.store.dispatch(addMovies(data))
    //after dispatch immediately subscribe callback is called then comes to console.log
    // console.log(this.props.store.getState());
  }

  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render() {
    const { movies } = this.props.store.getState();
    const { list, favourites, showFav } = movies;
    const displayMovies = showFav ? favourites : list
    console.log(this.props.store.getState())
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFav ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movie</div>
            <div className={`tab ${showFav ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
        </div>
        <div className="list">
          {displayMovies.map(((movie, index) => (
            <MovieCard
              movie={movie}
              key={`movie-${index}`}
              dispatch={this.props.store.dispatch}
              isFavourite={this.isFavourite(movie)}
            />
          )))}
        </div>
        {displayMovies.length === 0 ? <div className="no-movies">No MOVIES</div> : null}
      </div>
    );
  }
}

export default App;
