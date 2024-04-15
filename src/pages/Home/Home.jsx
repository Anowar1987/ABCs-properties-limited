import Estate from "../Estate/Estate";
import LatestNews from "../LatestNews/LatestNews";
import WhatSets from "../WhatSets/WhatSets";
import Slider from "../slider/Slider";

const Home = () => {
    return (
        <div>
            <h2 className="text-3xl font-poppins">This is Home</h2>
            <Slider></Slider>
            <Estate></Estate>
            <LatestNews></LatestNews>
            <WhatSets></WhatSets>
        </div>
    );
};

export default Home;