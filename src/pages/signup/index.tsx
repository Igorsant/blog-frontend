import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { signUp } from "../../service";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Sigup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    signUp("user", data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} align="center">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            autoComplete="email"
            error={errors.email ? true : false}
            helperText={errors.email?.message}
            {...register("email", { required: true })}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            {...register("password", { required: true })}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
