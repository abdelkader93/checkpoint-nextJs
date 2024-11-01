import styles from "../page.module.css";
export default function About() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>About Me</h1>
                <p>I’m a passionate developer with expertise in web technologies.</p>
            </div>
        </div>
    );
}