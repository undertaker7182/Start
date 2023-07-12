import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className="border-bottom lh-1 py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <NavLink to="/card1" className="link-secondary">Stories</NavLink>
                </div>
                <div className="col-4 text-center">
                    <NavLink to="/card2" className="blog-header-logo text-body-emphasis text-decoration-none">Stories 2</NavLink>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="link-secondary" href="#" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img"
                            viewBox="0 0 24 24">
                            <title>Search</title>
                            <circle cx="10.5" cy="10.5" r="7.5"></circle>
                            <path d="M21 21l-5.2-5.2"></path>
                        </svg>
                    </a>
                    <NavLink to="/card3" className="btn btn-sm btn-outline-secondary">Stories 3</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;