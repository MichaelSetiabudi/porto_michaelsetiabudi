// Header.tsx

import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
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
