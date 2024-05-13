import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import ToshoHeader from "../../../components/ToshoHeader";

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
    </header>
  );
}

export default HomeView;
