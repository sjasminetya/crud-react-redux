const initialState = {
    title: 'CRUD React Redux',
    getUsers: false,
    errorUsersList: false,
    userDetail: false,
    errorUserDetail: false,
    getResponDataUser: false,
    errorResponDataUser: false
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
    } else if (action.type === 'ADD_USER') {
        return {
            ...state,
            getResponDataUser: action.payload.data,
            errorResponDataUser: action.payload.errorMessage
        }
    } else if (action.type === 'UPDATE_USER') {
        return {
            ...state,
            getResponDataUser: action.payload.data,
            errorResponDataUser: action.payload.errorMessage
        }
    }
    else {
        return state
    }
}

export default userReducer