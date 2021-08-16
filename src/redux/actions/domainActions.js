import domainConstants from "../constants/domainConstants";

export const setDomainData = data => (
    {
        type: domainConstants.SET_All_DOMAIN_DATA,
        payload: data,
    }
);

export const resetSuggestionsData = data => (
    {
        type: domainConstants.RESET_SUGGESTIONS_DATA_STATE,
        payload: data,
    }
);
