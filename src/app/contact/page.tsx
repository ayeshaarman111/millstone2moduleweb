import React from 'react'
import style from "./Contact.module.css"

const contact = () => {
  return (

    <div className={style.body}>
    <div className={style.container}>
      <h1 className={style.heading}>Contact Us</h1>
    <form className={style.input}>
      <input className={style.textarea} type="text" placeholder='your Name'/>
      <input className={style.textarea} type="email" placeholder='Your Email' />
      <textarea className={style.textarea} placeholder='Your Message'></textarea>
      <button className={style.button} type='submit'>Send</button>
    </form>
    </div>

    </div>
  )
}

export default contact
