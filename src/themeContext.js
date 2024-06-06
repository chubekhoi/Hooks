import { useState , createContext} from "react";

export const ThemeToggelContext =createContext()

function ThemeContext({children}) {
    console.log(children);
    const [theme,setTheme]= useState('black')


    const handelToggelTheme = function () {
        setTheme(theme === 'black'?'light':'black')
    }
    const value = {
        theme:theme,
        handelToggelTheme
    }
    return(

        <ThemeToggelContext.Provider value={value}>
            <div>
                {children}
      
            </div>
        </ThemeToggelContext.Provider>
    )

}

export default ThemeContext;