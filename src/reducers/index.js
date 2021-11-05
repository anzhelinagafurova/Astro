const initialState = {

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOULD_UPDATE": {
            return {
                ...state,
                update: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;