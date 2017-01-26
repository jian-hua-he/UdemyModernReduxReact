import { combineReducers } from 'redux';
import PostsRecuder from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    post: PostsRecuder,
    form: formReducer,
});

export default rootReducer;
