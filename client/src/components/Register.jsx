import styles from './Register.module.css';

export default function Register() {

    return (
        <div className={styles['create-account-layout']}>
            <h3 className={styles['create-account-title']}>Create your password</h3>
            <p>Use a minimum of 10 symbols, including upper and lower case letters and numbers.</p>

            <form className={styles['create-account-form']}>
                <div className={styles['labels']}>
                    <label htmlFor="email">Email</label>
                    <input className={styles['email']} type="email" name="email" id="email" placeholder="Write your email" />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="password">Password</label>
                    <input className={styles['password']} type="password" name="password" id="password" placeholder="Create your password" />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input className={styles['confirm-password']} type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password" />
                </div>
            </form>

            <button type="submit" className={styles['create-btn-submit']}>Create Profile</button>
        </div>
    )
}