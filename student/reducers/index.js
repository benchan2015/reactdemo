import { combineReducers } from 'redux';

import b from './helloWorld';


//将所有reducer打包起来
const rootReducer = combineReducers({
  b
});

export default rootReducer;
