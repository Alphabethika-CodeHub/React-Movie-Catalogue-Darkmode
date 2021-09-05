const CardMovie = () => {
    return (
        <div className="grid grid-cols-5 gap-5">
            <div className="shadow rounded-lg hover:shadow-2xl bg-white">
                <img className="rounded-lg" src="https://picsum.photos/300" alt="" />
                <div className="p-3">
                    <h1>The Raya And The Dragon</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, sapiente? Minima doloribus fuga..</p>
                </div>
            </div>
        </div>
    );
}

export default CardMovie;