import { NavLink, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MarkdownPreviewPage } from "./pages/MarkdownPreviewPage";
import { HtmlCssPreviewPage } from "./pages/HtmlCssPreviewPage";
import { LearnPage } from "./pages/LearnPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          <span className="brand-mark">D</span>
          <span>
            <strong>The Dig Lab</strong>
            <small>Learn · Build · Preview</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="주요 메뉴">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/learn">Learn</NavLink>
          <NavLink to="/tools/markdown-preview">Markdown</NavLink>
          <NavLink to="/tools/html-css-preview">HTML/CSS</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/tools/markdown-preview" element={<MarkdownPreviewPage />} />
        <Route path="/tools/html-css-preview" element={<HtmlCssPreviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <footer className="site-footer">
        <span>© The Dig Lab</span>
        <span>Static SPA on GitHub Pages</span>
      </footer>
    </div>
  );
}
