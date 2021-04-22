import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Router, { useRouter } from "next/router"
import localStorage from 'local-storage'
import Link from 'next/link';

const Profile = (props) => {
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
                        <p className="text__title">Syuhada Dwi Agung <br />  
                            <span className="text-color--orange">profile </span> 
                            
                        </p>
                        <p className="text__info_profile">
                              I am an intermediate
                              web developer and
                              focus more for the full
                              stack and my goal for
                              now is to become a
                              Javascript Developer.
                              and also consider or
                              looking for another
                              good technology
                              developments
                        </p>
                        
                    </div>
                    <div className="section-right">
                        <div className="image-cover"></div>
                    </div>
                </div>

                <div className="container__section-work-experiment">
                    <div className="section-right">
                        <div className="image-cover-work1"></div>
                    </div>
                    <div className="section-left">
                        <p className="text__title"><span className="text-color--orange">Work </span> <br />  
                            Experience
                        </p>
                        <p className="text__info_profile">
                            <span className="text-color--orange">Fullstack Javascript Developer </span> <br />
                              Collaborative Excellence Indonesia <br />
                            <span className="text-color--grey"> Sebtember 2020 to Present </span>
                        </p>
                        <p className="text__info_profile">
                            <span className="text-color--orange">Fullstack Web Developer </span> <br />  
                              Mednefits <br />
                            <span className="text-color--grey"> April 2020 to December 2020 </span>
                        </p>
                        <p className="text__info_profile">
                            <span className="text-color--orange">Backend Developer </span> <br />  
                              EmpatKali <br />
                            <span className="text-color--grey"> Sep. 2019 to March 2020 </span>
                        </p>
                        <p className="text__info_profile">
                            <span className="text-color--orange">Junior Web Developer </span> <br />  
                              Kufed <br />
                              <span className="text-color--grey"> March 2018 to June 2019 </span>
                        </p>
                    </div>
                </div>

                <div className="container__section-Frameworks-tools">
                    <div className="section-left">
                        <p className="text__title">Tools & <br />  
                            <span className="text-color--orange">Frameworks </span> 
                            
                        </p>
                        <p className="text__info_profile">
                        MVC, Laravel/Lumen, MySQL
                        Node Express JS, Adonis JS,
                        Vue, React, Bootstrap,
                        Mongoose, TDD, MongoDB,
                        Redis, Nginx, Docker, Digitalocean
                        ubuntu server
                        </p>

                        <br /><br /><br />

                        <p className="text__title">
                            <span className="text-color--orange">In Exploring</span> 
                        </p>
                        <p className="text__info_profile">
                            React Native, Docker, Python
                        </p>
                        
                    </div>
                    <div className="section-right">
                        <div className="image-cover-framework"></div>
                    </div>
                </div>

                <div className="container__section-job-desc">
                    <div className="section-left">
                        {/* <p className="text__title"><span className="text-color--orange">Work </span> <br />  
                            Experience
                        </p> */}
                        <p className="text__info_profile">
                            <span className="text-color--orange">Backend Developer </span> <br />  
                            EmpatKali Indonesia<br />
                            <p className="text__info_job_desc">
                            Write JavaScript Code using
                            Node JS for build Restful API
                            with MongoDB database.<br />
                            Doing TTD using Mocha and
                            Chai.<br />
                            Write JavaScript Code using
                            VueJS for interfacing with
                            HTML and CSS.
                            </p>
                        </p>
                        <p className="text__info_profile">
                            <span className="text-color--orange">Junior Web Developer </span> <br />  
                            Kufed <br />
                            <p className="text__info_job_desc">
                            Write PHP Code using Lumen
                            Laravel for build Restful API
                            with Nginx and MySQL
                            databases.<br />
                            Performed database design
                            Write JavaScript Code using
                            VueJS for interfacing with
                            HTML and CSS.<br />
                            Implementation Web Design
                            from designer.
                            </p>
                        </p>
                    </div>
                    <div className="section-left">
                        <p className="text__title"><span className="text-color--orange">Job </span> <br />  
                            Description
                        </p>
                        <p className="text__info_profile">
                            <span className="text-color--orange">Fullstack Javascript Developer </span> <br />  
                            Collaborative Excellence Indonesia <br />
                            <p className="text__info_job_desc">
                            Write Javascript Code using
                            Node Express JS for build
                            Restful API with SQL Server
                            databases base on client
                            requirement.<br />
                            Write JavaScript Code using
                            React JS, Next JS for
                            interfacing with HTML, CSS
                            and Antd library.
                            </p>
                        </p>
                        <p className="text__info_profile">
                            <span className="text-color--orange">Fullstack Web Developer </span> <br />  
                            Mednefits <br />
                            <p className="text__info_job_desc">
                              Write PHP Code using Lumen
                              Laravel for build Restful API
                              with Nginx and MySQL
                              databases base on client
                              requirement.<br />
                              Performed database design
                              Write JavaScript Code using
                              VueJS, AgularJS for
                              interfacing with HTML and
                              CSS.<br />
                              Implementation Web Design
                              from designer (Admin
                              Website).
                            </p>
                        </p>
                        
                    </div>
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

export default Profile
