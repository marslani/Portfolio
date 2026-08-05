import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <main className="not-found-page container-shell">
      <div className="not-found-page__card">
        <span className="section-eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="button button--primary">Back to Home</Link>
      </div>
    </main>
  );
}
