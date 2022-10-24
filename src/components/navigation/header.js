import { Link } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import "./header.css"
function Header() {
    return ( <>
  <nav className="navbar navbar-expand-lg navbar-light headerColor py-2 px-4">
  <div className="container-fluid">
  <Link to="/">
    <a className="navbar-brand" href="#"><img src="/assets/images/download.webp" alt=""/></a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >
            <Link to="/products">Products</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="/login">Login</Link></a>
        </li>

      </ul>
      <form className="d-flex me-3 position-relative">
        <input className="form-control  bg-transparent  border-0 border-bottom border-dark rounded-0 w-100" type="search" placeholder="Search Products" aria-label="Search"/>
        <button className="btn position-absolute top-0 end-0" type="submit"><SearchIcon/></button>
      </form>
      <a className="nav-link active me-3" aria-current="page" >
            <Link to="/login">My Account</Link></a>
      <a className="nav-link active position-relative" aria-current="page" >
            <Link to="/"><LocalMallIcon className="">
       
              </LocalMallIcon></Link>
              <span class="localMallIcon position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
  </span></a>
    </div>
  </div>
</nav>
    
    </> );
}

export default Header;