
const initialState = {
    validProp: "",
}

export default function common ( state = initialState, action ) {
    switch ( action.type )
    {
        case 'ADD_TODO':
            return { ...state, text: action.payload }
        default:
            return state
    }
}