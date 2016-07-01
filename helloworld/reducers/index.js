import { combineReducers } from 'redux';

import a from './helloWorld';


//将所有reducer打包起来
const rootReducer = combineReducers({
  a
});

export default rootReducer;
