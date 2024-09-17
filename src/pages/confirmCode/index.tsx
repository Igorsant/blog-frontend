import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { confirmCode } from "../../service";

type Inputs = {
  code: number;
};

export const ConfirmCode = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const searchParams = useSearchParams()[0];
  const navigate = useNavigate();
  const username = searchParams.get("username");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    confirmCode(username || "", data.code)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        // TO DO handle error
        console.log(err);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} align="center">
          Confirm code we sent to your email
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Code"
            error={errors.code ? true : false}
            helperText={errors.code?.message}
            {...register("code", { required: true })}
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
};
