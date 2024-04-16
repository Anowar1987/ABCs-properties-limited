import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    
    console.log(estate);
    return (
        <div className="mt-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-10">Estate Details of <span className="text-green-400 text-4xl">{estate.estate_title}</span></h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-2">
                    <img className="h-full" src={estate.image} alt="" />
                </div>
                <div className="border md:col-span-2 ml-3">
                    <p className="text-lg"><span className="font-bold">Segment :</span> {estate.segment_name}</p>
                    <h4 className="text-lg font-bold">Description :</h4>
                    <p>{estate.description}</p>
                    <p><span className="font-bold">Price : </span>{estate.price}</p>
                    <p><span className="font-bold">Status : </span>{estate.status}</p>
                    <p><span className="font-bold">Area : </span>{estate.area}</p>
                    <p><span className="font-bold">Location : </span>{estate.location}</p>
                    <p><span className="font-bold">Facilities : </span>{estate.facilities}</p>
                </div>
                

            </div>
        </div>
    );
};

export default EstateDetails;