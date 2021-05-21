import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers'

import thunk from 'redux-thunk'

export const storeFactory = (initialstate)=>{
    return createStore(reducers,initialstate,applyMiddleware(thunk))
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }