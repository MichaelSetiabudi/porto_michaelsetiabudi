// components/Header.tsx
import React from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router"; // Untuk navigasi
import style from "@/styles/Header.module.css";


interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); // Simpan status di localStorage
    router.push('/homepage'); // Pindah ke halaman homepage
  };

  return (
    <Container className={style.headerComponent}>
      <button className={style.headerButton}>Home</button>
      {isLoggedIn ? (
        <>
          <button className={style.headerButton}>Nilai</button>
          <button className={style.headerButton}>Profil</button>
          {/* Tambahkan tombol atau menu lain yang diperlukan */}
        </>
      ) : (
        <button className={style.headerButton} onClick={handleLogin}>Login</button> // Panggil fungsi login
      )}
    </Container>
  );
};

export default Header;
