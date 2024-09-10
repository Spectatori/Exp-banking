import * as yup from 'yup';

export const newPasswordSchema = yup.object().shape({
    oldPassword: yup.string()
        .required('Полето е задължително!'),
    newPassword: yup.string()
        .min(8, 'Паролата трябва да съдържа поне 8 символа.')
        .max(50, 'Паролата не може да бъде по-дълга от 50 символа.')
        .matches(/^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])(?=.*[@$!%*?&#])[a-zA-Zа-яА-Я0-9@$!%*?&#]+$/,
            'Паролата трябва да съдържа поне една малка буква, една главна буква, една цифра и един специален символ.')
        .required('Полето е задължително!'),
    confirmNewPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Паролите не съвпадат.')
        .required('Полето е задължително!'),
})