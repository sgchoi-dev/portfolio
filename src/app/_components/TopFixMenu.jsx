import Link from "next/link";

export default function TopFixMenu() {
  return (
    <div className="page-top-fix-area">
      <header>
        <Link className="name" href="/">
          <span className="row">TEST1</span>
          <span className="row">TEST2</span>
          <span className="row">TEST3</span>
        </Link>
        <div></div>
      </header>

      <footer>
        <div className="my-detail-info">
          <a className="list tel" href="tel:01046926404">
            010-4692-6404
          </a>
          <a className="list eamil" href="mailto:choi.sg.dev@gmail.com">
            choi.sg.dev@gmail.com
          </a>
        </div>
        <p className="copyright">©2025 sgChoi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
