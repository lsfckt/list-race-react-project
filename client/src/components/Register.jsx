import styles from './Register.module.css';

export default function Register() {

    return (
        <div className={styles['create-pass-layout']}>
            <h3 className={styles['create-pass-title']}>Create your password</h3>
            <p>Use a minimum of 10 symbols, including upper and lower case letters and numbers.</p>
 
            <form className={styles['create-pass-form']}>
                <label htmlFor="password">
                    <input className={styles['password']} type="password" name="password" id="password" placeholder="Create your password"/>
                </label>
                <label htmlFor="confirm-password">
                    <input className={styles['confirm-password']} type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password"/>
                </label>
            </form>

            <button type="submit" className={styles['create-btn-submit']}>Create Profile</button>
        </div>
    )
}