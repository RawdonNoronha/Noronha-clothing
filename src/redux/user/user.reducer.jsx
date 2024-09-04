//a reducer is a function that gets two properties, that is gets the final state or initial state
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE , action) => {
    switch(action.type)
    {
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;