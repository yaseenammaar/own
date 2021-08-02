import axios from "axios";
import variants from "../variants.json";

export const isDomainValid = (domain) => {
    return !(domain === "" || domain == null || typeof domain != "string");
}

export const checkDomainListAvailability = (list) => {

}

export const getDomainNormalSuggestions = async (domain) => {
    //const baseUrl = "https://api.godaddy.com"
    const baseUrl = " https://api.ote-godaddy.com"
    const apiUrl = `/v1/domains/suggest?query=${domain}&waitMs=1000`

    const result = await axios.get(apiUrl, {
        headers: {
            "Authorization": "sso-key fXqVVPvu6W7a_6eLTdqCvXoFA4TTJAFzcZx:5p3LPrg2wWqScGC1kfgg5t",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization"
        }
    })
    return result.data
}

// prod secret -> 5p3LPrg2wWqScGC1kfgg5t
// test secret -> QuQQDXKq1WAWovuAQ6esbV

const vowels = ["a", "e", "i", "o", "u", "y"];



function isVowel(word) {
    let result = false;
    let split = word.split('.');
    console.log(split[0])
    for (let i = 0; i < split[0].length; i++) {
        if (vowels.includes(split[0][i])) {
            getCoolNames(split[0])
            // result = true;
            // break;
        }
    }
    // console.log(result)
    return result;
}



export async function getCoolNames(domain){
    let names = [];

    if(domain.includes('o')||domain.includes('O')){
        variants["O"].forEach(v=>{
            names.push(domain.replace(/o/g, v))
            names.push(domain.replace(/O/g, v))
        })
    }

    if(domain.includes('a')||domain.includes('A')){
        variants["A"].forEach(v=>{
            names.push(domain.replace(/a/g, v))
            names.push(domain.replace(/A/g, v))
        })
    }

    if(domain.includes('e')||domain.includes('E')){
        variants["E"].forEach(v=>{
            names.push(domain.replace(/e/g, v))
            names.push(domain.replace(/E/g, v))
        })
    }

    if(domain.includes('i')||domain.includes('I')){
        variants["I"].forEach(v=>{
            names.push(domain.replace(/i/g, v))
            names.push(domain.replace(/I/g, v))
        })
    }

    if(domain.includes('u')||domain.includes('U')){
        variants["U"].forEach(v=>{
            names.push(domain.replace(/u/g, v))
            names.push(domain.replace(/U/g, v))
        })
    }

    console.log("Cool Domains : ", names)
    return names;
}