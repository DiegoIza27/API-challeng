const API_URL="https://jsonplaceholder.typicode.com/users"
export const  getAllLaunches =async ()=>{
    try{
const response = await fetch(API_URL);
const data = await response.json()
    return data
    }catch(error){
        console.error(error)
    }
}

