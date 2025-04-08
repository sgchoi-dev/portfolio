import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="main-my-info">
        <div className="name-area">
          <p className="name">
            <span className="row">TEST1</span>
            <span className="row">TEST2</span>
            <span className="row">TEST3</span>
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

      <div className="main-menu-area">
        <div className="menu-perspective">
          <div className="container">
            <div className="menus">
              <ul className="menus-wrap">
                <li className="menusLi">
                  <div className="menu-container">
                    <Link href="/aboutme" className="">
                      ABOUT
                      <br />
                      ME
                    </Link>
                  </div>
                </li>
                <li className="menusLi">
                  <div className="menu-container">
                    <Link href="/work/thebrigade/" className="">
                      PROJECT
                    </Link>
                  </div>
                </li>
                <li className="menusLi">
                  <div className="menu-container">
                    <Link href="/work/thebrigade/" className="">
                      CONTACT
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
