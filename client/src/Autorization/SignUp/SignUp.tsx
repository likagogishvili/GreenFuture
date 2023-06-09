import { useState } from "react";
import { auth } from "../../assets/texts/auth";
import useStore from "../../store/store";
import * as muiComp from ".././SignIn/SignInmui";

const theme = muiComp.createTheme();

export default function SignUp() {
  const language = useStore((state) => state.language);
  const [region, setRegion] = useState(auth[language].regions[0]);

  const handleRegionChange = (event: any) => {
    setRegion(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
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
                id="email"
                label={auth[language].email}
                name="email"
                autoComplete="email"
                autoFocus
                color="success"
              />

              <muiComp.RadioGroup
                name="gender"
                className="radioGroup"
                defaultValue="first"
              >
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

              <muiComp.FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                <muiComp.InputLabel id="demo-simple-select-label">
                  {auth[language].regionPlaceholder}
                </muiComp.InputLabel>
                <muiComp.Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={region} // Set the value of the select component
                  onChange={handleRegionChange} // Handle select value changes
                >
                  {auth[language].regions.map((name) => (
                    <muiComp.MenuItem key={name} value={name}>
                      {name}
                    </muiComp.MenuItem>
                  ))}
                </muiComp.Select>
              </muiComp.FormControl>

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
            </muiComp.Box>
          </muiComp.Box>
        </muiComp.Grid>
      </muiComp.Grid>
    </muiComp.ThemeProvider>
  );
}
