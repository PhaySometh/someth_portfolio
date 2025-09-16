import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 navbar bg-base-100 shadow-sm">
      <div className="navbar-start gap-3">
        <img src="/somethphay_logo.png" alt="Logo" className="h-10 w-10" />
        <a className="btn btn-ghost px-0 text-xl">Someth Phay</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Portfolio</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn rounded-2xl">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
