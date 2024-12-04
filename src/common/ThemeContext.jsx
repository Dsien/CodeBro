import React, { createContext, useContext, useEffect, useState } from 'react'; // Import React and necessary hooks

const ThemeContext = createContext(); // Create a context for theme

export const useTheme = () => useContext(ThemeContext); // Custom hook to use the ThemeContext

export const ThemeProvider = ({ children }) => { // ThemeProvider component to provide theme context to its children
   const [theme, setTheme] = useState(
   () => localStorage.getItem('theme') || 'light' // Initialize theme state from localStorage or default to 'light'
   );

    useEffect(() => {
        document.body.setAttribute('data-theme-', theme); // Set data-theme attribute on body element
        localStorage.setItem('theme', theme); // Save theme to localStorage
    }, [theme]); // Run effect when theme changes

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Toggle theme between 'light' and 'dark'
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Provide theme and toggleTheme to context */}
            {children} {/* Render children components */}
        </ThemeContext.Provider>
    );
};