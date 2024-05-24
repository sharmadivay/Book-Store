import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
function FreeBooks() {
  const filterData = list.filter((data) => data.Category === "Free");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         initialSlide: 2 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          explicabo dignissimos laudantium repellendus placeat, voluptatum
          sapiente, alias illo porro aliquid commodi enim quaerat eius esse
          voluptate. Ullam deleniti commodi eum.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default FreeBooks;
