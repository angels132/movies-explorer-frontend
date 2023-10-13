import React from "react"; // Импорт React для разработки на JSX
import "./NavigationProfile.css"; // Импорт стилей для данного компонента
import { NavLink } from "react-router-dom"; // Импорт NavLink из react-router-dom для маршрутизации путей

// Определение функционального компонента NavigationProfile
const NavigationProfile = () => {
  return (
    <div className="profile__link-item">
      <NavLink
        className={({ isActive }) =>
          `profile__link profile__link_type_profile ${
            isActive && "profile__link_type_active"
          }`
        }
        to="/profile"
      >
        Аккаунт
      </NavLink>
    </div>
  );
};

export default NavigationProfile;
