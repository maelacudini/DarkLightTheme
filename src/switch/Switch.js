import { useTheme } from "../ThemeContext";

const Switch = () => {
 const { theme, toggleTheme } = useTheme();
 return (
    <>
        <div class="form-check form-switch">
            <input 
                className="form-check-input" 
                type="checkbox" 
                role="switch" 
                id="flexSwitchCheckDefault"
                checked={theme === "light"}
                onChange={toggleTheme}
            />
        </div>
    </>

 );
};

export default Switch;