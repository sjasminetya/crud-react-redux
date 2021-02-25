import axios from 'axios'

export const getUser = () => (dispatch) => {
    axios.get('http://my-json-server.typicode.com/sjasminetya/crud-react-redux/users')
    .then(res => {
        dispatch({type: 'GET_USER', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        console.log(err.response.statusText)
        dispatch({type: 'GET_USER', payload: {data: false, errorMessage: err.response.statusText}})
    })
}

export const getUserDetail = (id) => (dispatch) => {
    axios.get(`http://my-json-server.typicode.com/sjasminetya/crud-react-redux/users/${id}`)
    .then(res => {
        dispatch({type: 'GET_USER_DETAIL', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        dispatch({type: 'GET_USER_DETAIL', payload: {data: false, errorMessage: err.response.statusText}})
    })
}

export const deleteDataUser = () => (dispatch) => {
    dispatch({type: 'GET_USER_DETAIL', payload: {data: false, errorMessage: false}})

    dispatch({type: 'ADD_USER', payload: {data: false, errorMessage: false}})
}

export const addUser = (data) => (dispatch) => {
    axios.post(`http://my-json-server.typicode.com/sjasminetya/crud-react-redux/users`, data)
    .then(res => {
        dispatch({type: 'ADD_USER', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        dispatch({type: 'ADD_USER', payload: {data: false, errorMessage: err.message}})
    })
}

export const updateUser = (id, data) => (dispatch) => {
    axios.patch(`http://my-json-server.typicode.com/sjasminetya/crud-react-redux/users/${id}`, data)
    .then(res => {
        dispatch({type: 'UPDATE_USER', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        dispatch({type: 'UPDATE_USER', payload: {data: false, errorMessage: err.message}})
    })
}