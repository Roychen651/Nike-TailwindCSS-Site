import React from "react";
import Button from "../Components/Button";
import shoe8 from "../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <div>
      <section
        id="about-us"
        className="flex justify-between items-center
        max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red"> Quality </span> Products
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium quality and comfort, our products are designed to
            enhance your active lifestyle.
          </p>
          <p className="mt-6 lx:max-w-lg info-text">
            Our dedictation and commitment to quality is what sets us apart from
            the rest.
          </p>
          <div className="mt-11 ">
          <Button label="View Details" />
          </div>

        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe8"
          width={570}
          height={522}
          className="object-contain" />

        </div>
      </section>
    </div>
  );
};

export default SuperQuality;
