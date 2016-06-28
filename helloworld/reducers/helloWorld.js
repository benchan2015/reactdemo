//reducer

//最初的状态是"Hello"
const initialState = {
    text: 'Hello'
}

export default function helloWorld(state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text == 'Hello' ? 'Stark' : 'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            }
        default:
            return {
                text: 'Hello'
            }
    }
}
