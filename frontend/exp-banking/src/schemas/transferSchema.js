import * as yup from 'yup';

export const transferSchema = yup.object().shape({
    receiverIban: yup.string()
        .matches(/^BG24YORI\d{14}$/, 'Некоректно въведен IBAN.')
        .length(22, 'Некоректно въведен IBAN.')
        .required('Полето е задължително.'),
    amount: yup.number()
        .moreThan(0, 'Сумата трябва да бъде по-голяма от 0 лв.')
        .max(10000, 'Максималната допустима сума е 10 000 лв.')
        .required('Моля, въведете сума.'),
})