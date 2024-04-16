

const Estate = ({ estate }) => {
    const { image, estate_title, area, status, location } = estate;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold text-sky-800">{estate_title}</h2>
                <div className="text-lg font-semibold">
                <p>Area : {area}</p>
                <p>Status : {status}</p>
                <p>Location : {location}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default Estate;