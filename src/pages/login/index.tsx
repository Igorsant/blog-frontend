import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { login } from "../../service";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

type Inputs = {
  username: string;
  password: string;
};

export default function Sigin() {
  const navigate = useNavigate();
  const setCookie = useCookies(["user"])[1];
  const { handleSubmit, register } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    login(data.username, data.password)
      .then((res) => {
        console.log(res.data.AuthenticationResult.AccessToken);
        setCookie("user", { token: res.data.AuthenticationResult.AccessToken, username: data.username });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        if (error.response.data.name === "UserNotConfirmedException"){
          navigate("/confirm");
          return;
        }
        alert(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            autoComplete="email"
            {...register("username", { required: true })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
