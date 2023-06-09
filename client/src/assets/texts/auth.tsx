let auth = {
  ka: {
    signIn: "შესვლა",
    signUp: "რეგისტრაცია",
    resetPassword: "პაროლის განახლება",
    email: "მეილი",
    password: "პაროლი",
    create: "რეგისტრაცია",
    name: "სახელი",
    lname: "გვარი",
    adress: "საცხოვრებელი ადგილი",
    agree: "ვეთანხმები წესებს და პირობებს",
    gender: ["ქალი", "კაცი"],
    regionPlaceholder: "აირჩიეთ რეგიონი",
    formEroors: {
      name: "შეავსეთ სახელი ველი",
      lname: "შეავსეთ გვარი ველი",
      emailReq: "შეავსეთ მეილი ველი",
      emailVal: "შეიყვანეთ ვალიდური მეილი",
      password: "შეავსეთ პაროლის ველი",
      passwordVal:
        "პაროლი უნდა შედგებოდეს 8 სიმბოლოსგან, ერთი მაღალი რეგისტრის სიმბოლოსგან, ერთი დაბალი რეგისტრის სიმბოლოსგან, ციფრისგან, და სპეციალური სიმბოლოსგან (!@#... )",
      agree: "გთხოვთ დაეთანხმოთ პირობებს",
      gender: "მონიშნეთ სქესი",
    },

    regions: [
      "თბილისი",
      "აჭარის ა/რ",
      "გურია",
      "იმერეთი",
      "კახეთი",
      "მცხეთა-მთიანეთი",
      "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
      "სამეგრელო-ზემო სვანეთი",
      "სამცხე-ჯავახეთი",
      "ქვემო ქართლი",
      "შიდა ქართლი",
      "ცხინვალის რეგიონი",
      "აფხაზეთის ა.რ.",
    ],
  },
  en: {
    signIn: "Sign in",
    button: "Sign Up",
    resetPassword: "Reset Password",
    email: "Email Address",
    password: "Password",
    create: "Don't have an account? Sign Up",
    name: "Name",
    lname: "Last Name",
    adress: "Address",
    agree: "I agree to the terms and conditions",
    gender: ["Female", "Male"],
    regionPlaceholder: "Select a region",
    regions: [
      "Tbilisi",
      "Adjara A/R",
      "Guria",
      "Imereti",
      "Kakheti",
      "Mtsketa-Mtianeti",
      "Racha-Lechkhumi and Kvemo Svaneti",
      "Samegrelo-Zemo Svaneti",
      "Samtskhe-Javakheti",
      "Kvemo Kartli",
      "Shida Kartli",
      "Tskhinvali region",
      "A.R. of Abkhazia",
    ],
    formEroors: {
      name: "Name is required",
      lname: "Last Name is required",
      emailReq: "Email is required",
      emailVal: "Invalid email",
      password: "Password is required",
      passwordVal:
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
      agree: "You must agree to the terms",
      gender: "Gender is required",
    },
  },
};

export { auth };
