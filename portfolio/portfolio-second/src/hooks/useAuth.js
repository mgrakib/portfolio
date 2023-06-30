import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthPorvider";

const useAuth = () => {
    const auth = useContext(AuthContext);

    return auth
};

export default useAuth;