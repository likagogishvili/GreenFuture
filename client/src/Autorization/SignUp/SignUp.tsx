import { auth } from "../../assets/texts/auth";
import useStore from "../../store/store";
import * as muiComp from ".././SignIn/SignInmui";
function Copyright(props: any) {
  return (
    <muiComp.Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <muiComp.Link color="inherit"></muiComp.Link>
      {new Date().getFullYear()}
      {"."}
    </muiComp.Typography>
  );
}

const theme = muiComp.createTheme();

export default function SignUp() {
  const language = useStore((state) => state.language);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <muiComp.ThemeProvider theme={theme}>
      <muiComp.Grid container component="main" sx={{ height: "100vh" }}>
        <muiComp.CssBaseline />
        <muiComp.Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${muiComp.signUpBG})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <muiComp.Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={muiComp.Paper}
          elevation={6}
          square
        >
          <muiComp.Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <muiComp.Avatar sx={{ m: 1, bgcolor: "success.main" }}>
              <muiComp.LockOutlinedIcon />
            </muiComp.Avatar>
            <muiComp.Typography component="h1" variant="h5">
              {auth[language].create}
            </muiComp.Typography>
            <muiComp.Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <muiComp.TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label={auth[language].name}
                name="name"
                autoComplete="name"
                autoFocus
                color="success"
              />

              <muiComp.TextField
                margin="normal"
                required
                fullWidth
                id="lname"
                label={auth[language].lname}
                name="lname"
                autoComplete="lname"
                autoFocus
                color="success"
              />

              <muiComp.TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={auth[language].password}
                type="password"
                id="password"
                autoComplete="current-password"
                color="success"
              />
              <muiComp.RadioGroup name="use-radio-group" className="d-flex" defaultValue="first">
                <muiComp.FormControlLabel
                  value="first"
                  label={auth[language].gender[0]}
                  control={<muiComp.Radio />}
                />
                <muiComp.FormControlLabel
                  value="second"
                  label={auth[language].gender[1]}
                  control={<muiComp.Radio />}
                />
              </muiComp.RadioGroup>
              <muiComp.FormControlLabel
                control={<muiComp.Checkbox value="remember" color="success" />}
                label={auth[language].agree}
              />
              <muiComp.Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="success"
              >
                {auth[language].create}
              </muiComp.Button>
              <muiComp.Grid container>
                <muiComp.Grid item xs>
                  <muiComp.Link
                    href="resetPassword"
                    variant="body2"
                    className="greenTxt"
                  >
                    {auth[language].resetPassword}
                  </muiComp.Link>
                </muiComp.Grid>
                <muiComp.Grid item>
                  <muiComp.Link
                    href="signIn"
                    variant="body2"
                    className="greenTxt"
                  >
                    {auth[language].signIn}
                  </muiComp.Link>
                </muiComp.Grid>
              </muiComp.Grid>
              <Copyright sx={{ mt: 5 }} />
            </muiComp.Box>
          </muiComp.Box>
        </muiComp.Grid>
      </muiComp.Grid>
    </muiComp.ThemeProvider>
  );
}
