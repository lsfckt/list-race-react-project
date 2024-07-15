import styles from './Login.module.css';

export default function Login() {

    return (
        <div className={styles['enter-pass-layout']}>
            <h3 className={styles['enter-pass-title']}>Enter your password</h3>

            <form className={styles['enter-pass-form']}>
                <label htmlFor="password">
                    <input className={styles['password']} type="password" name="password" id="password" placeholder="Enter your password"/>
                </label>
            </form>

            <button type="submit" className={styles['login-btn-submit']}>Login</button>
        </div>
    )
}