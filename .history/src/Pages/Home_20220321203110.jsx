import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion";

import React from "react";

function Home() {
  return (
    <div className="home">
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
