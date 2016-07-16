//reducer

//最初的状态是"Hello"
const initialState = {
    message: '',
    name:'1'
}

export default function register(state = initialState, action) {

    switch (action.type) {
        case 'CHECK_NAME':
            return {
                isValid: state.name.length>1 ?true :false,
                name:state.name              
            }
   
        default:
            return state;
    }
}
