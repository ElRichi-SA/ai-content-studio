import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  DashboardOutlined,
  LightbulbOutlined,
  DescriptionOutlined,
  SettingsOutlined,
  SmartToyOutlined,
} from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 240;

const navigation = [
  { label: "Dashboard", path: "/", icon: <DashboardOutlined /> },
  { label: "Ideas", path: "/ideas", icon: <LightbulbOutlined /> },
  { label: "Guiones", path: "/scripts", icon: <DescriptionOutlined /> },
  { label: "Configuración", path: "/settings", icon: <SettingsOutlined /> },
];

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            p: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 2,
            py: 3,
          }}
        >
          <SmartToyOutlined color="primary" />

          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            AI Content Studio
          </Typography>
        </Box>

        <List>
          {navigation.map((item) => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              end={item.path === "/"}
              sx={{
                mb: 1,
                borderRadius: 2,
                "&.active": {
                  bgcolor: "action.selected",
                  color: "secondary.main",
                  "& .MuiListItemIcon-root": {
                    color: "secondary.main",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          p: 4,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
