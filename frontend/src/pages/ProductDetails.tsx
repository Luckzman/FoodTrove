import React from "react";
import img1 from "../assets/chocolate-pack.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import StarRating from "../components/StarRating";
import Tags from "../components/Tags";
import { CiHeart } from "react-icons/ci";

const ProductDetails = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="bg-[#F7F7F8] py-10 border-[#E9E9E9] border-[1px] border-solid mb-5 rounded-lg flex items-center justify-center">
            <img src={img1} alt="" />
          </div>
          <div className="flex gap-5">
            <div className="w-[63px] h-[63px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md">
              <img className="h-full object-cover" src={img1} alt="" />
            </div>
            <div className="w-[63px] h-[63px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md">
              <img className="h-full object-cover" src={img2} alt="" />
            </div>
            <div className="w-[63px] h-[63px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md">
              <img className="h-full object-cover" src={img3} alt="" />
            </div>
            <div className="w-[63px] h-[63px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md">
              <img className="h-full object-cover" src={img4} alt="" />
            </div>
            <div className="w-[63px] h-[63px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md">
              <img className="h-full object-cover" src={img5} alt="" />
            </div>
            <div className="w-[63px] h-[63px] bg-[#F7F7F8] border-[#E9E9E9] border-[1px] border-solid rounded-md">
              <img className="h-full object-cover" src={img5} alt="" />
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="pb-[23px] mb-[23px] border-[#E9E9E9] border-solid border-b-[1px]">
            <h1 className="text-3xl mb-[10px] text-[#2B2B2D]">
              Seeds Of Change Oraganic Quinoa, Brown
            </h1>
            <p className="text-[#7A7A7A]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
              minus error doloribus saepe natus?
            </p>
          </div>
          <StarRating review="75 Reviews" />
          <div className="mt-[14px]">
            <div>
              <p className="flex text-[#777777] ">
                <span className="w-[100px] flex justify-between mr-2 text-[#2B2B2D] leading-[30px]">
                  <strong>Brand</strong>:
                </span>{" "}
                ESTA BETTERU CO
              </p>
              <p className="flex text-[#777777]">
                <span className="w-[100px] flex justify-between mr-2 text-[#2B2B2D] leading-[30px]">
                  <strong>Flavour</strong>:
                </span>{" "}
                Super Saver Pack
              </p>
              <p className="flex text-[#777777]">
                <span className="w-[100px] flex justify-between mr-2 text-[#2B2B2D] leading-[30px]">
                  <strong>Diet Type</strong>:
                </span>{" "}
                Vegetarien
              </p>
              <p className="flex text-[#777777]">
                <span className="w-[100px] flex justify-between mr-2 text-[#2B2B2D] leading-[30px]">
                  <strong>Weight</strong>:
                </span>{" "}
                200 Grams
              </p>
              <p className="flex text-[#777777]">
                <span className="w-[100px] flex justify-between mr-2 text-[#2B2B2D] leading-[30px]">
                  <strong>Speciality</strong>:
                </span>{" "}
                Gluten Free, Sugar Free
              </p>
              <p className="flex text-[#777777]">
                <span className="w-[100px] flex justify-between mr-2 text-[#2B2B2D] leading-[30px]">
                  <strong>Info</strong>:
                </span>{" "}
                Egg Free, Allergen-Free
              </p>
              <p className="flex text-[#777777]">
                <span className="w-[100px] flex justify-between mr-2 text-[#2B2B2D] leading-[30px]">
                  <strong>Items</strong>:
                </span>{" "}
                1
              </p>
            </div>
          </div>
          <p className="text-[#F53E32] text-[18px] mt-[22px] text-[24px] text-3xl">
            $28.85
          </p>
          <div className="flex items-center">
            <p className="mr-3">Size/Weight : </p> <Tags />
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <span className="px-4 py-2 border-solid border-[1px] border-[#E9E9E9] rounded-md">
                1
              </span>
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="w-5 flex justify-center items-center border-solid border-[1px] border-[#E9E9E9] rounded-md text-[12px]">
                  +
                </span>
                <span className="w-5 flex justify-center items-center border-solid border-[1px] border-[#E9E9E9] rounded-md text-[12px]">
                  -
                </span>
              </div>
            </div>
            <button className="bg-[#F53E32] text-white px-5 rounded-md">
              Add To Cart
            </button>
            <span className="px-2 py-2 border-solid border-[1px] border-[#E9E9E9] rounded-md text-[26px]">
              <CiHeart />
            </span>
          </div>
        </div>
      </div>

      <div className="border-solid border-[1px] border-[#E9E9E9] p-[25px] rounded-md mt-[50px]">
        <div className="flex border-b-[1px] border-solid border-[#E9E9E9] gap-5 pb-[10px] font-bold">
          <button>Description</button>
          <button>Information</button>
          <button>Review</button>
        </div>
        <div className="">
          <p className="py-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a
            ipsa at ducimus impedit quisquam ut numquam dolorem delectus nulla?
            Porro omnis accusantium, inventore, itaque quisquam in neque qui
            animi debitis beatae ullam ex!<br></br>Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quisquam mollitia voluptates itaque
            unde ipsa minima culpa placeat omnis, veritatis, corrupti molestiae!
            Neque, assumenda. Iusto quaerat fugit perferendis, qui tempore amet
            consectetur eveniet numquam omnis? Esse dolor fuga eveniet doloribus
            voluptatem a odio nobis sed ipsum vitae commodi officiis velit hic,
            at rerum tenetur, itaque, quasi repellendus? Alias rem dolorum
            tenetur accusamus libero cupiditate debitis animi quibusdam
            asperiores sed, incidunt quia aliquid reprehenderit velit dolores
            voluptatibus placeat molestias deserunt hic cum, consequuntur
            voluptatem sequi quas. Numquam asperiores saepe illum quod odio
            nobis dignissimos aliquid veniam sed suscipit tempore, neque illo
            inventore quidem necessitatibus vitae ipsa iure error pariatur
            cupiditate quia iste in, earum accusamus! Repellat iure animi
            voluptate fugit modi nisi harum itaque quod suscipit est! Quis,
            eaque. Ut, architecto.
          </p>
          <h3 className="border-b-[1px] font-bold border-solid border-[#E9E9E9] py-[20px]">
            Packaging & Delivery
          </h3>
          <p className="py-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a
            ipsa at ducimus impedit quisquam ut numquam dolorem delectus nulla?
            Porro omnis accusantium, inventore, itaque quisquam in neque qui
            animi debitis beatae ullam ex!<br></br>Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quisquam mollitia voluptates itaque
            unde ipsa minima culpa placeat omnis, veritatis, corrupti molestiae!
            Neque, assumenda. Iusto quaerat fugit perferendis, qui tempore amet
            consectetur eveniet numquam omnis? Esse dolor fuga eveniet doloribus
            voluptatem a odio nobis sed ipsum vitae commodi officiis velit hic,
            at rerum tenetur, itaque, quasi repellendus? Alias rem dolorum
            tenetur accusamus libero cupiditate debitis animi quibusdam
            asperiores sed, incidunt quia aliquid reprehenderit velit dolores
            voluptatibus placeat molestias deserunt hic cum, consequuntur
            voluptatem sequi quas. Numquam asperiores saepe illum quod odio
            nobis dignissimos aliquid veniam sed suscipit tempore, neque illo
            inventore quidem necessitatibus vitae ipsa iure error pariatur
            cupiditate quia iste in, earum accusamus! Repellat iure animi
            voluptate fugit modi nisi harum itaque quod suscipit est! Quis,
            eaque. Ut, architecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
