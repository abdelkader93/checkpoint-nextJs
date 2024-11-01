
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <img src="https://i.pinimg.com/564x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg" alt="Profile Picture" width={150} height={150} />
        <p className={styles.description}>
          I’m a developer with skills in React, Next.js, and more!
        </p>
      </div>
    </div>
  );
}
