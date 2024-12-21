import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header/Header'; 
import Seccion from './componentes/Seccion/Seccion';
import Footer from './componentes/Footer/Footer';
import Login from './componentes/Login/Login';
const App = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Seccion 
                            title={"Bienvenido"} 
                            content={"¡Bienvenido a nuestro sitio de noticias de anime! Aquí encontrarás información sobre las últimas series de anime, temporadas y mucho más."} 
                        />
                        <Login />            
                    </>
                } />
                <Route path="/seccion1" element={
                    <>
                        <Seccion 
                            title={"DAN DA DAN"} 
                            content={"Cuando Momo, una estudiante de preparatoria de una familia de médiums espirituales, conoce a su compañero de clase Okarun, un friki del ocultismo, discuten: Momo cree en los fantasmas pero no en los extraterrestres, y Okarun cree en los extraterrestres pero no en los fantasmas. Cuando resulta que ambos fenómenos son reales, en Momo surge un poder oculto y en Okarun el poder de una maldición. Juntos, deberán desafiar a las fuerzas paranormales que amenazan su mundo."} 
                            imageUrl={'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/fa62dd1fc7a9bc0b587f36f53bf572c1.jpg'} 
                        />
                        <Seccion 
                            title="Temporada 1"	 
                            content={"La temporada 1 de DAN DA DAN consta de 12 episodios."}
                            imageUrl={'https://m.media-amazon.com/images/S/pv-target-images/1c59bd864750135ba3c2876af3be0d812014587da04b0eb5ea311c7d600c72f6.jpg'} 
                        />
                        <Seccion
                            title={"Temporada 2"}
                            content={"La Temporada 2 de DAN DA DAN saldra en emisión hasta el Julio del 2025."}
                            imageUrl={'https://ultimasnoticias.com.ve/wp-content/uploads/2024/12/Dan-Da-Dan-temporada-2-llega-a-Netflix-y-Crunchyroll-en-junio-de-2024-Progamers.life-2-scaled.jpg'} 
                        />
                    </>
                } />
                <Route path="/seccion2" element={
                    <>
                        <Seccion 
                            title={"My Dress-Up Darling"} 
                            content={"Gojo Wakana es un estudiante de preparatoria que quiere convertirse en un maestro del tradicional arte de crear muñecas Hina. Aunque adora ese arte, no sabe nada de las últimas tendencias y eso hace que le cueste encajar con sus compañeros de clase. Los más populares de la clase, en especial una chica llamada Marin Kitagawa, parecen creer que él vive en un mundo aparte. Todo esto cambia por completo un día cuando Marin comparte un secreto inesperado con él y hace que sus dos mundos coincidan."} 
                            imageUrl={'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/e882b318ff164f165ac4918e6118ab49.jpg'} 
                        />
                        <Seccion
                            title={"Temporada 1"}
                            content={"La temporada 1 de My Dress-Up Darling consta de 12 episodios."}
                            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_bC1oAAmdUYqEu7eyM5qXXLYo1n_89MpBQ&s'}
                        />
                        <Seccion
                            title={"Temporada 2"}
                            content={"La Temporada 2 de My Dress-Up Darling saldra en emisión hasta el 2025."}
                            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbsT2pBtXOXexLr9vsOAlaVTD6YEjzjQ3Og&s'} 
                        />
                    </>
                    } />
                <Route path="/seccion3" element={
                    <>
                        <Seccion 
                            title={"BLUELOCK"} 
                            content={"Yoichi es un joven al que acaban de eliminar junto a su equipo. De pronto recibe una carta donde lo convocan para participar en un extraño experimento sobre fútbol."} 
                            imageUrl={'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg'} 
                        />
                        <Seccion
                            title={"Temporada 1"} 
                            content={"La temporada 1 de BLUELOCK consta de 24 episodios."}
                            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DykCZpTx4Vsp71R7zmffWve0IE73ueFzEw&s'}
                        />
                        <Seccion
                            title={"temporada 2"}
                            content={""}
                            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jM58d_bLd2M1VW_sxsdRg2fmkrvq-WoYkA&s'} 
                        />
                    </>
                } />
                <Route path="/seccion4" element={
                    <>
                        <Seccion 
                            title="Rent-a-Girlfriend" 
                            content="Kazuya Kinoshita es un joven universitario de 20 años que tras conseguir novia, pudo besarla, ¡pero lo dejó tras solo un mes!. Maldita sea, no quiero tener que volver a pasar por eso. Desesperado, recurre a un método muy particular para tener por fin una cita: solicitar una novia de alquiler. Cuando llega al punto de encuentro le espera una chica: Eres Kazuya, ¿verdad?.  Es una chica preciosa de pelo negro y largo que le sonríe con ternura. La chica es Chizuru Mizuhara. ¡Y de esa cita de alquiler nace algo real! Una comedia romántica repleta de amor y emoción da comienzo." 
                            imageUrl={'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/548c51dae7f89955eadaf9f9ce79359b.jpg'} 
                        />
                        <Seccion
                            title={"Temporada 1"}
                            content={""}
                            imageUrl={'https://www.nextgame.es/wp-content/uploads/2022/05/Kanojo-Okarishimasu-Live-Action.webp'} 
                        />
                        <Seccion
                            title={"Temporada 2"}
                            content={""}
                            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8H-JWU1nWdsd2qWnxgsTB32TOmklSkkFZw&s'}
                        />
                    </>
                    } />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;