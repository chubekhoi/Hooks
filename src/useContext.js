
import { useContext } from "react";
import Context from "./context";

import {ThemeToggelContext} from "./themeContext";
function HookUseContext({children}) {
    const context = useContext(ThemeToggelContext)
    return(
        <div>

                <button onClick={context.handelToggelTheme}>toggel theme</button>
                <Context></Context>

        </div>
    )
}
export default HookUseContext;