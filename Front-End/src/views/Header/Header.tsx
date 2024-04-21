import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "src/utils/routes/routes";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="flex justify-center items-center h-12 shadow-sm fixed top-0 left-0 right-0  z-10 bg-white">
      <div className="cursor-pointer font-semibold text-sm flex text-black ">
        {Routes.map((page: any) => (
          <div
            key={page.title}
            onClick={() => navigate(page.route)}
            className={`cursor-pointer ${
              location.pathname === page.route ? "font-bold" : "font-normal"
            } ${location.pathname === page.route ? "active-link" : ""}`}
          >
            <p>{page.title}</p>
            {location.pathname === page.route && (
              <div
                style={{
                  height: "2px",
                  background: "#18484F",
                  color: "#18484F",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>{" "}
    </header>
  );
};

export default Header;
