import * as TYPES from './User.types'

export const getUser = data => {
    return {
        types: [
            TYPES.USER_REQUEST,
            TYPES.USER_REQUEST_SUCCESS,
            TYPES.USER_REQUEST_FAIL
        ],
        promise: client => client.get('/user/get')
    };
}