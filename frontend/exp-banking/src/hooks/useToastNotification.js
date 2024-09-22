import { toast } from 'react-toastify';

export const useToastNotification = () => {
    const showSuccessToast = (message) => {
        toast.success(message);
    };

    const showErrorToast = (message) => {
        toast.error(message);
    };

    const showCustomToast = (message, className) => {
        toast(message, {
            className,
        });
    };

    return {
        showSuccessToast,
        showErrorToast,
        showCustomToast
    };
};
