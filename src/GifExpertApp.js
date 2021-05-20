import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     //Añadir una nueva categoria
    //     const newName = 'Pikachu';
    //     if (!categories.includes(newName)) {
    //         setCategories( [...categories, newName] );
    //     }
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr />

            <ol>
                { 
                    categories.map( category => {
                        return <li key = {category}>{category}</li>;
                    })
                }
            </ol>

        </>
    );

};

export default GifExpertApp;