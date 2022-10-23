import { TESTING_TEXT } from "../actions/cart"

export default function cart ( state = [], action ) {
    switch ( action.type )
    {
        case TESTING_TEXT:
            return {
                ...state,
                text: action.payload,
            }
        default:
            return state
    }
}