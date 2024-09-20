import * as yup from 'yup';

export const transferSchema = yup.object().shape({
    receiverIban: yup.string()
        .matches(/^BG24YORI\d{14}$/, 'Некоректно въведен IBAN.') 
        .length(22, 'Некоректно въведен IBAN.')
        .required('Полето е задължително.')
})