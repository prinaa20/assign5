import React, { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        address: '',
        dob: '',
        gender: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, mobile, email, password, confirmPassword } = formData;
        const mobilePattern = /^[0-9]{10}$/;
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
        if (
            name && mobilePattern.test(mobile) && emailPattern.test(email) &&
            password && password === confirmPassword
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted with: ', formData);
    };

    const handleReset = () => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            address: '',
            dob: '',
            gender: '',
            username: '',
            password: '',
            confirmPassword: ''
        });
        setIsValid(false);
    };

    return (
        <form onSubmit={handleSubmit} onChange={validateForm}>
            <h2>Sign Up Form</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Mobile:
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Address:
                <textarea name="address" value={formData.address} onChange={handleChange} />
            </label>
            <label>
                Date of Birth:
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </label>
            <label>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </label>

            <div>
                <button type="reset" onClick={handleReset}>Reset</button>
                <button type="submit" disabled={!isValid}>Submit</button>
            </div>
        </form>
    );
};

export default SignUpForm;