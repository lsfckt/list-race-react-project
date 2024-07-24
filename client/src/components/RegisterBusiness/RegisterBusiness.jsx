import styles from './RegisterBusiness.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as requester from '../../api/requester';


export default function RegisterBusiness() {

    const navigate = useNavigate()

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
        });
    }

    useEffect(() => {
        (async () => {
            if (submitClicked) {
                const accessToken = localStorage.getItem('accessToken');

                try {
                    const newBusiness = await requester.post('http://localhost:3030/data/business-catalog', { ...formData }, accessToken);
                    console.log(newBusiness);
                    navigate('/explore');
                    
                } catch (err) {
                    console.log(err.message);
                }

            }

            setSubmitClicked(false);
        })();

    }, [submitClicked]);

    return (
        <div className={styles['business-layout']}>

            <h3 className={styles['business-title']}>Register your business</h3>

            <form className={styles['business-form']} onSubmit={handleSubmit}>
                <div className={styles['labels']}>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" placeholder="Insert link to image" className={styles['image']} onChange={handleChange} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessName">Business name</label>
                    <input type="text" name="businessName" id="businessName" placeholder="Write your business name" className={styles['business-name']} onChange={handleChange} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessType">Business type</label>
                    <input type="text" name="businessType" id="businessType" placeholder="What kind of type is your business?" className={styles['business-type']} onChange={handleChange} />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="description">Description</label>
                    <textarea rows={7} type="textarea" name="description" id="description" placeholder="Describe your business in a few words." className={styles['business-desc']} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className={styles['business-btn-submit']}>Register your business</button>
            </form>
        </div>
    )
}