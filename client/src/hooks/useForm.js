import { useState } from "react";

export default function useForm(submitHandler, initialValues) {

    const [formData, setFormData] = useState(initialValues  );

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
    }

    return {
        formData,
        handleChange,
        handleSubmit,
    }

}