import React, { Component } from 'react'
import { addFav, removeFromFavourites } from '../actions';

export default class MovieCard extends React.Component {
    handleFav = () => {
        const { movie } = this.props;
        this.props.dispatch(addFav(movie))
    }
    handleUnFav = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourites(movie))
    }
    render() {
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="moviePoster" src={this.props.movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{this.props.movie.Title}</div>
                    <div className="plot">{this.props.movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{this.props.movie.imdbRating}</div>
                        {
                            this.props.isFavourite
                                ? <button className="unfavourite-btn" onClick={this.handleUnFav}>UnFavourite</button>
                                : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
