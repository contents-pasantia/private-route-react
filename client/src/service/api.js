const TOKEN_API='563492ad6f917000010000012112044965d347109c2d8d07f4042d65';
//https://api.pexels.com/v1/curated?page=2&per_page=10
export const getImages = async (search = 'car')=>{
    const response = await fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=10`,{
        headers:{
            Authorization:`${TOKEN_API}`
        }
    });
    const data = await response.json();
    return data.photos;
} 