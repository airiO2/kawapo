import Image from "next/image";
import styles from "./page.module.css";
import type User from "@/types/user";
export default function Home() {
  const dummyUser: User = {
    id: 1,
    name: "Airi Otsu",
    email: "test@email.com",
    isActive: true,
  };

  const dummyUsers: User[] = [
    { id: 1, name: "AiriOtsu", email: "test@email.com", isActive: true },
    { id: 2, name: "JaneSmith", email: "test@email.com", isActive: false },
    { id: 3, name: "AliceJohn", email: "test@email.com", isActive: true },
  ];

  console.log("dummyUser:", dummyUser);
  console.log("dummyUsername:", dummyUser.name);

  console.log("dummyUsers:", dummyUsers);
  console.log("FirstUser:", dummyUsers[0].name);

  return (
    <div className={styles.page}>
      <div>{dummyUser.name}</div>

      {dummyUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <main className={styles.main}>
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
