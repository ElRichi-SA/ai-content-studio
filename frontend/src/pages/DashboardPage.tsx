import { useEffect, useState } from "react";
import { Alert, Box, CircularProgress, Typography } from "@mui/material";

import { checkApiHealth } from "../services/api";

type ApiStatus = "loading" | "connected" | "error";

export default function DashboardPage() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>("loading");

  useEffect(() => {
    checkApiHealth()
      .then(() => {
        setApiStatus("connected");
      })
      .catch(() => {
        setApiStatus("error");
      });
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>

        <Typography color="text.secondary">
          Bienvenido a tu oficina de agentes IA.
        </Typography>
      </Box>

      {apiStatus === "loading" && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CircularProgress size={24} />

          <Typography color="text.secondary">
            Conectando con la API...
          </Typography>
        </Box>
      )}

      {apiStatus === "connected" && (
        <Alert severity="success">Backend conectado correctamente.</Alert>
      )}

      {apiStatus === "error" && (
        <Alert severity="error">No se pudo conectar con el backend.</Alert>
      )}
    </Box>
  );
}
