import axios from "axios";
import Firebase from "../Firebase"

export const isDomainValid = (domain) => {
    return !(domain === "" || domain == null || typeof domain != "string");
}

export const getSearchResult = async (domain) => {
    const baseUrl = " https://us-central1-artbid-db-dev.cloudfunctions.net/own_api"
    const apiUrl = `/domain/search/${domain}`

    try {
        const user = await Firebase.auth().currentUser
        const token = await user.getIdToken()

        const result = await axios.get(baseUrl + apiUrl, {
            headers: {
                'authorization':`Bearer ${token}`,
                "accept": "application/json",
                "Content-type": "application/json"
            },
            responseType: 'json'
        })
        return {
            status: result.status,
            data: result.data,
            isAxiosError: null,
            isSuccess: true
        }
    }
    catch (e) {
        if(axios.isAxiosError(e)) {
            console.log("axios error", e.response)
            const res = e.response
            return {
                status: res.status,
                data: res.data,
                isAxiosError: true,
                isSuccess: false
            }
        }
        else {
            console.error("something went wrong", e)
            return {
                status: null,
                data: null,
                isAxiosError: true,
                isSuccess: false
            }
        }
    }


}
