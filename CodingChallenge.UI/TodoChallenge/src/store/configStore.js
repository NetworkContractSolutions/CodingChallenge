import {createStore, applyMiddleware, compose} from 'redux';
import {reducer} from "./todoReducer";
import thunk from 'redux-thunk';

const composedMiddleware = compose(applyMiddleware(thunk));

export default function configureStore(initialState) {
    return createStore(reducer, initialState, composedMiddleware);
};

