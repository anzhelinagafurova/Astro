const initialState = {
    token: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOULD_UPDATE": {
            return {
                ...state,
                update: action.payload
            }
        }
        case "SET_TOKEN": {
            console.log(action.payload)
            return {
                ...state,
                token: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;