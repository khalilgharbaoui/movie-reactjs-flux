import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import SearchForm from './SearchForm';

function getAppState(){
     return{
       movies: AppStore.getMovieResults()
     }
   }

class App extends React.Component{


   constructor(props){
      super(props);
      this.state = {
      movies: getAppState()
    };

   }



   componentDidMount(){
     AppStore.addChangeListener(this._onChange.bind(this));

   }
   componentWillUnMount(){
     AppStore.removeChangeListener(this._onChange.bind(this));
   }

  render(){

    console.log('Are The Movies in the current state? (App.js:34) \n' +this.state.movies);

    return(
      <div><SearchForm /></div>
    )
  }


  _onChange(){
    console.log('Movies are Now in (App.js:43) \n' +AppStore.getMovieResults());
    this.setState(getAppState());

  }


}


export default App;
