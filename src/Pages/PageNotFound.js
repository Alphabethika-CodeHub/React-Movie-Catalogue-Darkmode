import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="p-12">
            <div className="text-center">
                <h1>Sorry</h1>
                <p className="mb-4">That Page Cannot be Found.</p>
                <Link className="bg-red-100 py-2 px-4 shadow rounded-lg" to="/">Back to The Homepage...</Link>
            </div>
        </div>
    );
}

export default PageNotFound;