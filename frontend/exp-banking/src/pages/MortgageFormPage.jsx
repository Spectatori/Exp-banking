import React from 'react'
import { useFormik } from 'formik'

import loanPig from '../assets/loans/loanPig.png'
import ShadowBox from '../components/ShadowBox'
import InputField from '../components/auth-forms/AuthInputField'
import { useUserStore } from '../stores/AuthStore'
import mortgageSchema from '../schemas/mortgageSchema'
import { mortgageRequest } from '../api/loanServices'

const MortgageFormPage = () => {
    
    const user = useUserStore((state) => state.user);
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            egn: user.egn,
            amount:'',
            iban: user.accounts[0]?.iban || '',
            period:'',
        },
        validationSchema: mortgageSchema,
        onSubmit: async (values) => {
          try {
            const response = await mortgageRequest({
              amount: values.amount,
              iban: values.iban,
              period: values.period,
            });
            console.log(response);
          } catch (error) {
            console.error('Error submitting loan request:', error);
          }
        },
    })
    
  return (
    <div className='flex flex-col items-start min-h-screen pl-20 pt-10 font-bold text-3xl max-2xl:pl-0 max-xl:pt-0'>
      <div className='flex max-xl:flex-col max-xl:self-center '>
        <p className=' max-xl:pt-16'>Ипотечен кредит</p>
      </div> 
      <div className='flex w-full flex-row justify-between pb-20 max-2xl:flex-col max-2xl:items-center'>
        <div className='flex flex-col pt-32 pl-40 '>
            <img className='max-2xl:invisible max-2xl:w-0 max-2xl:h-0' src={loanPig}/>
        </div>
        <div className='pt-20 pr-40 max-2xl:pr-0 max-xl:pt-0'>
            <ShadowBox> 
                <div className='flex flex-col'>
                  <form onSubmit={handleSubmit}>
                    <div className='max-xl:text-center'>
                        <h2>Форма за Кандидатстване</h2>
                    </div>
                    <div className='pt-10 flex flex-col items-center gap-2 pb-4'>
                      <label className='text-xl'>Сума на кедита в ЛВ</label>
                      <InputField
                          type="number"
                          name="amount"
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
                          name="period"
                          value={values.period}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                      />
                    </div>
                    <div className='flex flex-col items-center gap-2 pb-4'>
                    <select
                        name="iban"
                        value={values.iban}
                        onChange={handleChange}    
                        className="font-bold text-xl p-2 rounded bg-teal-700 text-white"
                    >
                        {user.accounts.map((account, index) => (
                            <option key={index} value={account.iban}>
                                {account.iban}
                            </option>
                        ))}
                    </select>
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

export default MortgageFormPage
