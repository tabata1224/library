import { Button } from "@mui/material";
import axios from "axios";

function ApiButton() {
  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://ahdf3t0dt8.execute-api.ap-northeast-1.amazonaws.com/library-test"
      );
      alert(response.data.body[0].title.S);
    } catch (error) {
      console.error("API Call Error:", error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Call API
    </Button>
  );
}

export default ApiButton;
