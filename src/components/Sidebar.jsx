import { useState } from "react";
import Logo from "../assets/logo.svg";
import { useSidebar } from "../context/SidebarContext";

export default function Sidebar() {
  const [active, setActive] = useState("Home");
  const { isSidebarVisible, hideSidebar } = useSidebar();

  const navItems = [
    {
      name: "Home",
      iconClass: "bi-house-fill",
    },
    {
      name: "Charts",
      iconClass: "bi-file-bar-graph",
    },
    {
      name: "Tasks",
      iconClass: "bi-clipboard-check",
    },
    {
      name: "Payments",
      iconClass: "bi-wallet2",
    },
    {
      name: "Groceries",
      iconClass: "bi-bag-check",
    },
  ];

  const handleSetActiveLink = (linkName) => {
    setActive(linkName);
  };

  return (
    <aside
      id="sidebar"
      className={`sidebar h-auto d-flex flex-column bg-primary ${
        isSidebarVisible ? "show" : ""
      }`}
    >
      <nav className="navbar d-flex flex-column flex-grow-1 gap-4">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="navbar-brand ms-3">
            <img src={Logo} alt="Logo of Dashboard" width={50} />
          </a>
          <button onClick={hideSidebar} className="btn d-md-none">
            <i className="bi-x-circle fs-5 text-neutralLight"></i>
          </button>
        </div>

        <ul className="nav flex-column gap-2 w-100 flex-grow-1">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleSetActiveLink(item.name)}
              className="nav-item"
            >
              <a
                href="#"
                className={`nav-link text-center ${
                  active === item.name
                    ? "active underline text-tertiary"
                    : "text-neutralLight"
                }`}
              >
                <i className={`bi ${item.iconClass} fs-3`}></i>
              </a>
            </li>
          ))}

          <li className="nav-item mt-auto">
            <a href="#" className="nav-link text-center text-neutralLight">
              <i className="bi bi-box-arrow-right fs-3"></i>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
