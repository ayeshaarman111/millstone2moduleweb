import React from 'react'
import style from "./privacy.module.css"

const page = () => {
  return (
    <div className={style.body}>

<div className={style.container}>
        <header className={style.privacy}>
            <h1 className={style.h1}>Privacy Policy</h1>
        </header>

        <section className={style.privacysection}>
            <h2 className={style.h2}>Introduction</h2>
            <p className={style.paragraph}>Welcome to TravelTide. Your privacy is of paramount importance to us. This Privacy Policy document outlines the types of personal information that is collected and how it is used, shared, and protected.</p>
        </section>

        <section className={style.privacysection}>
            <h2 className={style.h2}>Information We Collect</h2>
            <p className={style.paragraph}>We collect personal information when you use our website, including but not limited to:</p>
            <ul className={style.ul}>
                <li className={style.li}>Your name, email address, phone number, and other contact details.</li>
                <li className={style.li}>Information you provide when you fill out forms or make bookings.</li>
                <li className={style.li}>Information related to your interactions with our website, including cookies and usage data.</li>
            </ul>
        </section>

        <section className={style.privacysection}>
            <h2 className={style.h2}>How We Use Your Information</h2>
            <p  className={style.paragraph}>The personal information we collect may be used for the following purposes:</p>
            <ul className={style.ul}>
                <li className={style.li}>To provide you with the services you request, such as travel bookings and inquiries.</li>
                <li className={style.li}>To improve our website, enhance user experience, and respond to your inquiries.</li>
                <li className={style.li}>To send promotional offers or updates related to our services, if you opt-in to receive them.</li>
            </ul>
        </section>

        <section className={style.privacysection}>
            <h2 className={style.h2}>Cookies and Tracking Technologies</h2>
            <p  className={style.paragraph}>We use cookies and other tracking technologies to improve the functionality and performance of our website. You can adjust your browser settings to disable cookies, though this may affect the website's functionality.</p>
        </section>

        <section className={style.privacysection}>
            <h2 className={style.h2}>Sharing Your Information</h2>
            <p  className={style.paragraph}>We do not sell, rent, or trade your personal information. However, we may share your information with trusted third parties who help us provide services to you, such as:</p>
            <ul className={style.ul}>
                <li className={style.li}>Travel partners and service providers.</li>
                <li className={style.li}>Payment processors to process transactions securely.</li>
                <li className={style.li}>Legal authorities, if required by law or to protect our rights.</li>
            </ul>
        </section>

        <section className={style.privacysection}>
            <h2 className={style.h2}>Your Data Protection Rights</h2>
            <p  className={style.paragraph}>As a user, you have the right to:</p>
            <ul className={style.ul}>
                <li className={style.li}>Access your personal information.</li>
                <li className={style.li}>Request corrections to any inaccurate or incomplete data.</li>
                <li className={style.li}>Request deletion of your data, subject to certain exceptions.</li>
                <li className={style.li}>Opt-out of marketing communications by unsubscribing.</li>
            </ul>
        </section>

        <section className={style.privacysection}>
            <h2 className={style.h2}>Data Security</h2>
            <p  className={style.paragraph}>We implement industry-standard security measures to protect your personal data. However, please be aware that no method of transmission over the internet is completely secure, and we cannot guarantee the absolute security of your information.</p>
        </section>

        <section className={style.privacysection}>
            <h2 className={style.h2}>Contact Us</h2>
            <p  className={style.paragraph}>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:</p>
            <p  className={style.paragraph}>Email: <a href="mailto:contact@traveltide.com">contact@traveltide.com</a></p>
            <p  className={style.paragraph}>Phone: +1 (123) 456-7890</p>
        </section>
    </div>
      
    </div>
  )
}

export default page
