export default function callApi(path,method, body) {

    let endpoint = "https://api.HiCruit.us"

    console.log(window.location.href)
    if (window.location.href.indexOf("localhost") > 0) {
        endpoint = "https://localhost:443";
    }
    

    console.log('this was called')

    
    return new Promise(async(resolve) => {
        const bodyString = JSON.stringify(body)

        let response = ""
        
        if (method.toLowerCase() === "get") {
            response = await fetch(endpoint +  path, {
                method: method.toUpperCase(),
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
            })
        } else {
            // POST 
            response = await fetch(endpoint +  path, {
                method: method.toUpperCase(),
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: bodyString
            })
        }
        


        resolve(response.json())




    })
    
    
    

    

    




}