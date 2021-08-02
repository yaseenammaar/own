import domainSuggestionsConstants from "../constants/domainSuggestionsConstants";

export const setCoolSuggestions = data => (
    {
        type: domainSuggestionsConstants.SET_COOL_SUGGESTIONS,
        payload: data,
    }
);

export const setNormalSuggestions = data => (
    {
        type: domainSuggestionsConstants.SET_NORMAL_SUGGESTIONS,
        payload: data,
    }
);

export const resetSuggestionsData = data => (
    {
        type: domainSuggestionsConstants.RESET_SUGGESTIONS_DATA_STATE,
        payload: data,
    }
);
