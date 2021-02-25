const initialState = {
    getUsers: false,
    errorUsersList: false,
    title: 'CRUD React Redux',
    userDetail: false,
    errorUserDetail: false
}

const userReducer = (state = initialState, action) => {
    if (action.type === 'GET_USER') {
        return {
            ...state,
            getUsers: action.payload.data,
            errorUsersList: action.payload.errorMessage
        }
    } else if (action.type === 'GET_USER_DETAIL') {
        return {
            ...state,
            userDetail: action.payload.data,
            errorUserDetail: action.payload.errorMessage
        }
    } 
    else {
        return state
    }
}

export default userReducer