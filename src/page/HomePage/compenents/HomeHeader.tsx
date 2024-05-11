import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Home } from "@mui/icons-material";
import BookIcon from "@mui/icons-material/Book";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SearchIcon from "@mui/icons-material/Search";
import useHomeLogic from "../hooks/HomeLogic";

const menu = [
  { title: "ホーム", icon: Home },
  { title: "マイブック", icon: BookIcon },
  { title: "管理", icon: SupervisorAccountIcon },
];

function HomeHeader() {
  const { show, handleIconOnClick } = useHomeLogic();

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">ホーム</Typography>
        <IconButton onClick={handleIconOnClick}>
          <DensityMediumIcon />
        </IconButton>
      </Stack>
      <Drawer open={show}>
        <Box
          sx={{ height: "100vh", width: "70vw" }}
          onClick={handleIconOnClick}
        >
          <List>
            {menu.map((obj) => {
              const Icon = obj.icon;
              return (
                <ListItem key={obj.title}>
                  {/* <ListItemButton> */}
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={obj.title} />
                  {/* </ListItemButton> */}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <TextField
        variant="outlined"
        fullWidth
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
      <Button
        onClick={() => {
          alert("clicked");
        }}
      >
        API Gateway
      </Button>
    </>
  );
}

export default HomeHeader;
