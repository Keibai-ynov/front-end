import React from 'react'
import styles from './AuthForm.module.scss'
import { useState, useRef } from 'react'
import { LoginUser, RegisterUser } from '../../lib/user.lib'
import { useRouter } from 'next/router'

const AuthForm = () => {
    const [isFormLogin, setIsFormLogin] = useState(true)
    const [errMessage, setErrMessage] = useState("")
    const [boolErrMessage, setBoolErrMessage] = useState(false)

    const [validMessage, setValidMessage] = useState("")
    const [boolValidMessage, setBoolValidMessage] = useState(false)
    //router 
    const Router = useRouter()
    //ref des deux formulaires inscription/authentification
    const inputLoginValues = useRef([])
    const inputRegisterValues = useRef([])

    const addLoginValues = el => {
        if(el && ! inputLoginValues.current.includes(el)){
            inputLoginValues.current.push(el)
        }
    }
    const addRegisterValues = el => {
        if(el && ! inputRegisterValues.current.includes(el)){
            inputRegisterValues.current.push(el)
        }
    }

    //Fonction d'inscription
    const register = (e) => {
        e.preventDefault();
        const body = {}
        body.adress={}
        inputRegisterValues.current.forEach((element) => {
            if(element.name != "fullAdress" && element.name != "zipcode" && element.name != "city"){
                body[element.name] = element.value
            }else{
                body.adress[element.name] = element.value
            }
        })
        if(body.password !== body.confirm_password){
            setBoolValidMessage(false)
            setErrMessage("Passwords must be identical")
            setBoolErrMessage(true)
            return false;
        }
        if(body.password.length < 8){
            setBoolValidMessage(false)
            setErrMessage("Passwords must contain at least 8 characters")
            setBoolErrMessage(true)
            return false
        }
        delete body.confirm_password
        body.isAdmin = false
        body.auction = []
        RegisterUser(body).then((data) => {
            if(data.success){
                setBoolErrMessage(false)
                setValidMessage("Registration is successful");
                setBoolValidMessage(true)
            }else{
                setBoolValidMessage(false)
                setErrMessage(data.message)
                setBoolErrMessage(true)
            }
        })
        
    }
    //Fonction d'authentification
    const login = (e) => {
        e.preventDefault();
        const body = {}
        inputLoginValues.current.forEach((element) => {
            body[element.name] = element.value
        })
        LoginUser(body).then(data => {
            if(!data.success){
                setBoolValidMessage(false)
                setErrMessage(data.message)
                setBoolErrMessage(true)
            }else{
                localStorage.setItem('token', data.token)
                Router.push('/home')
            }
        })

    }
    return (
        <div className={styles.form__container}>
            <h1 className={styles.form__title}>{isFormLogin? "Login" :"Register" }</h1>
            <form className={styles.form__body} onSubmit={isFormLogin? login : register }>
                {
                    isFormLogin ? (
                        <>
                            <input ref={addLoginValues} className={styles.form__field} name="email" placeholder="E-mail" type="email" />
                            <input ref={addLoginValues} className={styles.form__field} name="password" placeholder="Password" type="password" />
                        </>

                    ) : (
                        <>
                            <input ref={addRegisterValues} className={styles.form__field} name="lastname" placeholder="Lastname" type="text" />
                            <input ref={addRegisterValues} className={styles.form__field} name="firstname" placeholder="Firstname" type="text" />
                            <input ref={addRegisterValues} className={styles.form__field} name="email" placeholder="E-mail" type="email" />
                            <input ref={addRegisterValues} className={styles.form__field} name="password" placeholder="Password" type="password" />
                            <input ref={addRegisterValues} className={styles.form__field} name="confirm_password" placeholder="Confirm password" type="password" />
                            <input ref={addRegisterValues} className={styles.form__field} name="fullAdress" placeholder="Full adress" type="text" />
                            <input ref={addRegisterValues} className={styles.form__field} name="zipcode" placeholder="Zipcode" type="text" />
                            <input ref={addRegisterValues} className={styles.form__field} name="city" placeholder="City" type="text" />
                            <input ref={addRegisterValues} className={styles.form__field} name="phoneNumber" placeholder="Phone number" type="text" />
                        </>
                    ) 
                }
                {boolErrMessage?(
                    <p className={styles.form__errMessage}>* {errMessage}</p>
                ):""}
                {boolValidMessage?(
                    <p className={styles.form__validMessage}>* {validMessage}</p>
                ):""}
                <input className={styles.form__submit} type="submit" value={isFormLogin ? "Login" : "Register"} />
            </form>
            <p className={styles.link__block}>{isFormLogin? "No account yet?" :"Already have an account?" } <a onClick={() => {
                    setBoolErrMessage(false)
                    setValidMessage(false)
                    setIsFormLogin(!isFormLogin)
                }
            } className={styles.form__link}>{isFormLogin?"Register" :"Login" }</a></p>
        </div>
    )
}

export default AuthForm
