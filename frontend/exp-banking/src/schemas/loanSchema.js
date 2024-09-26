import * as yup from 'yup';
const loanSchema = yup.object().shape({
  amount: yup.number()
    .min(200, 'Минималната сума е 200 лв.')
    .max(50000, 'Максималната сума е 50000 лв.')
    .required('Моля, въведете сума на кредита'),
  period: yup.number()
    .min(2, 'Минималният срок е 2 месеца')
    .max(120, 'Максималният срок е 120 месеца (10 години)')
    .required('Моля, въведете срок за връщане'),
});

export default loanSchema;