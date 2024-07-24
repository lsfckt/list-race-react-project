import styles from './RegisterBusiness.module.css';

export default function RegisterBusiness() {

    return (
        <div className={styles['business-layout']}>

            <h3 className={styles['business-title']}>Register your business</h3>

            <form className={styles['business-form']}>
                <div className={styles['labels']}>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" placeholder="Insert link to image" className={styles['image']} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessName">Business name</label>
                    <input type="text" name="businessName" id="businessName" placeholder="Write your business name" className={styles['business-name']} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessType">Business type</label>
                    <input type="text" name="businessType" id="businessType" placeholder="What kind of type is your business?" className={styles['business-type']} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="description">Description</label>
                    <textarea type="textarea" name="description" id="description" placeholder="Describe your business in a few words." className={styles['business-desc']}></textarea>
                </div>

                <button type="submit" className={styles['business-btn-submit']}>Register your business</button>
            </form>
        </div>
    )
}