import * as TYPES from './User.types'

const initialState = {
    loading: false,
    users: [
        {
            name: 'Eugene',
            surname: 'Chepur'
        },
        {
            name: 'Ivan',
            surname: 'Ivanov'
        }
    ]

}

const reducer = (state = initialState, action = {} ) => {
    switch (action.type) {
        case TYPES.USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case TYPES.USER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case TYPES.USER_REQUEST_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer()