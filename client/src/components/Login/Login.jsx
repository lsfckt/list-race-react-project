import { useEffect, useState } from 'react';

import styles from './Login.module.css';
import * as requester from '../../api/requester';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [submitClicked, setSubmitClicked] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitClicked(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {

            if (submitClicked) {

                try {
                    const user = await requester.post('http://localhost:3030/users/login', { ...formData });

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

            <form className={styles['login-form']} onSubmit={handleSubmit}>
                <div className={styles['labels']}>
                    <label htmlFor="email">Email</label>
                    <input className={styles['email']} type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="password">Password</label>
                    <input className={styles['password']} type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} />
                </div>

                <button type="submit" className={styles['login-btn-submit']}>Login</button>
            </form>

        </div>
    )
}