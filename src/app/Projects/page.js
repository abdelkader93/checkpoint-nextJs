import styles from "../page.module.css";

export default function Projects() {
    const projects = [
        { title: "Project One", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfU9KzpxhLSxhftiS_4RikknwZb_XSsGPMno_ok9toIISnIZ6aNgMw-CYe_mkRLAu4r_8&usqp=CAU" },
        { title: "Project Two", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" },
    ];
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.container}>


                <div style={{ display: "flex", gap: "20px", marginTop: "100px" }}>
                    {projects.map((project, index) => (
                        <div key={index}>
                            <img src={project.img} alt={project.title} width={300} height={200} />
                            <h2>{project.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
