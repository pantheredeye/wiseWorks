import { Link, routes } from '@redwoodjs/router';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={routes.landing()}>Home</Link>
          </li>
          <li>
            <Link to={routes.userDashboard()}>User Dashboard</Link>
          </li>
          <li>
            <Link to={routes.projectCreation()}>Create Project</Link>
          </li>
          <li>
            <Link to={routes.support()}>Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
