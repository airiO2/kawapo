import styles from "./index.module.css"
import Image from "next/image"

interface PostimageProps{
link: string;
};

const Postimage=({link}:PostimageProps)=>{
    return(
        <>
        <Image 
        className={styles.Image}
        width={300}
        height={300}
        alt="PostImage"
        src={link}
        ></Image>
        </>
    );
}

export default Postimage;