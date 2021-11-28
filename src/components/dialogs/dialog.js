import React, { useState } from 'react';
import { useLocation } from 'react-router';
import AstroService from './dialogsData';
import Header from '../header/header';

const Dialog = () => {
    const location  = useLocation();
    const astro = new AstroService();
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);

    astro.getMockedData()
    .then((result) => result.data.find((person) => person.id === location.hash.substring(1)))
    .then((result) => {
        setName(result.name);
        setImage(result.image);
    });

    return(
        <>
        <Header linkTo="/dialogsPage" linkType="dialog" image={image} name={name}/>
        </>
    )
    
}
export default Dialog;