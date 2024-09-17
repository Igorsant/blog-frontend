import { Box, TextField, Button, Container, Typography } from "@mui/material";
// import { useSearchParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

type Inputs = {
  password: string;
  confirmPassword: string;
};

export const ResetPassword = () => {
  // const [searchParams, _setSearchParams] = useSearchParams();
  // const { username, confirmationCode } = JSON.parse(atob(searchParams.get("code") || ""));

  const { handleSubmit, register, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} align="center">
          Reset Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
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
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
