import Estate from "../Estate/Estate";
import LatestNews from "../LatestNews/LatestNews";
import WhatSets from "../WhatSets/WhatSets";
import Slider from "../slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Estate></Estate>
            <LatestNews></LatestNews>
            <WhatSets></WhatSets>
        </div>
    );
};

export default Home;