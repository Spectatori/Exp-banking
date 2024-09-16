import * as yup from 'yup'
import { bulgarianCities } from '../data/bulgarianCities.jsx';

export const registerSchema = yup.object().shape({
    firstName: yup.string()
        .matches(/^[А-Я][а-яА-Я\s-]+$/, 'Името трябва да започва с главна буква и да съдържа само букви на кирилица, интервали и тирета.')
        .min(2, 'Името трябва да съдържа поне 2 символа.')
        .max(25, 'Името не може да бъде по-дълго от 25 символа.')
        .required('Името е задължително!'),
    middleName: yup.string()
        .matches(/^[А-Я][а-яА-Я\s]*$/, 'Презимето трябва да започва с главна буква и да съдържа само букви на кирилица.')
        .min(2, 'Презимето трябва да съдържа поне 2 символа.')
        .max(25, 'Презимето не може да бъде по-дълго от 25 символа.')
        .required('Презимето е задължително!'),
    lastName: yup.string()
        .matches(/^[А-Я][а-яА-Я\s]*$/, 'Фамилното име трябва да започва с главна буква и да съдържа само букви на кирилица.')
        .min(2, 'Фамилното име трябва да съдържа поне 2 символа.')
        .max(25, 'Фамилното име не може да бъде по-дълго от 25 символа.')
        .required('Фамилното име е задължително!'),
    password: yup.string()
        .min(8, 'Паролата трябва да съдържа поне 8 символа.')
        .max(50, 'Паролата не може да бъде по-дълга от 50 символа.')
        .matches(/^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])(?=.*[@$!%*?&#])[a-zA-Zа-яА-Я0-9@$!%*?&#]+$/,
            'Паролата трябва да съдържа поне една малка буква, една главна буква, една цифра и един специален символ.')
        .required('Паролата е задължителна!'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Паролите не съвпадат.')
        .required('Моля, потвърдете паролата.'),
    dateOfBirth: yup.date() 
        .max(new Date(), 'Датата на раждане не може да бъде в бъдещето.')
        .test('minAge', 'Трябва да сте навършили 18 години.', value => {
            if (!value) return false; 
            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1 >= 18;
            }
            return age >= 18;
        })
        .required('Дата на раждане е задължителна.'),
    phoneNumber: yup.string()
        .matches(/^(?:\+359|0)[1-9]\d{8}$/, 'Моля, въведете валиден телефонен номер.')
        .required('Телефонният номер е задължителен!'),
    email: yup.string()
        .email('Моля, въведете валиден имейл.')
        .required('Имейлът е задължителен!'),
    egn: yup.string()
        .matches(/^\d{10}$/, 'Моля, въведете валиден ЕГН с 10 цифри.')
        .required('ЕГН е задължително!'),
    expDate: yup.string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Моля, въведете валидна дата във формат YYYY-MM-DD.')
        .test('is-valid-date', 'Личната ви карта е изтекла.', (value) => {
            if (!value) return true;
            const [year, month, day] = value.split('-');
            const inputDate = new Date(year, month - 1, day);
            const today = new Date();
            return inputDate.getFullYear() === +year &&
                    inputDate.getMonth() === month - 1 &&
                    inputDate.getDate() === +day &&
                    inputDate >= today;
        })
            .required('Валидността на личната карта е задължителна!'),
    iDNum: yup.string()
        .matches(/^\d{9}$/, 'Моля, въведете валиден номер на лична карта.')
        .required('Номерът на личната карта е задължителен!'),
    address: yup.object().shape({
        street: yup.string()
            .matches(/^[А-Яа-я0-9\s.,-]+$/, 'Адресът трябва да съдържа само букви на кирилица, цифри, интервали, запетайки, точки и тирета.')
            .min(5, 'Адресът трябва да съдържа поне 5 символа.')
            .max(100, 'Адресът не може да бъде по-дълъг от 100 символа.')
            .required('Адресът е задължителен!'),
        postcode: yup.string()
            .matches(/^\d{4}$/, 'Пощенският код трябва да бъде 4 цифри.')
            .required('Пощенският код е задължителен!')
    }),
}) 