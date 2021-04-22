import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import axios from "axios"
import Router from "next/router"
import { Input, Tooltip, Button, Spin, notification } from 'antd';
import localStorage from 'local-storage'

const Login = (props) => {

  const [loading, setLoading] = useState(false)
  const [classLoading, setClassLoading] = useState({
      buttonLogin: 'btn--orange',
      buttonText: 'sign in'
  })

  const [dataForm, setDataForm] = useState(
      {
        email: '',
        password: '',
      }
  );

  const handleFormChange = (e) => {
      let { name, value } = e.target
      console.log('dataForm', dataForm)

      setDataForm(prev => ({
          ...prev,
          [name]: value
      }))
  }

  const actionLogin = async () => {
      if(!dataForm.email || !dataForm.password) {
          notification.warning({
              message: 'Please fill email and password!'
          });
          return
      }

      setLoading(true)
      setClassLoading(prev => ({
          ...prev,
          buttonLogin: 'btn--grey',
          buttonText: 'logged in...'
      }))

      console.log('actionLogin', dataForm)
      const API_URL = "https://polar-bastion-55096.herokuapp.com";
      const payload = dataForm;

      try {
          let response = await axios.post(`${API_URL}/auth/v1/users/login`, payload)
          console.log('response', response)
    
          if(response.data && response.data.status == "success") {
              setLoading(false)
              setClassLoading(prev => ({
                  ...prev,
                  buttonLogin: 'btn--blue',
                  buttonText: 'sign in'
              }))
    
              Router.push('/dashboard')
              notification.success({
                  message: `Welcome ${response.data.user.name.toUpperCase()}!`
              });

              localStorage.set('token', response.data.token);
          }
          else {
              notification.error({
                message: 'Email or password incorrect'
              });
              setLoading(false)
          }
      }
      catch (err) {
          console.log('err', err)
          notification.error({
              message: 'Email or password incorrect'
          });
          setLoading(false)
          setClassLoading(prev => ({
              ...prev,
              buttonLogin: 'btn--orange',
              buttonText: 'sign in'
          }))
      }
  }

  const token = localStorage.get('token')
  const checkToken = () => {
      // typeof window !== 'undefined' && window.location.href ? window.location.href = `/dashboard` : false;
      Router.push('/dashboard')
  }
  if(token) {
      checkToken()
  } 

  return (
      <div className="container-login">
          <div className="card-box">
              <div className="card-box__content">
                  <div className="card-box__logo">
                      <img src={"/React_Logo.png"} />
                  </div>
                  <h2>Welcome</h2>
                  <div className="text__data">
                      <Input 
                          name="email"
                          onChange={e => handleFormChange(e) }
                          onKeyPress={(e) => e.key === 'Enter' && actionLogin()}
                          placeholder="Type your Email" 
                      />
                  </div>
                  <div className="text__data">
                      <Input
                          type="password"
                          name="password"
                          onChange={e => handleFormChange(e) }
                          onKeyPress={(e) => e.key === 'Enter' && actionLogin()}
                          placeholder="Type your Password" 
                      />
                  </div>
                  <div className="card-box__button" onClick={actionLogin}>
                      <a href="#" className={`btn ${classLoading.buttonLogin}`}> {classLoading.buttonText} </a>
                  </div>
                  <div className="card-box__loading">
                      {
                          loading && <Spin size="large" />
                      }
                  </div>
              </div>
          </div>
      </div>
  )
}

export async function getStaticProps() {

    return { 
        props: {
            name: 'syuhada dwi agung',
            page: "login"
        }
    }
}

export default Login
