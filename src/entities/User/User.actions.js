import * as TYPES from './example.types'

export const getUser = data => {
    return {
        types: [
            TYPES.EXAMPLE_REQUEST,
            TYPES.EXAMPLE_REQUEST_SUCCESS,
            TYPES.EXAMPLE_REQUEST_FAIL
        ],
        promise: client => client.get('/user/get')
    };
}