const initialState = {
    dataSearch: null
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

        default:
            return state;
    }
}

export default reducer;