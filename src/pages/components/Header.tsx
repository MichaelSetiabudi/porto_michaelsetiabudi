// Header.tsx

import React from "react";
import {
  Container,
} from "react-bootstrap";
import style from "@/styles/Header.module.css"

const Header: React.FC = () => {

  return (
    <>
    <Container className={style.headerComponent}>
        <button className={style.headerButton}>Home</button>
        <button className={style.headerButton}>Nilai</button>
        <button className={style.headerButton}>Profil</button>
    </Container>
    </>
  );
};

export default Header;
