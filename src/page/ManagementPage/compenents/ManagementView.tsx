import { Button } from "@mui/material";
import ToshoHeader from "../../../components/ToshoHeader";
import ToshoDialog from "../../../components/ToshoDialog";
import ManagementLogic from "../hooks/ManagementLogic";

function ManagementView() {
  const {
    isBookDeleteOpen,
    isBookAddOpen,
    handleBookAddDialogOpenOnClick,
    handleBookAddYesOnClick,
    handleBookAddNoOnClick,
    handleBookDeleteDialogOpenOnClick,
    handleBookDeleteYesOnClick,
    handleBookDeleteNoOnClick,
  } = ManagementLogic();
  return (
    <>
      <header>
        <ToshoHeader title="管理" />
        <Button variant="contained" onClick={handleBookAddDialogOpenOnClick}>
          本追加
        </Button>
        <Button variant="contained" onClick={handleBookDeleteDialogOpenOnClick}>
          本削除
        </Button>
      </header>
      <ToshoDialog
        open={isBookAddOpen}
        title="本の追加"
        context="本を追加しますか？"
        onYesClick={handleBookAddYesOnClick}
        onNoClick={handleBookAddNoOnClick}
      />
      <ToshoDialog
        open={isBookDeleteOpen}
        title="本の削除"
        context="本を削除しますか？"
        onYesClick={handleBookDeleteYesOnClick}
        onNoClick={handleBookDeleteNoOnClick}
      />
    </>
  );
}

export default ManagementView;
