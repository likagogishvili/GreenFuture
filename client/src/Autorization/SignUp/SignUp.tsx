import { useState } from "react";
import { auth } from "../../assets/texts/auth";
import useStore from "../../store/store";
import * as muiComp from ".././SignIn/SignInmui";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const theme = muiComp.createTheme();

export default function SignUp() {
  const language = useStore((state) => state.language);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(auth[language].formEroors.name),
    lname: Yup.string().required(auth[language].formEroors.lname),
    email: Yup.string()
      .email(auth[language].formEroors.emailVal)
      .required(auth[language].formEroors.emailReq),
    password: Yup.string()
      .required(auth[language].formEroors.password)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        auth[language].formEroors.passwordVal
      ),
    agree: Yup.boolean().oneOf([true], auth[language].formEroors.agree),
    gender: Yup.string().required(auth[language].formEroors.gender),
  });
  const [region, setRegion] = useState(auth[language].regions[0]);

  const handleRegionChange = (event: any) => {
    setRegion(event.target.value);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
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
            <Formik
              initialValues={{
                name: "",
                lname: "",
                email: "",
                password: "",
                agree: false,
                gender: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form style={{ width: "80%" }}>
                <Field
                  as={muiComp.TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label={auth[language].name}
                  name="name"
                  color="success"
                />
                <ErrorMessage
                  name="name"
                  component={muiComp.Typography}
                  // @ts-ignore
                  variant="caption"
                  color="error"
                />

                <Field
                  as={muiComp.TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="lname"
                  label={auth[language].lname}
                  name="lname"
                  color="success"
                />
                <ErrorMessage
                  name="lname"
                  component={muiComp.Typography}
                  // @ts-ignore
                  variant="caption"
                  color="error"
                />

                <Field
                  as={muiComp.TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={auth[language].email}
                  name="email"
                  autoComplete="email"
                  color="success"
                />
                <ErrorMessage
                  name="email"
                  component={muiComp.Typography}
                  // @ts-ignore
                  variant="caption"
                  color="error"
                />

                <Field
                  as={muiComp.RadioGroup}
                  name="gender"
                  className="radioGroup"
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
                </Field>
                <ErrorMessage
                  name="gender"
                  component={muiComp.Typography}
                  // @ts-ignore
                  variant="caption"
                  color="error"
                />

                <muiComp.FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                  <muiComp.InputLabel id="demo-simple-select-label">
                    {auth[language].regionPlaceholder}
                  </muiComp.InputLabel>
                  <Field
                    as={muiComp.Select}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="region"
                    value={region}
                    onChange={handleRegionChange}
                  >
                    {auth[language].regions.map((name) => (
                      <muiComp.MenuItem key={name} value={name}>
                        {name}
                      </muiComp.MenuItem>
                    ))}
                  </Field>
                </muiComp.FormControl>

                <Field
                  as={muiComp.TextField}
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
                <ErrorMessage
                  name="password"
                  component={muiComp.Typography}
                  // @ts-ignore
                  variant="caption"
                  color="error"
                />
                <br />
                <Field
                  as={muiComp.FormControlLabel}
                  control={<muiComp.Checkbox value="agree" color="success" />}
                  label={auth[language].agree}
                  name="agree"
                />
                <ErrorMessage
                  name="agree"
                  component={muiComp.Typography}
                  // @ts-ignore
                  variant="caption"
                  color="error"
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
              </Form>
            </Formik>
          </muiComp.Box>
        </muiComp.Grid>
      </muiComp.Grid>
    </muiComp.ThemeProvider>
  );
}
