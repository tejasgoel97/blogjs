import React from 'react'
import classes from "./hero.module.css"
import Image from "next/image"

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}><Image src="/images/site/JAVASCRIPT.png" height="300" width="300"/></div>
            <h1>Hi My Name is Tejas </h1>
            <p>I am here to Talk about Javascript ans all some popular frontend libraries like React.</p>
        </section>
    )
}

export default Hero
