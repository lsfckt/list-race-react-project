import styles from './RegisterBusiness.module.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import * as requester from '../../api/requester';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

const initialValues = {
    businessImage: '',
    businessName: '',
    businessType: '',
    businessPlace: '',
    businessDescription: '',
}

export default function RegisterBusiness() {
    const navigate = useNavigate();
    const { accessToken } = useContext(AuthContext);

    const registerBusinessHandler = async (businessValues) => {
        try {
            await requester.post('http://localhost:3030/jsonstore/business-catalog', businessValues, accessToken);

            navigate('/explore');
        } catch (error) {
            console.log(error.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerBusinessHandler);


    return (
        <div className={styles['business-layout']}>

            <h3 className={styles['business-title']}>Register your business</h3>

            <form className={styles['business-form']} onSubmit={submitHandler}>
                <div className={styles['labels']}>
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Insert link to image"
                        className={styles['image']}
                        value={values.image}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessName">Business name</label>
                    <input
                        type="text"
                        name="businessName"
                        id="businessName"
                        placeholder="Write your business name"
                        className={styles['business-name']}
                        value={values.businessName}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessType">Business type</label>
                    <input
                        type="text"
                        name="businessType"
                        id="businessType"
                        placeholder="What kind of type is your business?"
                        className={styles['business-type']}
                        value={values.businessType}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessName">Business name</label>
                    <input
                        type="text"
                        name="businessPlace"
                        id="businessPlace"
                        placeholder="Write where is placed your business"
                        className={styles['business-place']}
                        value={values.businessName}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        rows={7}
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Describe your business in a few words."
                        className={styles['business-desc']}
                        value={values.businessPlace}
                        onChange={changeHandler}
                    ></textarea>
                </div>

                <button type="submit" className={styles['business-btn-submit']}>Register your business</button>
            </form>
        </div>
    )
}