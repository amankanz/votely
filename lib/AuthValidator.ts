export const AuthValidator = {
  isValidEmail: (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  isValidPassword: (password: string): boolean => {
    return password.length >= 6;
  },
};
