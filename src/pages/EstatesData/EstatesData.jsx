import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";


const EstatesData = () => {
    const [estates, setEstates] = useState([]);

    const [dataLength, setDataLength] = useState(6);


    useEffect( () => {
        fetch('estate.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])


    return (
        <div className="mt-12">
            <div className="text-center">
            <h2 className="text-4xl font-bold">Our Estates</h2>
            <p className="text-lg font-semibold">Here we show some alternative for the people. People can buy easily <br />apartments from us. We give extraordinary service to the customers <br />and our apartments and villa are so cheaper than any company.</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    estates.slice(0, dataLength).map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
            <div className={ dataLength === estates.length && 'hidden'}>
            <div className="text-center mt-8">
                <button
                onClick={() => setDataLength(estates.length)} 
                className="btn btn-primary">Show All</button>
            </div>
            </div>
        </div>
    );
};

export default EstatesData;