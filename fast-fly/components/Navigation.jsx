import React from 'react'
import Link from 'next/link'
import classes from "./Navigation.module.css"
import Container from './Container'
import NavItem from './NavItem'
import CTABtn from './CTABtn'
import { FiMail } from "react-icons/fi";


const navItems = [ {text:"الرحلات"},{text:"عملائنا"},{text:"إكتشف معنا"}, ]

const Navigation = () => {
  return (
    <nav className={classes.navigation} > <Link href="#" className={classes.logo} >FastFly</Link>  <div className={classes["nav-items"]} > <ul className={classes["nav-items"]} > {navItems.map((item,i)=> <li> <NavItem> {item.text} </NavItem> </li> )} </ul> <CTABtn> <FiMail/> إتصل بنا</CTABtn>  </div>  </nav>
  )
}

export default Navigation