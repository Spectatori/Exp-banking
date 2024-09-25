import React from 'react'
import { useFormik } from 'formik'
import loanPig from '../assets/loans/loanPig.png'
import ShadowBox from '../components/ShadowBox'
import InputField from '../components/auth-forms/AuthInputField'

const LoanFormPage = () => {
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            egn: '',
            amount:'',
            iban:'',
        },
        // validationSchema: registerSchema,
        // onSubmit
    })
  return (
    <div className='flex flex-col items-start min-h-screen pl-20 pt-10 font-bold text-3xl max-xl:pl-0 max-xl:pt-0'>
      <div className='flex flex-col'>
        <p>Потребителски кредит</p>
      </div>
      <div className='flex w-full flex-row justify-between pb-20 max-xl:flex-row'>
        <div className='flex flex-col pt-32 pl-40'>
            <img src={loanPig}/>
        </div>
        <div className='pt-20 pr-40'>
            <ShadowBox> 
                <div className='flex flex-col'>
                  <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Форма за Кандидатстване</h2>
                    </div>
                    <div className='pt-10 flex flex-col items-center gap-2 pb-4'>
                      <label className='text-xl'>Сума на кедита в ЛВ</label>
                      <InputField
                          type="number"
                          name="Amount"
                          value={values.amount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                      />
                    </div>
                    <div className='flex flex-col items-center gap-2 pb-4'>
                      <label className='text-xl'>Срок за връщане в месеци</label>
                      <InputField
                          type="number"
                          name="Period"
                          value={values.period}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                      />
                    </div>
                    <div className='flex flex-col items-center gap-2 pb-4'>
                      <label className='text-xl'>IBAN</label>
                      <InputField
                          type="text"
                          name="IBAN"
                          value={values.iban}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                      />
                    </div>
                    <div className='pt-10 flex flex-col items-center'>
                      <button type="submit" className='text-xl max-w-60 text-center bg-kelly-green rounded-xl p-3 text-white'>
                        Кандидатствай
                      </button>
                    </div>
                  </form>
                    
                </div>
            </ShadowBox>
        </div>
      </div>
    </div>
  )
}

export default LoanFormPage
