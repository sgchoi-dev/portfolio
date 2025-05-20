import Link from "next/link";

export default function TopFixMenu() {
  return (
    <div className="page-top-fix-area">
      <header>
        <Link className="name" href="/">
          <span className="row">CHOI</span>
          <span className="row">SEUL</span>
          <span className="row">GI</span>
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
