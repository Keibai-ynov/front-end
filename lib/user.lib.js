const API_ROOT = process.env.API_ROOT

export const LoginUser = async (user) => {
    
    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type" , "application/json")
        const res = await fetch(`${API_ROOT}user/login`, {
            method:'POST',
            headers:myHeaders,
            body: JSON.stringify(user)
        })
        const resJson = await res.json();
        return resJson;
    }
    catch(err){
        console.error(err)
    }
}
export const RegisterUser = async (body) => {
    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type" , "application/json")
        const res = await fetch(`${API_ROOT}user`, {
            method:'POST',
            headers:myHeaders,
            body: JSON.stringify(body)
        })
        const resJson = await res.json();
        return resJson;
    }
    catch(err){
        console.error(err)
    }
}
export const GetUser = async (id) => {
    try{
        const myHeaders = new Headers()
        myHeaders.append('Content-type', "application/json")
        const res = await fetch(`${API_ROOT}user/${id}`,{
            method:"GET",
            headers:myHeaders,
        })

        const resJson = res.json()
        return resJson

    }catch(err){

    }
}
export const GetUserFavorites = async (id) => {
    try{
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const res = await fetch(`${API_ROOT}favorites/${id}`,{
            method:"GET",
            headers:myHeaders
        })
        const resJson = await res.json()
        return resJson

    }catch(err){
        console.error(err)
    }
}
export const addToFavorite = async (id, body) => {
 
    try{
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const res = await fetch(`${API_ROOT}favorite/${id}`,{
            method:"PUT",
            headers:myHeaders,
            body:JSON.stringify(body)
        })
        const resJson = await res.json()
        return resJson
        
    }catch(err){
        console.log(err)
        console.error(err)
    }
}
export const GetUserAuctions = async (id) => {
    try{
        const myHeaders = new Headers()
        myHeaders.append("Content-type", "application/json")
        const res = await fetch(`${API_ROOT}auctions/${id}`,{
            method:"GET",
            header:myHeaders
        })
        const resJson = res.json()
        return resJson

    }catch(err){
        console.log(err)
    }
}