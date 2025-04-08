import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import "../css/index.css";

export default function Home() {
  return (
    <main>
      <div className="main-my-info">
        <div className="name-area">
          <p className="name">
            <span className="row">TEST</span>
            <span className="row">TEST</span>
            <span className="row">TEST</span>
          </p>
        </div>

        <div className="bot-area">
          <div className="my-detail-info">
            <a className="list tel" href="tel:01046926404">
              010-4692-6404
            </a>
            <a className="list eamil" href="mailto:choi.sg.dev@gmail.com">
              choi.sg.dev@gmail.com
            </a>
          </div>
          <p className="copyright">©2025 sgChoi. All Rights Reserved.</p>
        </div>
      </div>

      {/* <div className="menu-wrap">
        <div className="mnue-list">
          <Link className="menu" href={"/project"}>
            <span className="txt">PROJECT</span>
          </Link>
        </div>
      </div> */}

      <div className="main-menu-area">
        <div className="menu-perspective">
          <div className="container">
            <div className="menus">
              <ul className="menus-wrap">
                <li className="menusLi">
                  <div className="menu-container">
                    <a href="/work/studiomega/" className="">
                      ABOUT
                      <br />
                      ME
                    </a>
                  </div>
                </li>
                <li className="menusLi">
                  <div className="menu-container">
                    <a href="/work/thebrigade/" className="">
                      PROJECT
                    </a>
                  </div>
                </li>
                <li className="menusLi">
                  <div className="menu-container">
                    <a href="/work/thebrigade/" className="">
                      CONTACT
                    </a>
                  </div>
                </li>
                {/* <li className="menusLi">
                  <div className="menu-container">
                    <a href="/work/push/" className="">
                      Push
                    </a>
                  </div>
                </li>
                <li className="menusLi">
                  <div className="menu-container">
                    <a href="/work/onxmaps/" data-info="2017">
                      onX Maps
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
