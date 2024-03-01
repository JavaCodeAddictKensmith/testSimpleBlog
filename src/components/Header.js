import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="Header">
            <h2>Artists In A Chocolate City</h2>
            <nav>
                <ul>
                    <li><Link to="/">All tweets by artists</Link></li>
                    <li><Link to="post">Add tweets</Link></li>
                    <li><Link to="user">All artists</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header