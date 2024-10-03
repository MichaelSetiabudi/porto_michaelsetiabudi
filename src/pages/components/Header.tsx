// components/Header.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal"; // Gunakan react-modal
import style from "@/styles/Header.module.css";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false); // State untuk menampilkan modal
  const [username, setUsername] = useState(""); // State untuk username
  const [password, setPassword] = useState(""); // State untuk password
  const [errorMessage, setErrorMessage] = useState(""); // State untuk pesan error

  // Fungsi untuk menampilkan modal login
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  // Fungsi untuk menyembunyikan modal login
  const handleClose = () => {
    setShowLoginModal(false);
    setErrorMessage(""); // Reset pesan error jika ditutup
  };

  // Fungsi untuk menangani proses login
  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true"); 
      setShowLoginModal(false); 
      router.push("/homepage"); 
    } else {
      setErrorMessage("Invalid username or password"); // Tampilkan pesan error
    }
  };
  const handleChabotClick=()=>{
    router.push("chatbot");
  }

  return (
    <div className={style.headerComponent}>
      <button className={style.headerButton}>Home</button>
      {isLoggedIn ? (
        <>
          <button className={style.headerButton}>Nilai</button>
          <button className={style.headerButton}>Profil</button>
          <button className={style.headerButton} onClick={handleChabotClick}>Chatbot</button>
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
