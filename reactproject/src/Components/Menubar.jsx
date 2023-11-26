import { useEffect } from "react";

const Menubar = () => {
  useEffect(() => {
    const mainNav = document.getElementById("mainNav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        mainNav.classList.remove("py-5");
        mainNav.style.backgroundColor = "rgba(0,0,0,0.7)";
      } else {
        mainNav.classList.add("py-5");
        mainNav.style.backgroundColor = "transparent";
      }
    });
  }, []);
  return (
    <div
      className="bg-transparent fixed top-0 left-0 right-0 z-10 py-5 transition-all duration-300"
      id="mainNav"
    >
      <div className="container mx-auto">
        <div className="navbar text-neutral-content">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-screen"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Logis</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <div className="">
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
