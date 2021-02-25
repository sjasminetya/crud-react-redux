import axios from 'axios'

export const getUser = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_FAKE_API}`)
    .then(res => {
        dispatch({type: 'GET_USER', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        console.log(err.response.statusText)
        dispatch({type: 'GET_USER', payload: {data: false, errorMessage: err.response.statusText}})
    })
}

export const getUserDetail = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_FAKE_API}/${id}`)
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
    axios.post(`${process.env.REACT_APP_FAKE_API}`, data)
    .then(res => {
        dispatch({type: 'ADD_USER', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        dispatch({type: 'ADD_USER', payload: {data: false, errorMessage: err.message}})
    })
}

export const updateUser = (id, data) => (dispatch) => {
    axios.patch(`${process.env.REACT_APP_FAKE_API}/${id}`, data)
    .then(res => {
        dispatch({type: 'UPDATE_USER', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        dispatch({type: 'UPDATE_USER', payload: {data: false, errorMessage: err.message}})
    })
}

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`${process.env.REACT_APP_FAKE_API}/${id}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}