import * as TYPES from './example.types'

const initialState = {
    loading: false
}

const reducer = (state = initialState, action = {} ) => {
    switch (action.type) {
        case TYPES.EXAMPLE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case TYPES.EXAMPLE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case TYPES.EXAMPLE_REQUEST_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer()