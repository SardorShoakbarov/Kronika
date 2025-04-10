import React from "react";
import Image1 from "../../assets/hero/hero1.jpg";
import Image2 from "../../assets/hero/hero2.jpg";
import Image3 from "../../assets/hero/hero3.jpg";
import Slider from "react-slick";
import "../style.css"

const ImageList = [
  {
    id: 1,
    title: "Biznes va Startaplar – Bir Platformada!",
    img:Image1,
    description:
      "Investorlarni toping, loyihangizni rivojlantiring, yangi hamkorlar bilan bog‘laning – hammasi bitta joyda!",
  },
  {
    id: 2,
    title: "Biznesingiz uchun to‘g‘ri hamkorlarni toping!",
    img:Image2,
    description:
      "Loyihachilar, investorlar va tadbirkorlar uchun maxsus ijtimoiy tarmoq. Yangi imkoniyatlar va birgalikda muvaffaqiyat qozonish platformasi.",
  },
  {
    id: 3,
    title: "Ijobiy o‘zgarishni birga boshlaymiz!",
    img:Image3,
    description:
      "Innovatsion g‘oyalaringizni amalga oshiring, moliyaviy qo‘llab-quvvatlovchilar toping va o‘z sohangizda yetakchi bo‘ling!",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="Error img"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto heroImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
