import { combineReducers } from 'redux';

import helloWorld from './helloWorld';
import register from './register';


//将所有reducer打包起来
const rootReducer = combineReducers({
  helloWorld,
  register
});

export default rootReducer;
