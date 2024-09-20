import styles from './Login.module.css';

import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';

const initialValues = { email: 'email', password: 'password' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        async ({ email, password }) => {
            try {
                await login(email, password);
                navigate('/');
            } catch (error) {
                console.log(error.message);

            }
        });



    return (
        <div className={styles['login-layout']}>
            <h3 className={styles['login-title']}>Login to your account</h3>

            <form className={styles['login-form']} onSubmit={submitHandler}>
                <div className={styles['labels']}>
                    <label htmlFor="email">Email</label>
                    <input
                        className={styles['email']}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="password">Password</label>
                    <input
                        className={styles['password']}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                </div>

                <button type="submit" className={styles['login-btn-submit']}>Login</button>
            </form>

        </div>
    )
}