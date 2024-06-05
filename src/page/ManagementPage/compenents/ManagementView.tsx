import { Button } from "@mui/material";
import ToshoHeader from "../../../components/ToshoHeader";

function ManagementView() {
  return (
    <header>
      <ToshoHeader title="管理" />
      <Button variant="contained">本追加</Button>
      <Button variant="contained">本削除</Button>
    </header>
  );
}

export default ManagementView;
