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
import style from "@/styles/Footer.module.css"

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <>
    <Container className={style.footerComponent}>
        <h1>Ini Footer</h1>
    </Container>
    </>
  );
};

export default Footer;
