// Heaimport React from "react";
import {
  Container,
} from "react-bootstrap";
import style from "@/styles/Footer.module.css"

const Footer: React.FC = () => {

  return (
    <>
    <Container className={style.footerComponent}>
        <p>Copyright &copy; 2024</p>
    </Container>
    </>
  );
};

export default Footer;
