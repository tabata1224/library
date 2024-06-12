import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ToshoHeader from "../../../components/ToshoHeader";
import AddBookForm from "../../../components/BookRegistration";

function BookAddView() {
  return (
    <>
      <header>
        <ToshoHeader title="本追加" />
      </header>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" sx={{ mr: "10px", width: "80px" }}>
          タイトル
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="追加"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <AddBookForm />
    </>
  );
}

export default BookAddView;
