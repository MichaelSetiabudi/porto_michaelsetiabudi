import styles from '@/styles/404.module.css';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/landingpage" className={styles.homeLink}>
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}
