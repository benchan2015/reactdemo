import { combineReducers } from 'redux';

import helloWorld from './helloWorld';


//将所有reducer打包起来
const rootReducer = combineReducers({
  helloWorld
});

export default rootReducer;
