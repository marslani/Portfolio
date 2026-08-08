import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import AnimatedCursor from '../common/AnimatedCursor';
import './Layout.css';

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content" className="app-shell__main">
        <Outlet />
      </main>
      <Footer />
      <AnimatedCursor />
    </div>
  );
}
