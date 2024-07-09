import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const errors = {};

        if (!formData.username) {
            errors.username = 'Username is required';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (!formData.mobile) {
            errors.mobile = 'Mobile number is required';
        } else if (!mobilePattern.test(formData.mobile)) {
            errors.mobile = 'Mobile number is invalid';
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            console.log('Form data:', formData);
            // Here you can handle the form submission, e.g., sending data to the server.
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            {isSubmitted ? (
                 <div className="success-message">
                 <h2>Form submitted successfully!</h2>
                 <p>Thank you, {formData.username}. We have received your details.</p>
             </div>
         ) : (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Mobile:</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                {errors.mobile && <span>{errors.mobile}</span>}
            </div>
            <button type="submit" className='button'>Submit</button>
        </form>
    )}
        </>
    );
};

export default Form;