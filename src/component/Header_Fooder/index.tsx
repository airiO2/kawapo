import React from "react"
import styles from "./index.module.css"
import Header from "../Header";
import Fooder from "../Fooder";

interface AppFrameProps{
    children: React.ReactNode;
};

const AppFrame = ({children}:AppFrameProps) =>{

return(
    <>
    <Header></Header>
   
<main className={styles.main}>{children}</main>
 <Fooder link1="/airi" link2="/airi"></Fooder>
</>
);
}

export default AppFrame;