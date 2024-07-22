import styles from './Register.module.css';

import { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import * as requester from '../../api/requester';

export default function Register() {

    const [submitClicked, setSubmitClicked] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitClicked(true);
    }

    useEffect(() => {
        (async () => {
            if (submitClicked) {
                const newUser = await requester.post('http://localhost:3030/users/register', { ...formData });
                console.log(newUser);
            }

            setSubmitClicked(false);
        })();

    }, [submitClicked]);

    return (
        <div className={styles['create-account-layout']}>
            <h3 className={styles['create-account-title']}>Create your password</h3>
            <p>Use a minimum of 10 symbols, including upper and lower case letters and numbers.</p>

            <form className={styles['create-account-form']} onSubmit={handleSubmit}>
                <div className={styles['labels']}>
                    <label htmlFor="email">Email</label>
                    <input className={styles['email']} type="email" name="email" id="email" placeholder="Write your email" onChange={handleChange} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="password">Password</label>
                    <input className={styles['password']} type="password" name="password" id="password" placeholder="Create your password" onChange={handleChange} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input className={styles['confirm-password']} type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password" onChange={handleChange} />
                </div>

                <button type="submit" className={styles['create-btn-submit']}>Create Profile</button>
            </form>
        </div>
    )
}