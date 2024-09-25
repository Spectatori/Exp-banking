import * as yup from 'yup';

export const transactionSchema = yup.object().shape({
    amount: yup.number()
        .test('is-positive-or-negative', function (value) {
            const { details } = this.parent; 

            const incomeCategories = ['Заплата', 'Пенсия', 'Стипeндия'];
            const expenseCategories = ['Хранителни стоки', 'Храна', 'Забавление', 'Пътуване'];

            if (incomeCategories.includes(details)) {
                return value > 0 || this.createError({ message: 'Сумата трябва да бъде положителна за избрана категория Приходи.' });
            }

            if (expenseCategories.includes(details)) {
                return value < 0 || this.createError({ message: 'Сумата трябва да бъде отрицателна за избрана категория Разходи.' });
            }

            return true;
        })
        .min(-10000, 'Максималната допустима сума е -10 000 лв.')
        .required('Моля, въведете сума.'),
    details: yup.string()
        .required('Моля, изберете категория.')
})