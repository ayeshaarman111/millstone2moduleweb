import React from 'react'
import style from "../Components/Header.module.css"
import Link from 'next/link'


const Header = () => {
  return (
    <div className={style.container}>

        <div  className={style.header}>TravelTide</div>
        <div className={style.header2}>
            <ul >
            <li className={style.list}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.list}>
            <Link href="/about">About</Link>
          </li>
          <li className={style.list}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={style.list}>
            <Link href="/privacy">Privacy</Link>
          </li>
  
           
            </ul>
        </div>
      
    </div>
  )
}

export default Header
