import { Box, Typography } from "@mui/material";

export default function SettingsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1">
        Configuración
      </Typography>

      <Typography color="text.secondary">
        Bienvenido a AI Content Studio.
      </Typography>
    </Box>
  );
}
