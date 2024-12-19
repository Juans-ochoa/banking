"use server";

const signIn = async ({ email, password }: signInProps) => {
  try {
    console.log("User");
  } catch (error) {
    console.error("Error: ", error);
  }
};

const signUp = async ({ password, ...userData }: SignUpParams) => {
  try {
    console.log(userData, password);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export { signIn, signUp };
