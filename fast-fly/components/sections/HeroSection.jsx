import React from 'react'
import Container from '../Container'
import classes from "./HeroSection.module.css"

const HeroSection = () => {
  return (
    <section className={classes["hero-section"]} > <Container> <div className={classes["hero-text"]} > <h1 className={classes["primary-heading"]} >وكالة فاست فلاي السياحية</h1> <h2 className={classes["secondary-heading"]} > رفيق مغامراتكم الدائم</h2> </div>  </Container></section>
  )
}

export default HeroSection