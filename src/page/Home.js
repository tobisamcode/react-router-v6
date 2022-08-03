import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="section">
      <h2>Home page</h2>
      <Link to="/about" className="btn">
        About
      </Link>
    </section>
  );
}

export default Home;
