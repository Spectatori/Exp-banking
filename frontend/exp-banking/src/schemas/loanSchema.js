import * as yup from 'yup';
const loanSchema = yup.object().shape({
  amount: yup.number()
    .min(200, 'Минималната сума е 200 лв.')
    .max(10000, 'Максималната сума е 10000 лв.')
    .required('Моля, въведете сума на кредита'),
  period: yup.number()
    .min(2, 'Минималният срок е 2 месеца')
    .max(120, 'Максималният срок е 120 месеца')
    .required('Моля, въведете срок за връщане'),
});

export default loanSchema;