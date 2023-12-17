import React, { useState } from "react";

const useHandleFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleFlip = (component) => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    setSelectedComponent(component);
  };

  return { isFlipped, selectedComponent, handleFlip };
};

export default useHandleFlip;
