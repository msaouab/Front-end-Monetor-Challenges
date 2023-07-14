import React, { createContext, useState } from "react";

export type AppContextType = {
	position: [number, number];
	setPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
};

export const AppContext = createContext<AppContextType>({
	position: [0, 0],
	setPosition: () => {
		// do nothing
	},
} as AppContextType);

export const AppProvider = ({ children }: {children: React.ReactNode}) => {
	const [position, setPosition] = useState<[number, number]>([0, 0]);

	const value = {
		position,
		setPosition,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};