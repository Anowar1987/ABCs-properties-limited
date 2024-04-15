import sliderImage1 from '../../assets/Images/banner/BImage01.jpg';
import sliderImage2 from '../../assets/Images/banner/BImage02.jpg';
import sliderImage3 from '../../assets/Images/banner/BImage03.jpg';
import sliderImage4 from '../../assets/Images/banner/BImage04.jpg';

const Slider = () => {
    return (
        <div className="mt-8">
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={sliderImage1} className="w-full h-80" />
    <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={sliderImage2} className="w-full h-80" />
    <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={sliderImage3} className="w-full h-80" />
    <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={sliderImage4} className="w-full h-80" />
    <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;