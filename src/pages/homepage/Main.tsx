import { Container } from "react-bootstrap";
import style from "@/styles/landingpage/Main.module.css"

const Main: React.FC = () => {
  return (
    <>
      <Container className={style.mainComponent}>
        <Container style={{padding:"3vh",justifyContent:"flex-end",display:"flex"}}>
            <button className="btn btn-danger">Logout</button>
        </Container>
      </Container>
    </>
  );
};

export default Main;
