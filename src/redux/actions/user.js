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
        console.log(res.data)
        dispatch({type: 'GET_USER_DETAIL', payload: {data: res.data, errorMessage: false}})
    })
    .catch(err => {
        console.log(err.response)
        dispatch({type: 'GET_USER_DETAIL', payload: {data: false, errorMessage: err.response.statusText}})
    })
}