import React, {useEffect, useState} from "react";
import {getCoolNames, getDomainNormalSuggestions} from "../repositories/DomainRepository";

function useSearchDomain() {
    const [searchState, setSearchState] = useState({
        available: false,
        loading: false,
        error: null,
        domain: null,
        suggestedDomainsList: [],
        coolDomainsList: []
    })

    useEffect(() => {
        console.log("useEffect results", searchState)
    }, [searchState])

    const getDomainAvailability = async () => {
        try {
            // TODO: availability logic goes here


            return {
                error: null,
                available: true,  // TODO: make it according to search
            }
        }
        catch (e) {
            return {
                error: e,
                available: false
            }
        }
    }

    const searchDomain = async (domain) => {
        setSearchState((prev) => {return {
            ...prev,
            loading: true,
            domain: domain
        }})

        const {error, available} = await getDomainAvailability()
        const suggestionList = await getDomainNormalSuggestions(domain)
        const coolList = await getCoolNames(domain)
        console.log("searchDomain function", suggestionList, coolList)

        setSearchState({
            ...searchState,
            loading: false,
            error: error,
            available: available,
            suggestedDomainsList: suggestionList,
            coolDomainsList: coolList
        })

        return searchState
    }

    return {
        searchState,
        searchDomain
    }
}

export default useSearchDomain