// テストページ

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/component/button";
import { Swords } from "lucide-react";
import { Dog } from "lucide-react";
import Kawaiiicon from "@/component/Kawaiiicon";
import IDform from "@/component/IDform";
import Nomalform from "@/component/Nomalform";
import PostHeader from "@/component/Postheader";
import Postimage from "@/component/PostImage";
import PostText from "@/component/Posttext";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button color="#d399abff" link="/">
          登録
        </Button>
        <Kawaiiicon color="#d399abff" icon={<Dog size={30}></Dog>}></Kawaiiicon>
        <IDform
          text1="IDを入力"
          text2="パスワードを入力"
          text3="LOGIN"
          link="/"
        ></IDform>
        <IDform text1="IDを設定" text2="パスワードを設定" text3="ログイン" link="/"></IDform>
        <Nomalform text="本文入力"></Nomalform>

        <PostHeader icon="globe.svg" name="あいり"></PostHeader>
        <Postimage link="window.svg" ></Postimage>
        <PostText text="これはいぬです。"></PostText>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
