import styles from './Register.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegister } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

const initialValues = { email: '', password: '', 'confirm-password': '' }

export default function Register() {
    const [passwordError, setPasswordError] = useState('');
    const [fetchError, setFetchError] = useState('');
    const navigate = useNavigate();
    const register = useRegister();

    const registerHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            return setPasswordError('Passwords missmatch!');
        }

        try {
            await register(values.email, values.password, values['confirm-password']);
            navigate('/');

        } catch (error) {
            setFetchError(error.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <div className={styles['create-account-layout']}>
            <h3 className={styles['create-account-title']}>Create your account</h3>
            <p>Use a minimum of 10 symbols, including upper and lower case letters and numbers.</p>

            <form className={styles['create-account-form']} onSubmit={submitHandler}>
                <div className={styles['labels']}>
                    <label htmlFor="email">Email</label>
                    <input
                        className={styles['email']}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Write your email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    {fetchError && (
                        <p>
                            <span style={{ color: 'red' }}>{fetchError}</span>
                        </p>
                    )}
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="password">Password</label>
                    <input
                        className={styles['password']}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Create your password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        className={styles['confirm-password']}
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Confirm your password"
                        value={values['confirm-password']}
                        onChange={changeHandler}
                    />
                    {passwordError && (
                        <p>
                            <span style={{ color: 'red' }}>{passwordError}</span>
                        </p>
                    )}
                </div>

                <button type="submit" className={styles['create-btn-submit']}>Create Profile</button>
            </form>
        </div>
    )
}