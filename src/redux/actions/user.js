import axios from 'axios'

export const getUser = () => (dispatch) => {
    axios.get('http://my-json-server.typicode.com/sjasminetya/crud-react-redux/users')
    .then(res => {
        dispatch({type: 'GET_USER', payload: res.data})
    })
}