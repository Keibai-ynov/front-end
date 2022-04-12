const API_ROOT = process.env.API_ROOT

export const SendMessage = async (body) => {
    try{
        const MyHeaders = new Headers()
        MyHeaders.append('Content-type', "application/json")
        const res = await fetch(`${API_ROOT}sendmail`,{
            method:"POST",
            headers:MyHeaders,
            body: JSON.stringify(body)
        })
        const resJson = res.json()
        return resJson
    }catch(err){

    }

}