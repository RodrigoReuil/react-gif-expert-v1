//paso 5
export const getGifs = async(category) => {
    const url = "https://api.giphy.com/v1/gifs/search?api_key=WCVvJUOLoHRgl7Lt7gUH31g8W1DDAuCL&limit=5&q="+ category;
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=WCVvJUOLoHRgl7Lt7gUH31g8W1DDAuCL&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    //de la llamada se mapea y toman solo 3 valores de los tanto q tiene
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(data);
    return gifs;
}