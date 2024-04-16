import EstatesData from "../EstatesData/EstatesData";
import LatestNews from "../LatestNews/LatestNews";
import WhatSets from "../WhatSets/WhatSets";
import Slider from "../slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <EstatesData></EstatesData>
            <LatestNews></LatestNews>
            <WhatSets></WhatSets>
        </div>
    );
};

export default Home;