import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";

type ToshoDialogConponentsProps = {
  title: string;
  context: string;
  onYesClick: () => void;
  onNoClick: () => void;
};

type ToshoDialogProps = DialogProps & ToshoDialogConponentsProps;

function ToshoDialog(props: ToshoDialogProps) {
  const { open, title, context, onYesClick, onNoClick } = props;
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{context}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onYesClick}>はい</Button>
        <Button onClick={onNoClick}>いいえ</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ToshoDialog;
