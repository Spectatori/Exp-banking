import { useUserStore } from '../../stores/AuthStore';
import { useCookies } from 'react-cookie';

const AdminChecker = ({ element, authRequired = true }) => {
  const userStore = useUserStore();
  const admin = import.meta.env.VITE_ADMIN_EMAIL;
  const [cookies] = useCookies(['UserToken']);
  const isAuthenticated = !!cookies.UserToken;

  if (admin === userStore.user?.email) {
    console.log("success (admin)");
    return element;
  }

  if (authRequired && !isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return element; 
}

export default AdminChecker;