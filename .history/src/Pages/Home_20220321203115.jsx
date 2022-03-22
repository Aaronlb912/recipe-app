import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion";

import React from "react";

function Home() {
  return (
    <motiondiv className="home">
      <Veggie />
      <Popular />
    </motiondiv>
  );
}

export default Home;
