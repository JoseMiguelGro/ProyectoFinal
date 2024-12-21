import React from 'react';
import './Seccion.css';

const Seccion = ({ title, content, imageUrl }) => {
    return (
        <section className='seccion'>
            <h1>{title}</h1>
            {imageUrl && <img src={imageUrl} alt={title} />}
            <p>{content}</p>
        </section>
    );
};

export default Seccion;