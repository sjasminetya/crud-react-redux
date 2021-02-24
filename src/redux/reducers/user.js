const initialState = {
    users: [
        {
            id: 1,
            nama: "nama",
            alamat: "alamat",
            umur: 1,
            nohp: "nohp"
          }
    ],
    title: 'CRUD React Redux'
}

const userReducer = (state = initialState, action) => {
    if (action.type === 'GET_USER') {
        return {
            ...state,
            users: action.payload.users
        }
    } else {
        return state
    }
}

export default userReducer