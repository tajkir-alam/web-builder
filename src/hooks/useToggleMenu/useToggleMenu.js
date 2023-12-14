import React, { useState } from "react";

const useToggleMenu = () => {
  const [showComponents, setShowComponents] = useState(true);
  const [componentsHidden, setComponentsHidden] = useState(false);

  const showComponentMenu = () => {
    setShowComponents(!showComponents);
    setTimeout(() => {
      setComponentsHidden(!componentsHidden);
    }, 350);
  };

  return { showComponents, componentsHidden, showComponentMenu };
};

export default useToggleMenu;
