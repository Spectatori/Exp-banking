import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useUserStore } from "../stores/AuthStore.js";
import { getUser } from "../api/userService.jsx";
///This method checks if there's a user in the cookies when there's no user in the local storage.
//Then it fetches the user again and sets it in the local storage again.
export const useFetchUser = () => {
    const [cookies] = useCookies(['UserToken']);
    const setUser = useUserStore((state) => state.setUser);
    const { user } = useUserStore();
    useEffect(() => {
        const checkUser = async () => {

            // If no user in local storage and we have a cookie token
            if (!user && cookies.UserToken) {
                try {
                    const fetchedUser = await getUser();
                    setUser(fetchedUser);
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            }
            //if user in local storage and we don't have cookie token
            else if(user && !cookies.UserToken)
            {
                try{
                    document.cookie = 'UserToken=; Max-Age=0; path=/;';
                    setUser(undefined);
                    localStorage.clear();
                    } catch (error) {
                    console.error('Error clearing user data:', error);
                }
            }
        };

        checkUser();
    }, [cookies.UserToken, setUser]);
};