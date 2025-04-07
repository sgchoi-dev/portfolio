import Image from "next/image";
import styles from "./page.module.css";
// import "../css/index.css";

export default function Home() {
  return (
    <main>
      <div className="main-my-info">
        <div className="name-area">
          <p className="name">
            TEST
            <br />
            TEST
            <br />
            TEST
          </p>
          {/* <p className="name">
            CHOI
            <br />
            SEUL
            <br />
            GI
          </p> */}
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
    </main>
  );
}
