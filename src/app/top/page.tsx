import { fileURLToPath } from "url";
import styles from "./page.module.css"
import Image from "next/image";
import next from "next";
interface HOMEProps{};
import Link from "next/link";
import Button from "@/component/button";

const HOME=()=>{
    return(
 <>
 <Image 
         className={styles.Image}
         width={300}
         height={300}
         alt="PostImage"
         src={"window.svg"}
         ></Image>
<Button children="TAP" color="pink" link="/login"></Button>
 </>       
    );
}

export default HOME;