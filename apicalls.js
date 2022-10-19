const APIKEY = '47428f5f18b3afcd1dadc445b030afb6'


// fetch with callback
const fetchCallWithCallback=(cb)=>{
    const response = fetch(
        "https://favqs.com/api/qotd",
        {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Token token=${APIKEY}}`
            }
        }
    ).then((response)=>response.json())
        .then((data)=>cb(data))
            .catch((error)=>console.error(error))

}

const callbackFetch=(data)=>{
    console.log("Fetch Callback", data);
    // do something with the data
}

fetchCallWithCallback(callbackFetch)

// fetch async await
const fetchCallWithAsyncAwait = async () =>{
    const response = await fetch(
        "https://favqs.com/api/qotd",
        {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Token token=${APIKEY}}`
            }
        }
    )

    data = await response.json()
    console.log("Fetch async await", data)
    // do stuff with my data

}
fetchCallWithAsyncAwait()

// axios with callback
const axiosWithCallback=(cb)=>{
    axios.get("https://favqs.com/api/qotd",
    {
        headers:{
            "Content-Type": "application/json",
            Authorization: `Token token=${APIKEY}}`
        }
    }).then((response)=>cb(response.data))
        .catch((error)=>console.error(error))

}

const callBackAxios=(data)=>{
    console.log("Axios with callback", data)
    // do stuff with the data
}
axiosWithCallback(callBackAxios)


// axios with async await
const axiosWithAsyncAwait = async () => {
    const response = await axios.get("https://favqs.com/api/qotd",
    {
        headers:{
            "Content-Type": "application/json",
            Authorization: `Token token=${APIKEY}}`
        }
    })
    data = response.data
    console.log("Axios Async Await", data)

}
axiosWithAsyncAwait()