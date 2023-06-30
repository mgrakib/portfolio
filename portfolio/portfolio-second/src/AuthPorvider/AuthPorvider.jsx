import { createContext, useState } from "react";

export const AuthContext = createContext({})
const AuthPorvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [routeName, setRouteName] = useState('Home')
    const authInfo = { isOpen, setIsOpen, routeName, setRouteName };
    return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthPorvider;