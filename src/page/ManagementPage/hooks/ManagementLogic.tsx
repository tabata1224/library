import { useState } from "react";

function ManagementLogic() {
  const [isBookAddOpen, setIsBookAddOpen] = useState<boolean>(false);
  const [isBookDeleteOpen, setIsBookDeleteOpen] = useState<boolean>(false);

  // ダイアログオープン処理
  const handleBookAddDialogOpenOnClick = () => {
    setIsBookAddOpen(true);
  };

  // ダイアログ「はい」ボタン押下時処理
  const handleBookAddYesOnClick = () => {
    setIsBookAddOpen(false);
  };

  // ダイアログ「いいえ」ボタン押下時処理
  const handleBookAddNoOnClick = () => {
    setIsBookAddOpen(false);
  };

  // ダイアログオープン処理
  const handleBookDeleteDialogOpenOnClick = () => {
    setIsBookDeleteOpen(true);
  };

  // ダイアログ「はい」ボタン押下時処理
  const handleBookDeleteYesOnClick = () => {
    setIsBookDeleteOpen(false);
  };

  // ダイアログ「いいえ」ボタン押下時処理
  const handleBookDeleteNoOnClick = () => {
    setIsBookDeleteOpen(false);
  };

  return {
    isBookDeleteOpen,
    isBookAddOpen,
    handleBookAddDialogOpenOnClick,
    handleBookAddYesOnClick,
    handleBookAddNoOnClick,
    handleBookDeleteDialogOpenOnClick,
    handleBookDeleteYesOnClick,
    handleBookDeleteNoOnClick,
  };
}

export default ManagementLogic;
