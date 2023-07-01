/** @format */

import { createContext, useState } from "react";

export const AuthContext = createContext({});
const AuthPorvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [routeName, setRouteName] = useState("Home");
	let [isOpenModal, setIsOpenModal] = useState(false);
	const [showNavItem, setShowNavItem] = useState(false);
	const [isSideBarShow, setIsSideBarShow] = useState(false)
	const [colmun, setColumn] = useState(2);
	const [projectDisplay, setProjectDisplay] = useState('')

	const authInfo = {
		isOpen,
		setIsOpen,
		routeName,
		setRouteName,
		isOpenModal,
		setIsOpenModal,
		colmun,
		setColumn,
		showNavItem,
		setShowNavItem,
		isSideBarShow,
		setIsSideBarShow,
		projectDisplay,
		setProjectDisplay,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthPorvider;
