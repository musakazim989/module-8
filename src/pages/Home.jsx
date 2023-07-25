
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>

      <h1>Home</h1>
    </div>
  )
}
