import { useState } from "react";

function useHomeLogic() {
  const [show, setShow] = useState<boolean>(false);

  /** アイコンクリック処理 */
  const handleIconOnClick = () => {
    setShow(!show);
  };

  return { show, handleIconOnClick };
}

export default useHomeLogic;
