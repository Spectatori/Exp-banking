import React, {useState} from 'react'
import InputField from "../InputField.jsx";
import Button from "../Button.jsx";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        mobileNumber: '',
        email: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registering user:', formData);
    };

    return (
      <div
          className="relative flex flex-col justify-center items-center bg-white bg-opacity-40 rounded-2xl px-24 h-[90%]">
          <h2 className="text-3xl">Регистрация</h2>
          <form onSubmit={handleSubmit}>
              <InputField
                  label="Име"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
              />
              <InputField
                  label="Презиме"
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
              />
              <InputField
                  label="Парола"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
              />
              <InputField
                  label="Повтори Парола"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
              />
              <InputField
                  label="Дата на раждане"
                  type="date"
                  name="DateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
              />
              <InputField
                  label="Мобилен Номер"
                  type="number"
                  name="phoneNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
              />
              <InputField
                  label="Имейл"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
              />

              <Button label="Регистрация" type="submit"/>
          </form>
      </div>
  )
}

export default RegisterForm
