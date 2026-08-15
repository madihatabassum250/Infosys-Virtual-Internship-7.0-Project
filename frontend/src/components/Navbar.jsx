import React, { useState } from "react";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import UserMenu from "./UserMenu";

import { getCurrentUser } from "../services/authService";

import {
  Search,
  Sun,
  Bell,
  ChevronDown
} from "lucide-react";


export default function Navbar() {

  // ==============================
  // USER STATE
  // ==============================

  const [user, setUser] = useState(getCurrentUser());

  const [showLogin, setShowLogin] = useState(false);

  const [showRegister, setShowRegister] = useState(false);


  // ==============================
  // LOGIN
  // ==============================

  const handleLogin = (loggedInUser) => {

    setUser(loggedInUser);

    setShowLogin(false);

  };


  // ==============================
  // REGISTER
  // ==============================

  const handleRegistered = (newUser) => {

    setUser(newUser);

    setShowRegister(false);

  };


  // ==============================
  // LOGOUT
  // ==============================

  const handleLogout = () => {

    setUser(null);

  };


  return (
    <>

      {/* ==============================
          NAVBAR
      ============================== */}

      <header className="navbar">


        {/* ==============================
            RIGHT SIDE
        ============================== */}

        <div className="navbar-right">
            {/* SEARCH */}

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search locations, projects, datasets..."
          />

          <span>
            Ctrl + K
          </span>

        </div>
            
          {/* SUN / THEME ICON */}

          <button className="navbar-icon">
            <Sun size={18} />
          </button>


          {/* NOTIFICATION */}

          <button className="navbar-icon">
            <Bell size={18} />

            <span className="notification-dot"></span>

          </button>


          {/* ==============================
              LOGIN / USER
          ============================== */}

          {user ? (

            <UserMenu
              user={user}
              onLogout={handleLogout}
            />

          ) : (

            <button
              className="login-button"
              onClick={() => setShowLogin(true)}
            >

              👤 Login

            </button>

          )}

        </div>
        

      </header>


      {/* ==============================
          LOGIN MODAL
      ============================== */}

      {showLogin && (

        <LoginModal

          onClose={() => setShowLogin(false)}

          onLogin={handleLogin}

          onCreateAccount={() => {

            setShowLogin(false);

            setShowRegister(true);

          }}

        />

      )}


      {/* ==============================
          REGISTER MODAL
      ============================== */}

      {showRegister && (

        <RegisterModal

          onClose={() => setShowRegister(false)}

          onRegistered={handleRegistered}

          onLogin={() => {

            setShowRegister(false);

            setShowLogin(true);

          }}

        />

      )}

    </>
  );
}