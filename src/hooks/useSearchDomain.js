import React, {useEffect, useState} from "react";
import {getCoolNames, getDomainNormalSuggestions, getSearchResult} from "../repositories/DomainRepository";

function useSearchDomain() {
    const [searchState, setSearchState] = useState({
        available: false,
        loading: false,
        isDomainValid: false,
        error: null,
        domain: null,
        suggestedDomainsList: [],
        coolDomainsList: []
    })

    useEffect(() => {
        console.log("useEffect results", searchState)
    }, [searchState])

    const searchDomain = async (domain) => {
        setSearchState((prev) => {return {
            ...prev,
            loading: true,
            domain: domain
        }})

        const {status, data, isAxiosError, isSuccess} = await getSearchResult(domain)

        let isAvailable
        let isDomainValid
        let mError
        let suggestedDomainsList
        let coolDomainsList

        if(isSuccess) {
            const {
                available,
                coolDomains,
                normalDomains
            } = data
            isAvailable = available
            coolDomainsList = coolDomains
            suggestedDomainsList = normalDomains
            isDomainValid = true
            mError = null
        }
        else {
            coolDomainsList = []
            suggestedDomainsList = []
            isAvailable = false
            isDomainValid = false

            if(isAxiosError) {
                if(status === 422) {
                    // domain is not valid
                    mError = null
                }
                else {
                    // some other error from server
                    console.log("some other error from server")
                    mError = data.error == null? "" : data.error
                }
            }
            else {
                // some other error from code other than server
                console.log("something went wrong")
                mError = "Something went wrong"
            }
        }

        console.log("error res is : ", mError)

        setSearchState((prev) => {return{
            ...prev,
            loading: false,
            available: isAvailable,
            suggestedDomainsList: suggestedDomainsList,
            coolDomainsList: coolDomainsList,
            isDomainValid: isDomainValid,
            error: mError
        }})

        return searchState
    }

    return {
        searchState,
        searchDomain
    }
}

export default useSearchDomain