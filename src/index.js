import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyByk2qFYYfNilUq04kKJ8uU6m98ZqeJWAY';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));