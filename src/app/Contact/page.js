import styles from "../page.module.css";
export default function Contact() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Contact Me</h1>

                <form>
                    <label>Name:</label>
                    <input type="text" name="name" required />
                    <label>Email:</label>
                    <input type="email" name="email" required />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
