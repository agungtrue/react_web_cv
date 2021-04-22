import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Router, { useRouter } from "next/router"
import localStorage from 'local-storage'
import Link from 'next/link';

const Home = (props) => {
    console.log('props', props)
    const token = localStorage.get('token')

    const logOut = () => {
        localStorage.remove('token')
        typeof window !== 'undefined' && window.location.href ? window.location.href = `/login` : false;
    }

    if(!token) {
        logOut()
    } 

    if(!token && token === null) {
        return (
            <div className="container">
                <h2></h2>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="container__header">
                    <div className="header__logo">
                        <img src="/React_Logo.png" />
                    </div>
                    <div className="header__navigation">
                        <ul>
                          <li>
                              <Link href="/dashboard">
                                  <a>Home</a>
                              </Link>
                          </li>
                          <li>
                              <Link href="/profile">
                                  <a>Profile</a>
                              </Link>
                          </li>
                        </ul>
                    </div>
                    <div className="header__action">
                        <div className="card-box__button" onClick={logOut}>
                            <a href="#" className={`btn btn--orange`}> LOGOUT </a>
                        </div>
                    </div>
                </div>

                <div className="container__section-banner">
                    <div className="section-left">
                        <p className="text__title">Belajar jadi lebih <br />  
                            <span className="text-color--orange">mudah </span> 
                            dan asik
                        </p>
                        <p className="text__info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque dolores laudantium 
                            nemo alias, quis voluptatibus dolorem ducimus illum hic eaque accusantium autem, 
                            obcaecati id suscipit, error facere nostrum nihil!
                        </p>
                        <div className="section-left__btn-profile">
                            <div className="card-box__button">
                                <Link href="/profile">
                                    <a href="#" className={`btn btn--orange`}> Profile </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <div className="image-cover"></div>
                    </div>
                </div>

                <div className="container__section-footer">

                </div>
            </div>
        )
    }
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

export default Home
