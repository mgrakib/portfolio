import { createContext } from "react";

export const AuthContext = createContext({})
const AuthPorvider = ({children}) => {
    const authInfo = {}
    return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthPorvider;