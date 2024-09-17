import styles from './Login.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as requester from '../../api/requester';
import { useForm } from '../../hooks/useForm';

const initialValues = {
    email: 'email',
    password: 'password',
}

export default function Login() {

    const [user, setUser] = useState(initialValues);

    //TODO: update with useForm hook
    const { values, changeHandler, submitHandler } = useForm(initialValues);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {

            if (submitClicked) {

                try {
                    const user = await requester.post('http://localhost:3030/users/login', { ...user });

                    setUser(user);
                    
                    const accessToken = user.accessToken;
                    localStorage.setItem('accessToken', accessToken);

                    navigate('/');
                } catch (err) {
                    console.log(err.message);
                }

            }

            setSubmitClicked(false);
        })();

    }, [submitClicked]);

    return (
        <div className={styles['login-layout']}>
            <h3 className={styles['login-title']}>Login to your account</h3>

            <form className={styles['login-form']} onSubmit={submitHandler}>
                <div className={styles['labels']}>
                    <label htmlFor="email">Email</label>
                    <input className={styles['email']} type="email" name="email" id="email" placeholder="Enter your email" onChange={changeHandler} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="password">Password</label>
                    <input className={styles['password']} type="password" name="password" id="password" placeholder="Enter your password" onChange={changeHandler} />
                </div>

                <button type="submit" className={styles['login-btn-submit']}>Login</button>
            </form>

        </div>
    )
}