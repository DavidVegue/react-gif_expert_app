import React, { useEffect, useState } from 'react'

export const GifGrid = ({category}) => {


    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs()
    }, [])

    const getGifs = async() => {

        const url = 'http://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=OWduUec2eMzr76YFjK7PYu708857bQFO';

        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs= data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gifs);

        console.log(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {images.map( img => <li key={img.id}>{img.title}</li>)}
            </ol>
        </div>
    )
}
