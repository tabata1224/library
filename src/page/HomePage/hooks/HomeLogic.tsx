import { useState } from "react";

function useHomeLogic() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDialogOpenOnClick = () => {
    setIsOpen(true);
  };

  const handleDialogCloseOnClick = () => {
    setIsOpen(false);
  };

  return { isOpen, handleDialogOpenOnClick, handleDialogCloseOnClick };
}

export default useHomeLogic;
