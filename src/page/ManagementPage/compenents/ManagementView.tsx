import { Button } from "@mui/material";
import ToshoHeader from "../../../components/ToshoHeader";
import ManagementLogic from "../hooks/ManagementLogic";

function ManagementView() {
  const { handleBookAddOnClick, handleBookDeleteOnClick } = ManagementLogic();

  return (
    <header>
      <ToshoHeader title="管理" />
      <Button variant="contained" onClick={handleBookAddOnClick}>
        本追加
      </Button>
      <Button variant="contained" onClick={handleBookDeleteOnClick}>
        本削除
      </Button>
    </header>
  );
}

export default ManagementView;
