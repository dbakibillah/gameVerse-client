import { createContext, useContext, useEffect, useState } from "react";

// Create a ThemeContext
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    // Apply the dark mode class to the root element
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// export const useTheme = () => {
//     return useContext(ThemeContext);
// };

export default ThemeProvider;
