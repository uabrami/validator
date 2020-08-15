
//charLimit
export const hasCorrectLimit = (str) => str.length >= 8 && str.length <= 72;

//lowercase
export const hasLowerCase = (str) => {
  return str.toUpperCase() !== str;
};

//notEmail
export const usedEmailAddress = (str, email) => {
  return str === email;
};

//uppercase
export const hasUpperCase = (str) => {
  return str.toLowerCase() !== str;
};

//number
export const hasNumber = (str) => {
  return /\d/.test(str);
};

export const passwordValid = (value, email) => {
  return (
    hasCorrectLimit(value) &&
    hasLowerCase(value) &&
    !usedEmailAddress(value, email) &&
    hasUpperCase(value) &&
    hasNumber(value)
  );
}