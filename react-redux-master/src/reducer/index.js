import {combineReducers} from 'redux'

const count = (state=5,action)=>{
    if(action.type === 'INCREASE') {
        //This will increase the value of counter by the value passed to the increment method
        return state+action.inc;
    }
    //Returns the current value of the counter
     
     return state;
}

const myReducers = combineReducers({count});

export default myReducers;
