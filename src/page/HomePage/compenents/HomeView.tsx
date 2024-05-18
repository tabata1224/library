import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import ToshoHeader from "../../../components/ToshoHeader";
import ApiButton from "../../../components/ApiButton";

function HomeView() {
  return (
    <header>
      <ToshoHeader title="ホーム" />
      <TextField
        variant="outlined"
        fullWidth
        placeholder="検索"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <AccountCircle /> */}
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {/* API Gateway呼び出し用テストボタン */}
      <ApiButton />
    </header>
  );
}

export default HomeView;
