import { useNavigate } from "react-router-dom";

function ManagementLogic() {
  const navigate = useNavigate();
  // ダイアログオープン処理
  const handleBookAddOnClick = () => {
    navigate("/bookAdd");
  };

  // ダイアログオープン処理
  const handleBookDeleteOnClick = () => {
    navigate("/bookDelete");
  };

  return {
    handleBookAddOnClick,
    handleBookDeleteOnClick,
  };
}

export default ManagementLogic;
