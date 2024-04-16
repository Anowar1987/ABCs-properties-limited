import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    
    console.log(estate);
    return (
        <div>
            <h2 className="text-3xl">Estate Details of </h2>
        </div>
    );
};

export default EstateDetails;