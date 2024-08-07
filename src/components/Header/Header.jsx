import { MenuItem } from "../index";
import Profile from "../../assets/profile.jpg";
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
      <nav className="navbar navbar-expand-lg py-3 bg-primary">
        <div className="container-fluid">
          <button
            type="button"
            aria-expanded="false"
            aria-controls="sidebar"
            onClick={showSidebar}
            className="btn d-md-none"
          >
            <i className="bi-text-left fs-3 text-neutralLight"></i>
          </button>

          <form role="search">
            <div className="input-group custom-width text-neutralLight bg-secondary border-1 border-black rounded-1">
              <i className="bi bi-search py-2 ps-2 border-0"></i>
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="form-control border-0 text-neutralLight bg-secondary"
              />
            </div>
          </form>

          <div className="d-flex justify-content-end gap-3">
            <ul className="nav align-content-center justify-content-center gap-2">
              {icons.map((icon) => (
                <MenuItem key={icon.name}>
                  <i className={`bi ${icon.class}`}></i>
                </MenuItem>
              ))}
            </ul>

            <img
              src={Profile}
              alt="Account's profile image"
              width={30}
              height={30}
              className="d-block m-auto rounded-circle object-fit-fill"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
