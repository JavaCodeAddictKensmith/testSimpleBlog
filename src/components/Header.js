import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="Header">
            <h1>Artist Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Tweets By each Artist</Link></li>
                    <li><Link to="post">Tweets</Link></li>
                    <li><Link to="user">Artists</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header