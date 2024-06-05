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
  onClick: () => void;
};

type ToshoDialogProps = DialogProps & ToshoDialogConponentsProps;

function ToshoDialog(props: ToshoDialogProps) {
  const { open, title, context, onClick } = props;
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{context}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick}>はい</Button>
        <Button onClick={onClick}>いいえ</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ToshoDialog;
