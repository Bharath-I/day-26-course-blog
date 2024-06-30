import { Link } from "react-router-dom"
export function Career() {
    return (
        <>
        <div className="course"><b>Course Provided</b></div>
        <nav className="nav-bar">
        <ul>
          <li><Link to="/all">All</Link></li>
          <li><Link to="/fullstack">Fullstack Development</Link></li>
          <li><Link to="/datascience">DataScience</Link></li>
          <li><Link to="/cyberSecurity">CyberSecurity</Link></li>
        </ul>
      </nav>
        </>
    )
}