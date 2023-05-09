export const isEmail = (email: string): boolean => {
  // regular expression for email validation
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // check if email matches the regular expression
  return regex.test(email);
};

export const isPasswordValid = (password: string): boolean => {
  // check if password contains at least 8 characters, at most 50 characters, and at least one number
  const regex = /^(?=.*\d).{8,50}$/;
  return regex.test(password);
};
