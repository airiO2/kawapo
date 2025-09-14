import React from "react"
import styles from "./index.module.css"

interface AppFrameProps{
    children: React.ReactNode;
};

const AppFrame = ({children}:AppFrameProps) =>{

return(
<main className={styles.main}>{children}</main>
);
}

export default AppFrame;