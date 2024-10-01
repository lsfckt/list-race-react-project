import styles from './RegisterBusiness.module.css';

import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';

import * as requester from '../../api/requester';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

const initialValues = {
    businessImage: '',
    businessName: '',
    businessType: '',
    businessLocation: '',
    businessDescription: '',
}

export default function RegisterBusiness() {
    const navigate = useNavigate();
    const { accessToken } = useContext(AuthContext);

    function UploadImage() {
        const [imageSelected, setImageSelected] = useState(null);
        const [imageUrl, setImageUrl] = useState('');

        const uploadImage = () => {
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "your_upload_preset");

            axios.post(
                "https://api.cloudinary.com/v1_1/dgwsgatut/image/upload",
                formData
            )
                .then((response) => {
                    setImageUrl(response.data.secure_url);
                })
                .catch((error) => {
                    console.error("Error uploading the image:", error);
                });
        };
    };

    const registerBusinessHandler = async (businessValues) => {
        try {
            await requester.post('http://localhost:3030/data/business-catalog', businessValues, accessToken);

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
                        type="file"
                        name="businessImage"
                        id="image"
                        className={styles['image']}
                        onChange={(event) => {
                            setImageSelected(event.target.files[0]);
                        }}
                    />
                    <button onClick={UploadImage}>Upload image</button>
                    {imageUrl && <img src={imageUrl} alt='Uploaded' />}
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
                    <label htmlFor="businessLocation">Business Location</label>
                    <input
                        type="text"
                        name="businessLocation"
                        id="businessLocation"
                        placeholder="Where is located your business?"
                        className={styles['business-location']}
                        value={values.businessLocation}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles['labels']}>
                    <label htmlFor="businessDescription">Description</label>
                    <textarea
                        rows={7}
                        type="textarea"
                        name="businessDescription"
                        id="description"
                        placeholder="Describe your business in a few words."
                        className={styles['business-desc']}
                        value={values.businessDescription}
                        onChange={changeHandler}
                    ></textarea>
                </div>

                <button type="submit" className={styles['business-btn-submit']}>Register your business</button>
            </form>
        </div>
    )
}