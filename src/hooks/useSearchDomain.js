import React, {useState} from "react";

const useSearchDomain = () => {
    const [searchState, setSearchState] = useState({
        available: false,
        loading: false,
        error: null,
        domain: null,
    })

    const getDomainAvailability = async () => {
        try {
            // TODO: search logic goes here

            return {
                error: null,
                available: true  // TODO: make it according to search
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
        setSearchState({
            ...searchState,
            loading: true,
            domain: domain
        })

        const {error, available} = await getDomainAvailability()

        setSearchState({
            ...searchState,
            loading: false,
            error: error,
            available: available
        })
    }

    return {
        searchState,
        searchDomain
    }
}

export default useSearchDomain