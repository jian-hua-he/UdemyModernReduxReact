import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyByk2qFYYfNilUq04kKJ8uU6m98ZqeJWAY';

YTSearch({
    key: API_KEY,
    term: 'surfboards',
}, function (data) {
    console.log(data);
});

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));