const   API_BASE_URL="https://api.tvmaze.com";

export async function apiGet(queryString){
    const response=fetch(`${API_BASE_URL}${queryString}`)
    .then(res=>res.json())
    return response
}