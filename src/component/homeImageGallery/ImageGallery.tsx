const ImageGallery = () => {
  const galleryImages = [
    {
      _id: 1,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819275/graduate_group_pic_1_l5y069.jpg",
    },
    {
      _id: 2,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819275/graduate_group_pic_2_itvzor.jpg",
    },
    {
      _id: 3,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819275/graduate_group_pic_3_v463cz.jpg",
    },
    {
      _id: 4,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819391/graduate_group_pic_4_llxvkn.jpg",
    },
    {
      _id: 5,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819373/graduate_group_pic_5_cfc8ol.jpg",
    },
    {
      _id: 6,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819372/graduate_group_pic_6_yd4yvo.jpg",
    },
    {
      _id: 7,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819378/graduate_group_pic_7_bvcnzt.png",
    },
    {
      _id: 8,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819372/graduate_group_pic_8_kaohn9.jpg",
    },
    {
      _id: 9,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819372/graduate_group_pic_9_uybls6.jpg",
    },
    {
      _id: 10,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819375/graduate_group_pic_10_idwxtm.jpg",
    },
    {
      _id: 11,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819372/graduate_group_pic_11_i9q2y2.jpg",
    },
    {
      _id: 12,
      url: "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759819870/graduate_group_pic_12_vbyhtm.jpg",
    },
  ];
  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 py-12  lg:py-20 ">
        <h1 className="text-2xl lg:text-3xl text-center text-slate-100 font-semibold">
          College Memories Gallery
        </h1>
        <div className="mt-8 lg:mt-12 flex overflow-auto">
          <div className="flex flex-wrap">
            <div className="flex-1/4 max-w-1/4">
              <div className="p-0.5">
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[0].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[1].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
                <div className="relative group overflow-hidden block cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[2].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
              </div>
            </div>
            <div className="flex-1/4 max-w-1/4">
              <div className="p-0.5">
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[3].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[4].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[5].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
              </div>
            </div>
            <div className="flex-1/4 max-w-1/4">
              <div className="p-0.5">
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[6].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>{" "}
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[7].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>{" "}
                <div className="relative group overflow-hidden mb-1 block cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[8].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
              </div>
            </div>
            <div className="flex-1/4 max-w-1/4">
              <div className="p-0.5">
                <div className="relative group overflow-hidden block mb-1 cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[9].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>{" "}
                <div className="relative group overflow-hidden block  cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[10].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
                <div className="relative group overflow-hidden block  cursor-pointer">
                  <img
                    className="w-full transition duration-300 group-hover:scale-105"
                    src={galleryImages[11].url}
                    alt=""
                  />
                  <div className=" bg-black/40 absolute inset-0 group-hover:bg-black/20 transition duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
