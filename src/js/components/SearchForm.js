import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';


 class SearchForm extends React.Component{

  render(){

    return(
      <div className="search-form">
        <h1 className="text-center">
          Search for Movies!
       </h1>
       <form onSubmit={this.onSubmit}>
         <div className="form-group">
         <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title" />
         </div>
         <button className="btn btn-primary btn-block">Search Movies</button>
       </form>

      </div>
    )
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this);
  }
}


export default SearchForm;
