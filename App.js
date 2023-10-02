import React, { useState } from "react";
import Onboard from "./components/Onboard";

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }

  return (
    <>
      {showOnboard && <Onboard handleDone={handleOnboardFinish}/>}
      {!showOnboard && <Onboard />}
    </>
  );
};

export default App;