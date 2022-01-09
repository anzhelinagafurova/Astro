const initialState = {
    dataSearch: null,
    userInfo: {}
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOULD_UPDATE": {
            return {
                ...state,
                update: action.payload
            }
        }
        case "SET_DATA_SEARCH": {
            return {
                ...state,
                token: action.payload
            }
        }
        case "SET_INFO": {
            return {
                ...state,
                userInfo: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;