import useDarkMode from "../Hook/useDarkMode";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
    useDarkMode();
    return (
        <div className="w-full flex justify-between p-4 shadow -mt-1">
            <div>
                <a className="text-red-500 font-bold text-2xl uppercase" href="#">Movie Catalogue</a>
            </div>
            <div className="mt-1">
                <a className="mr-4" href="#">Latest</a>
                <a className="mr-4" href="#">Popular</a>
                <a className="mr-4" href="#">Upcoming</a>
                <a className="mr-4" href="#">Liked</a>
            </div>
        </div>
    );
}

export default Navbar;