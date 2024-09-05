// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Footer from '../components/Footer';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement validation and form submission logic
        console.log('Registering user:', formData);
    };

    return (
        <div className="">
            <div className="flex h-screen bg-test justify-center">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <InputField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <Button label="Register" type="submit" />
                </form>
            </div>
            <Footer/>
        </div>

    );
};

export default RegisterPage;