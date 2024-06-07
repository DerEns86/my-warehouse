import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>My Warehouse</h1>

            <nav>

                <Link to="/">Home</Link>

                <Link to="/add-product">Add Product</Link>

            </nav>
        </header>
    )
}