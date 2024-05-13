import { Home } from "@mui/icons-material";
import BookIcon from "@mui/icons-material/Book";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { title: "ホーム", icon: Home, address: "/" },
  { title: "マイブック", icon: BookIcon, address: "/myBook" },
  { title: "管理", icon: SupervisorAccountIcon, address: "/management" },
];

// 型
type ToshoHeaderProps = {
  title: string;
};

function ToshoHeader(props: ToshoHeaderProps) {
  const { title } = props;

  const [show, setShow] = useState<boolean>(false);

  /** アイコンクリック処理 */
  const handleIconOnClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={handleIconOnClick}>
          <DensityMediumIcon />
        </IconButton>
        <Typography variant="h5">{title}</Typography>
      </Stack>
      <Drawer open={show}>
        <Box
          sx={{ height: "100vh", width: "70vw" }}
          onClick={handleIconOnClick}
        >
          <List>
            {menu.map((obj) => {
              const Icon = obj.icon;
              const { address } = obj;
              return (
                <ListItem key={obj.title}>
                  <ListItemButton component={NavLink} to={address}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={obj.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default ToshoHeader;
