import SearchIcon from "@mui/icons-material/Search";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  InputAdornment,
  TextField,
} from "@mui/material";
import ToshoHeader from "../../../components/ToshoHeader";
import useHomeLogic from "../hooks/HomeLogic";
import ToshoDialog from "../../../components/ToshoDialog";
import ApiButton from "../../../components/ApiButton";

function HomeView() {
  const { isOpen, handleDialogOpenOnClick, handleYesOnClick, handleNoOnClick } =
    useHomeLogic();
  return (
    <>
      <header>
        <ToshoHeader title="ホーム" />
      </header>
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
      <ImageList cols={2}>
        {/* {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))} */}
        <ImageListItem>
          {/* <img src={TEST} alt="仮キャプチャ" /> */}
          <ImageListItemBar
            title="仮キャプチャ"
            position="below"
            onClick={handleDialogOpenOnClick}
          />
        </ImageListItem>
      </ImageList>
      <ToshoDialog
        open={isOpen}
        title="本の貸し出し"
        onYesClick={handleYesOnClick}
        onNoClick={handleNoOnClick}
        context="本を借りますか"
      />
    </>
  );
}

export default HomeView;
