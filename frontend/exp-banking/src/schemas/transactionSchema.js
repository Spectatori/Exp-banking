import * as yup from 'yup';

export const transactionSchema = yup.object().shape({
    amount: yup.number()
        .lessThan(0, 'Сумата трябва да бъде по-малка от 0 лв.')
        .min(-10000, 'Максималната допустима сума е -10 000 лв.')
        .required('Моля, въведете сума.'),
    details: yup.string()
        .required('Моля, изберете категория.') 
})