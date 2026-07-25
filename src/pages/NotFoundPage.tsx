import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <Link className="button button-primary" to="/">
        홈으로 이동
      </Link>
    </main>
  );
}
