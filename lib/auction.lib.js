const API_ROOT = process.env.API_ROOT

export const getAuctions = async () => {
    try{
        const myHeaders = new Headers()
        myHeaders.append("Content-type", "Application/json") 
        const res = await fetch(`${API_ROOT}auctions`,{
            headers: myHeaders,
            method:"GET"
        })
        const resJson = await res.json()
        return resJson

    }catch(err){
        console.log(err)
    }
} 
export const getFilteredAuctions = async (filter) => {
    try{
        const myHeaders = new Headers()
        myHeaders.append("Content-type", "Application/json") 
        const res = await fetch(`${API_ROOT}auctions/filter`,{
            headers: myHeaders,
            method:"POST",
            body: JSON.stringify(filter)
        })
        const resJson = await res.json()
        return resJson

    }catch(err){
        console.log(err)
    }
} 
export const getAuction = async (id) => {
    try{
        const myHeaders = new Headers()
        myHeaders.append('Content-type', "Application/json")
        const res = await fetch(`${API_ROOT}auction/${id}`, {
            method: "GET",
            headers:myHeaders
        })
        const resJson = await res.json()
        return resJson

    }catch(err){
        console.log(err)
    }
} 
export const UpdateAuction = async (id, body) => {
    try{
        var myHeaders = new Headers()
        myHeaders.append("Content-type", "application/json")
        const res = await fetch(`${API_ROOT}auction/${id}`,{
            method:"PUT",
            headers:myHeaders,
            body: JSON.stringify(body)
        })
        const resJson = res.json()
        return resJson
    }catch(err){
        console.log(err)
    }
}
export const CreateAuction = async (body) => {
    try{
        const myHeaders = new Headers()
        myHeaders.append("Content-type", "application/json")
        const res = await fetch(`${API_ROOT}auction`,{
            method: "POST",
            headers:myHeaders,
            body: JSON.stringify(body)
        })
        const resJson = res.json()
        return resJson

    }catch(err){
        console.log(err)
    }
}