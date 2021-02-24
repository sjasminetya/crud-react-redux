import users from '../../mock/users.json'

export const getUser = () => (dispatch) => {
    dispatch({type: 'GET_USER', payload: {users}})
}