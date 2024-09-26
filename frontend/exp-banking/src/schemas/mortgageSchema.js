import * as yup from 'yup';
const mortgageSchema = yup.object().shape({
  amount: yup.number()
    .min(50000, 'Минималната сума е 50000 лв.')
    .max(1000000, 'Максималната сума е 1000000 лв.')
    .required('Моля, въведете сума на кредита'),
  period: yup.number()
    .min(60, 'Минималният срок е 60 месеца (5 година)')
    .max(360, 'Максималният срок е 360 месеца (30 години)')
    .required('Моля, въведете срок за връщане'),
});

export default mortgageSchema;