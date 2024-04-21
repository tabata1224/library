import { Button, Typography } from "@mui/material";

type ToshoButtonProps = {
  buttonName: string;
  onClick: () => void;
};

function ToshoButton(props: ToshoButtonProps) {
  const { buttonName, onClick } = props;
  return (
    <Button onClick={onClick}>
      <Typography>{buttonName}</Typography>
    </Button>
  );
}

export default ToshoButton;
