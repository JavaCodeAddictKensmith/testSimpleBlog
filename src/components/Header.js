import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="Header">
            <h1>Artist Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">All tweets by each artist</Link></li>
                    <li><Link to="post">Add tweets</Link></li>
                    <li><Link to="user">All artists</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header