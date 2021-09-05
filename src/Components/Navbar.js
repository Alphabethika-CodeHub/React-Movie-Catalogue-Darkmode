import useDarkMode from "../Hook/useDarkMode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div className="w-full flex justify-between p-4 shadow -mt-1">
            <div>
                <a className="text-red-500 font-bold text-2xl uppercase" href="#">Movie Catalogue</a>
            </div>
            <div className="mt-1">
                <a className="mr-4 dark:text-white" href="#"> Latest</a>
                <a className="mr-4 dark:text-white" href="#"> Popular</a>
                <a className="mr-4 dark:text-white" href="#">Upcoming</a>
                <a className="mr-4 dark:text-white" href="#">Liked</a>
                <button onClick={() => setTheme(colorTheme)} className="mr-4 bg-white shadow px-2 py-1 rounded-full">{colorTheme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}</button>
            </div>
        </div>
    );
}

export default Navbar;