import AppActions from '../actions/AppActions';

module.exports = {
    searchMovies(movie) {
        $.ajax({
                url: 'http://api.themoviedb.org/3/search/movie?query='+movie.title+'&api_key=455bb69c9403cef5e4cee26bf3c0b505',
                dataType: 'json',
                // contentType: 'application/json',
                method: 'GET',
                cache: false

            })
            .success((data) => {

                AppActions.receiveMovieResults(data.results);


            })
            .done((data) => {

                console.log('Total Results, Ajax Call (appAPI.js:21): \n'+data.total_results);
                console.log('First Result Title (appAPI.js:22): \n' +data.results[1].title);
            })
            .fail(function(xhr, status, err) {
                console.log(err);
            })
    }
}
