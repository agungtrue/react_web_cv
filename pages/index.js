import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Router, { useRouter } from "next/router"
import localStorage from 'local-storage'
import Link from 'next/link';

const App = (props) => {
    console.log('props', props)
    const token = localStorage.get('token')

    // const logOut = () => {
    //     localStorage.remove('token')
    //     typeof window !== 'undefined' && window.location.href ? window.location.href = `/login` : false;
    // }

    if(!token) {
        console.log('auth 401')
    } 

    return (
        <div className="container">
            <div className="container__header">
                <div className="header__logo">
                    <img src="/React_Logo.png" />
                </div>
                <div className="header__navigation">
                    
                </div>
                <div className="header__action">
                    <div className="card-box__button">
                            <Link href="/login">
                                <a href="#" className={`btn btn--orange`}> Log In </a>
                            </Link>
                    </div>
                </div>
            </div>

            <div className="container__section-banner">
                <div className="section-left">
                    <p className="text__title"> Hi There, <br />  
                        <span className="text-color--orange">Log In </span> 
                        and enjoy!
                    </p>
                    <p className="text__info">  
                        nemo alias, quis voluptatibus dolorem ducimus illum hic eaque accusantium autem, 
                        obcaecati id suscipit, error facere nostrum nihil!
                    </p>
                    <div className="section-left__btn-profile">
                        
                    </div>
                </div>
                <div className="section-right">
                    <div className="image-cover-homepage"></div>
                </div>
            </div>

            <div className="container__section-footer">

            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    return { 
        props: {
            page: "dashboard"
        }
    }
}

export default App
