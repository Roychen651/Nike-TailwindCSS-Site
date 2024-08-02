import React, { useRef } from "react";
import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CustomerReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-violet-600">Customers </span>Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center"> 
        Hear genuine stories from our satisfied customers. 
      </p>
      <motion.div
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {reviews.map((review) => (
          <motion.div key={review.customerName} variants={itemVariants}>
            <ReviewCard 
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
