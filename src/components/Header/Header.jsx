import { MenuItem } from "../index";
import Profile from "../../../public/profile.jpg";
import { useSidebar } from "../../context/SidebarContext";

export default function Navbar() {
  const { showSidebar } = useSidebar();
  const icons = [
    {
      name: "envelope",
      class: "bi-envelope",
    },
    {
      name: "gear",
      class: "bi-gear",
    },
    {
      name: "bell",
      class: "bi-bell",
    },
  ];

  return (
    <header>
      <nav
        aria-label="Main Navigation"
        className="navbar navbar-expand-lg py-3 bg-primary"
      >
        <div className="container-fluid">
          <button
            type="button"
            aria-label="Toggle sidebar"
            aria-controls="sidebar"
            onClick={showSidebar}
            className="btn d-md-none"
          >
            <i className="bi-text-left fs-3 text-neutralLight"></i>
          </button>

          <form role="search" className="d-none d-md-block">
            <div className="input-group text-neutralLight bg-secondary border-1 border-black rounded-1">
              <i className="bi bi-search py-2 ps-2 border-0"></i>
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="form-control border-0 text-neutralLight bg-secondary"
              />
            </div>
          </form>

          <div className="d-flex align-items-center justify-content-end gap-3">
            <ul
              role="menuitemlist"
              className="nav d-flex align-items-center gap-2"
            >
              <MenuItem role="menulistitem" className="d-block d-md-none">
                <i className="bi-search"></i>
              </MenuItem>

              {icons.map((icon) => (
                <MenuItem role="menulistitem" key={icon.name}>
                  <i className={`${icon.class}`}></i>
                </MenuItem>
              ))}
            </ul>

            <img
              src={Profile}
              alt="Account's profile image"
              width={30}
              height={30}
              aria-label="Profile"
              className="d-block rounded-circle object-fit-fill"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
