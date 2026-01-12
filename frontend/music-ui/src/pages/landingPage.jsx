import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Landing = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="landing-app">
      {/* Header */}
      <header className="landing-header">
        <h2 className="brand">🎵 NammaHaadu</h2>
        <div className="header-actions">
          <Link to="/login" className="primary-btn">Login</Link>
          <Link to="/register" className="primary-btn">Sign Up</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>Your music.  
          <span> Anywhere.</span>
        </h1>
        <p>
          Stream songs, discover artists, and enjoy your personal
          music space — all in one app.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="primary-btn large">
            Start Listening
          </Link>
          <Link to="/login" className="primary-btn large">
            I already have an account
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <span>🎧</span>
          <h3>Stream Music</h3>
          <p>Play songs instantly with a smooth global player.</p>
        </div>

        <div className="feature-card">
          <span>❤️</span>
          <h3>Your Library</h3>
          <p>Create playlists and keep your favorites close.</p>
        </div>

        <div className="feature-card">
          <span>🚀</span>
          <h3>Fast & Clean</h3>
          <p>Minimal design, fast loading, zero distractions.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} MusicApp • Built with MERN</p>
      </footer>
    </div>
  );
};

export default Landing;
