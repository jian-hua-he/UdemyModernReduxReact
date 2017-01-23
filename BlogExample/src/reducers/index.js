import { combineReducers } from 'redux';
import PostsRecuder from './reducer_posts';

const rootReducer = combineReducers({
    post: PostsRecuder,
});

export default rootReducer;
