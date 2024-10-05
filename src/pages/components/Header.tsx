import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import style from "@/styles/Header.module.css";
import Cookies from "js-cookie"; // Tambahkan ini untuk menangani cookie

const Header: React.FC = () => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [loggedIn, setLoggedIn] = useState(false); // Defaultnya false

  // Cek status login dari cookie di browser
  useEffect(() => {
    const isUserLoggedIn = Cookies.get("isLoggedIn") === "true";
    setLoggedIn(isUserLoggedIn);
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleClose = () => {
    setShowLoginModal(false);
    setErrorMessage(""); 
  };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      // Set cookie saat login berhasil
      Cookies.set("isLoggedIn", "true", { path: "/" }); 

      setShowLoginModal(false); 
      setLoggedIn(true); 
      router.push("/homepage"); 
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleHomeClick = () => {
    if (loggedIn) {
      router.push("/homepage");
    } else {
      router.push("/landingpage"); 
    }
  };

  const handleChatbotClick = () => {
    router.push("/chatbot");
  };

  return (
    <div className={style.headerComponent}>
      <button className={style.headerButton} onClick={handleHomeClick}>
        Home
      </button>

      {loggedIn ? (
        <>
          <button className={style.headerButton}>Nilai</button>
          <button className={style.headerButton}>Profil</button>
          <button className={style.headerButton} onClick={handleChatbotClick}>
            Chatbot
          </button>
        </>
      ) : (
        <button className={style.headerButton} onClick={handleLoginClick}>
          Login
        </button>
      )}

      {/* Modal untuk Login */}
      <Modal
        isOpen={showLoginModal}
        onRequestClose={handleClose}
        contentLabel="Login Modal"
        className={style.modalContainer}
        overlayClassName={style.modalOverlay}
      >
        <div className={style.modalHeader}>
          <h2 className={style.modalTitle}>Login</h2>
          <button onClick={handleClose} className={style.closeButton}>✕</button>
        </div>
        <div className={style.modalBody}>
          <label className={style.modalLabel}>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={style.modalInput}
          />
          <label className={style.modalLabel}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.modalInput}
          />
          {errorMessage && (
            <p className={style.errorMessage}>
              <span className={style.errorIcon}>⚠️</span>
              {errorMessage}
            </p>
          )}
        </div>
        <div className={style.modalFooter}>
          <button onClick={handleClose} className={style.modalButton}>
            Cancel
          </button>
          <button onClick={handleLogin} className={style.modalButton}>
            Login
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Atur elemen root untuk react-modal
Modal.setAppElement("#__next");

export default Header;
