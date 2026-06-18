import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>AttendancePro</h2>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Employee Attendance System</h1>
        <p>
          Smart attendance management solution for modern workplaces.
        </p>
        <button>Get Started</button>
      </section>
<section className="stats">
  <div className="stat-card">
    <h2>500+</h2>
    <p>Employees Managed</p>
  </div>

  <div className="stat-card">
    <h2>99%</h2>
    <p>Attendance Accuracy</p>
  </div>

  <div className="stat-card">
    <h2>24/7</h2>
    <p>System Availability</p>
  </div>
</section>

      <footer>
        <p>© 2026 Employee Attendance System</p>
      </footer>
    </div>
  );
}

export default App;