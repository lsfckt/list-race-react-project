import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header id="header-top" className="header-top">
            <ul>
                <li>
                    <div className="header-top-left">
                        <ul>
                            <li className="select-opt">
                                <Link to="/"><span className="lnr lnr-magnifier"></span></Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="head-responsive-right pull-right">
                    <div className="header-top-right">
                        <ul>
                            <li className="header-top-contact">
                                +1 222 777 6565
                            </li>
                            <li className="header-top-contact">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="header-top-contact">
                                <Link to="/register">Register</Link>
                            </li>
                            <li className="header-top-contact">
                                <Link to="/register/business">Add your business</Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

        </header>
    );
}