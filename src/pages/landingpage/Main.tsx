import { Container } from "react-bootstrap";
import styles from "@/styles/landingpage/Main.module.css";
import Image from 'next/image'; // Import Image dari next/image

const Main: React.FC = () => {
  return (
    <>
      <Container className={styles.mainComponent}>
        <Container style={{padding:"3vh"}}>
            {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Hi, I&apos;m Michael Setiabudi</h1> {/* Escape karakter ' */}
          <p>Web Developer | UI/UX Designer</p>
          <a href="#projects" className={styles.ctaButton}>Lihat Proyek Saya</a>
        </div>
      </section>

      {/* Tentang Saya */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2>Tentang Saya</h2>
          <p>Saya seorang developer web dengan pengalaman dalam membangun aplikasi web modern dan berfokus pada desain UI/UX yang elegan dan fungsional.</p>
        </div>
      </section>

      {/* Highlight Proyek */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2>Proyek Saya</h2>
          <div className={styles.projectList}>
            <div className={styles.projectItem}>
              {/* Ganti <img> dengan <Image> */}
              <Image 
                src="/path-to-project-image1.jpg" 
                alt="Proyek 1" 
                width={500} 
                height={300} 
              />
              <h3>Proyek 1</h3>
              <p>Deskripsi singkat tentang proyek.</p>
            </div>
            <div className={styles.projectItem}>
              {/* Ganti <img> dengan <Image> */}
              <Image 
                src="/path-to-project-image2.jpg" 
                alt="Proyek 2" 
                width={500} 
                height={300} 
              />
              <h3>Proyek 2</h3>
              <p>Deskripsi singkat tentang proyek.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keterampilan */}
      <section id="skills" className={styles.skills}>
        <div className={styles.container}>
          <h2 style={{ textAlign: "center",padding:"2vh"}}>Keterampilan</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>
      </section>
        </Container>
      </Container>
    </>
  );
};

export default Main;
