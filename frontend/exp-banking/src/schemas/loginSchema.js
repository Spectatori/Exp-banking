import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string()
        .email('Моля, въведете валиден имейл!')
        .required('Имейлът е задължителен!'),
    password: yup.string()
        .required('Паролата е задължителна!')
})