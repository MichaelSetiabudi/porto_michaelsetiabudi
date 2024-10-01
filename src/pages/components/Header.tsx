// components/Header.tsx
import React from "react";
import { Container } from "react-bootstrap";
import style from "@/styles/Header.module.css";

interface HeaderProps {
  isLoggedIn: boolean; // Tambahkan props untuk status login
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
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
        <button className={style.headerButton}>Login</button>
      )}
    </Container>
  );
};

export default Header;
