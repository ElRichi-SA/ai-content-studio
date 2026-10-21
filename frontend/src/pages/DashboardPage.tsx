import { Box, Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1">
        Dashboard
      </Typography>

      <Typography color="text.secondary">
        Bienvenido a AI Content Studio.
      </Typography>
    </Box>
  );
}
