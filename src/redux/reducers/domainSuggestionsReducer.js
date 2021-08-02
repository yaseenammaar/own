import domainSuggestionsConstants from "../constants/domainSuggestionsConstants";

const INITIAL_STATE = {
    normal: [],
    cool: []
}

const domainSuggestionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case domainSuggestionsConstants.SET_COOL_SUGGESTIONS:
            return {...state, cool: action.payload}

        case domainSuggestionsConstants.SET_NORMAL_SUGGESTIONS:
            return {...state, normal: action.payload}

        case domainSuggestionsConstants.RESET_SUGGESTIONS_DATA_STATE:
            return INITIAL_STATE

        default:
            return state
    }
}

export default domainSuggestionsReducer
