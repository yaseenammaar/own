import domainConstants from "../constants/domainConstants";

const INITIAL_STATE = {
    normalDomainsList: [],
    coolDomainsList: [],
    available: false,
    domain: "",
    isDomainValid: false,
    error: null,
    loading: false
}

const domainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case domainConstants.SET_All_DOMAIN_DATA:
            return action.payload

        case domainConstants.RESET_SUGGESTIONS_DATA_STATE:
            return INITIAL_STATE

        default:
            return state
    }
}

export default domainReducer
