import useDarkMode from "../Hook/useDarkMode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div className="w-full flex justify-between p-4 shadow -mt-1">
            <div>
                <Link to="/" className="text-red-500 font-bold text-2xl uppercase">Movie Catalogue</Link>
            </div>
            <div className="mt-1">
                <Link to="#" className="mr-4 shadow py-2 px-4 rounded-md dark:bg-white"> Latest</Link>
                <Link to="#" className="mr-4 shadow py-2 px-4 rounded-md dark:bg-white"> Popular</Link>
                <Link to="#" className="mr-4 shadow py-2 px-4 rounded-md dark:bg-white">Upcoming</Link>
                <Link to="#" className="mr-4 shadow py-2 px-4 rounded-md dark:bg-white">Liked</Link>
                <Link to="/create" className="mr-4 shadow py-2 px-4 rounded-md dark:bg-white">New Blog</Link>
                <button onClick={() => setTheme(colorTheme)} className="mr-4 bg-white shadow px-2 py-1 rounded-full">{colorTheme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}</button>
            </div>
        </div>
    );
}

export default Navbar;