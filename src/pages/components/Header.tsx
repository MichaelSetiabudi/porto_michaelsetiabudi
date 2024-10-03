import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal"; // Gunakan react-modal
import style from "@/styles/Header.module.css";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [loggedIn, setLoggedIn] = useState(isLoggedIn); // Simpan status login di state

  // Periksa status login dari localStorage ketika komponen dimount
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setLoggedIn(isUserLoggedIn);
  }, []);

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
      setLoggedIn(true); // Update state setelah login berhasil
      router.push("/homepage"); 
    } else {
      setErrorMessage("Invalid username or password"); // Tampilkan pesan error
    }
  };

  // Fungsi untuk menghandle tombol Home
  const handleHomeClick = () => {
    if (loggedIn) {
      router.push("/homepage"); // Jika sudah login, arahkan ke homepage
    } else {
      router.push("/landingpage"); // Jika belum login, arahkan ke landingpage
    }
  };

  // Fungsi untuk menghandle tombol Chatbot
  const handleChabotClick = () => {
    router.push("/chatbot");
  };

  return (
    <div className={style.headerComponent}>
      {/* Tombol Home akan mengecek login status dan mengarahkan sesuai */}
      <button className={style.headerButton} onClick={handleHomeClick}>
        Home
      </button>

      {loggedIn ? (
        <>
          <button className={style.headerButton}>Nilai</button>
          <button className={style.headerButton}>Profil</button>
          <button className={style.headerButton} onClick={handleChabotClick}>
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
