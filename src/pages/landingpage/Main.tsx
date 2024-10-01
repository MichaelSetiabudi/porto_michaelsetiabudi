import { Container } from "react-bootstrap";
import style from "@/styles/landingpage/Main.module.css";
const Main: React.FC = () => {
  return (
    <>
      <Container className={style.mainComponent}>
        <Container style={{padding:"3vh"}}>
            <p>Selamat Datang</p>
        </Container>
      </Container>
    </>
  );
};

export default Main;
