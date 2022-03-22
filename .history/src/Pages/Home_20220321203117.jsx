import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion";

import React from "react";

function Home() {
  return (
    <motion.div className="home">
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
