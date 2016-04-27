import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';


 class Movie extends React.Component{

  render(){
    let link = 'https://www.themoviedb.org/movie/'+this.props.movie.id+'-'+this.props.movie.original_title;
    let imageUrl = `https://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`;

    return(
      <div className="well">
        <div className="row">
         <div className="col-md-4">
           <img className="thubnail" src={imageUrl} />

         </div>
         <div className="col-md-8">
           <h4>{this.props.movie.original_title}</h4>
           <ul className="list-group">
            <li className="list-group-item">Year Released: {this.props.movie.release_date}</li>
            <li className="list-group-item">Averige votes: {this.props.movie.vote_average}</li>
          </ul>
          <p>{this.props.movie.overview}</p>
          <a className="btn btn-primary" href={link}>View on IMDB</a>
         </div>

        </div>
      </div>
    )
  }

}


export default Movie;
