import { createStore, applyMiddleware } from 'redux';
import reducers from './src/store/reducers'

import thunk from 'redux-thunk'

export const storeFactory = (initialstate)=>{
    return createStore(reducers,initialstate,applyMiddleware(thunk))
}