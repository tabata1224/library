import { useState } from "react";

function useHomeLogic() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ダイアログオープン処理
  const handleDialogOpenOnClick = () => {
    setIsOpen(true);
  };

  /** ダイアログ「はい」ボタン押下時処理 */
  const handleYesOnClick = () => {
    setIsOpen(false);
  };

  /** ダイアログ「いいえ」ボタン押下時処理 */
  const handleNoOnClick = () => {
    setIsOpen(false);
  };

  return { isOpen, handleDialogOpenOnClick, handleYesOnClick, handleNoOnClick };
}

export default useHomeLogic;
