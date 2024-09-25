import React from 'react'
import { useFormik } from 'formik'
import loanPig from '../assets/loans/loanPig.png'
import ShadowBox from '../components/ShadowBox'
import InputField from '../components/auth-forms/AuthInputField'

const LoanFormPage = () => {
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            firstname: '',
            secondname: '',
            lastname: '',
            password: '',
            dateOfBirth: '',
            phoneNumber: '',
            email: '',
            egn: '',
            expDate: '',
            idCardNumber: '',
            postcode: '',
            cityName: '',
            street: '',
            employmentType: '',
        },
        // validationSchema: registerSchema,
        // onSubmit
    })
  return (
    <div className='flex flex-col items-start min-h-screen pl-20 pt-10 font-bold text-3xl'>
      <div className='flex'>
        <p>Потребителски кредит</p>
      </div>
      <div className='flex w-full flex-row justify-between'>
        <div className='flex flex-col pt-32 pl-40'>
            <img src={loanPig}/>
        </div>
        <div className='pt-32 pr-40'>
            <ShadowBox> 
                <div className='flex flex-col'>
                    <div>
                        <h2>Форма за Кандидатстване</h2>
                    </div>
                    <div>
                        <InputField
                            type="text"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                </div>
            </ShadowBox>
        </div>
      </div>
    </div>
  )
}

export default LoanFormPage
