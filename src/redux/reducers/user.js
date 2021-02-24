const initialState = {
    getUsers: [
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
            getUsers: action.payload
        }
    } else {
        return state
    }
}

export default userReducer