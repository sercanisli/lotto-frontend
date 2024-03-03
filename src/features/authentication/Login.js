import React from 'react'
import { useRef, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authenticationSlice'
import { useLoginMutation } from './authenticationApiSlice'
import '../../styles/login.css';

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (event) => {
        event.preventDefault()

        
        try {
            const userData = await login(credentials).unwrap()
            console.log(userData);
            dispatch(setCredentials({...userData,user}))
            setUser('')
            setPwd('')
            navigate('/')
        } catch (error) {
            if(!error?.response) {
                setErrMsg('No Server Response'); 
                console.log(error)
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failde');
            }
            // errRef.current.focus();
        }
    }

    const handleUserInput = (event) => setUser(event.target.value)
    const handlePwdInput = (event) => setPwd(event.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Giriş</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Kullanıcı Adı:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Şifre:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePwdInput}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
        </section>
    )

  return content
}

export default Login