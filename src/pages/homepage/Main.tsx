import { Container } from "react-bootstrap";
import style from "@/styles/homepage/Main.module.css";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; 

const Main: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("isLoggedIn"); 
    router.push('/'); 
  };

  return (
    <Container className={style.mainComponent}>
      <Container style={{ padding: "3vh", justifyContent: "flex-end", display: "flex" }}>
        <button onClick={handleLogout} className={style.logoutButton}>Logout</button>
      </Container>
    </Container>
  );
};

export default Main;
