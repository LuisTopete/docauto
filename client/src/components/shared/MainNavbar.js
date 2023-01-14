import { Link } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";

const MainNavbar = ({ user, handleLogout}) => {
  const rightNavItems = () => {

  if (user) {
    return (
      <>
        <Link to='/dash'>
          <li>Dashboard</li>
        </Link>
        <Link to='/profile'>
          <li>Profile</li>
        </Link>
        <Link to='/problem'>
          <li>Problems</li>
        </Link>
        <button onClick={() => handleLogout()}>
          Logout
        </button>
      </>
    )
  } else {
    return(
      <>
        <Link to='/login'>
          <li>Login</li>
        </Link>
        <Link to='/register'>
          <li>Register</li>
        </Link>
      </>
    )
  }
}
return (
<>
<nav>
  <ul>
    <Link to='/'>
      <li>
        Home
      </li>
    </Link>
  </ul>
</nav>
</>
  )
}

const ConnectedNabar = (props) => (
  <AuthConsumer>
    {Value => <NavBar {...props} {...value} />}
  </AuthConsumer>
)
export default ConnectedNabar;