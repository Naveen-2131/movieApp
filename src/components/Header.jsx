import { NavLink , useNavigate } from "react-router-dom"

 const Header = () => {
  const navigator = useNavigate();
  const handleSearch= (e) => {
e.preventDefault();
const queryTerm = e.target.search.value;
e.target.reset();
return navigator(`/search?q=${queryTerm}`);
  }
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-info navbar-dark">
      <div className="container-fluid fw-bold">
        <NavLink to="/" className="navbar-brand">
          <i classna="bi bi-film"> </i>  Movie Listings
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 fw-bold">
            <li className="nav-item"><NavLink to="/" className="nav-link">All</NavLink></li>
            <li className="nav-item"><NavLink to="/movie/popular" className="nav-link">Popular</NavLink></li>
            <li className="nav-item"><NavLink to="/movie/top_rated" className="nav-link">Top Rated</NavLink></li>
            <li className="nav-item"><NavLink to="/movie/upcoming" className="nav-link">Upoming</NavLink></li>
          </ul>
          <form onSubmit={handleSearch}>
            <input type="search" placeholder="Search" className="form-control " name="search"/>
          </form>
        </div>

      </div></nav>
  )
}
export default Header
