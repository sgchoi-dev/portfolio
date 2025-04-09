"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="nav-menu-area">
      <div className="menu-perspective">
        <div className="container">
          <div className="menus">
            <ul className="menus-wrap">
              <li className="menusLi">
                <div className="menu-container">
                  <Link
                    href="/aboutme"
                    className={classNames("click-area", {
                      on: pathname === "/aboutme",
                    })}
                  >
                    ABOUT
                    <br />
                    ME
                  </Link>
                </div>
              </li>
              <li className="menusLi">
                <div className="menu-container">
                  <Link
                    href="/project/"
                    className={classNames("click-area", {
                      on: pathname === "/project",
                    })}
                  >
                    PROJECT
                  </Link>
                </div>
              </li>
              <li className="menusLi">
                <div className="menu-container">
                  <Link
                    href="/contact/"
                    className={classNames("click-area", {
                      on: pathname === "/contact",
                    })}
                  >
                    CONTACT
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
