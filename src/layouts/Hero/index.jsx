import React from 'react'
import Portrait from '/images/portrait-david-charancon.webp'
import Button from '../../components/Button'

const Hero = () => {
    return (
        <section className="hero">
            <div className="row">
                <img src={Portrait} alt="Portrait de David Charancon" className="portrait" />
                <div className="col">
                    <h1 className='hero--title'>DAVID CHARANÇON, RÉALISATEUR & SCÉNA<span>RISTE</span></h1>
                    <p className='hero--text'>Bonjour, Je m’appelle David, j’ai 29 ans, et je réalise des films. Ce qui m’anime, c’est de raconter des histoires qui touchent, qui remuent, qui font écho à ce qu’on vit — de près ou de loin. Je crois profondément au pouvoir du cinéma pour créer du lien, pour faire voir le monde autrement, pour mettre en lumière ce qu’on tait, ce qu’on ressent, ce qu’on rêve. Je travaille autant sur [...] . À chaque fois, j’essaie de capter quelque chose de vrai, d’intime, de juste. Ce qui m’importe, ce n’est pas seulement de faire de belles images, c’est de transmettre une émotion. Quelque chose qui reste après le générique. Merci d’être là, de prendre le temps de découvrir mon univers. Si mon regard te parle, si tu veux collaborer, discuter, ou juste partager une idée : je suis toujours partant pour échanger. À bientôt, David</p>
                    <Button text='Mon CV' />
                </div>  
            </div>
        </section>
    )
}

export default Hero