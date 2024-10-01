// Heaimport React from "react";
import {
  Container,
} from "react-bootstrap";
import style from "@/styles/Footer.module.css"

const Footer: React.FC = () => {

  return (
    <>
    <Container className={style.footerComponent}>
        <h1>Ini Footer</h1>
    </Container>
    </>
  );
};

export default Footer;
