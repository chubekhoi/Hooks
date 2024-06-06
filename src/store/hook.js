import Context from "./context";
import { useContext } from "react";

export const useStore = function () {
    const [state,dispath]=useContext(Context)
    return [state,dispath]
}