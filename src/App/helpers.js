/**
 * hasCorrectLimit
 * @description checks the char limit of the password
 */
export const hasCorrectLimit = (str) => str.length >= 8 && str.length <= 72;

/**
 * hasLowerCase
 * @description checks if the password has a lowercase char
 */
export const hasLowerCase = (str) => {
  return str.toUpperCase() !== str;
};

/**
 * hasNumber
 * @description check if the password has a number
 */
export const hasNumber = (str) => {
  return /\d/.test(str);
};

/**
 * hasUpperCase
 * @description check if the password has an uppercase char
 */
export const hasUpperCase = (str) => {
  return str.toLowerCase() !== str;
};

/**
 * isCompleteMessage
 * @description check if a requirement has been met
 */
export const isCompleteMessage = (value, user, messages, setMessages) => {
  const newMessages = [...messages];
  newMessages[0].isCompleted = hasCorrectLimit(value) ? true : false;
  newMessages[1].isCompleted = hasLowerCase(value) ? true : false;
  newMessages[2].isCompleted =
    !usedEmailAddress(value, user) && value.length ? true : false;
  newMessages[3].isCompleted = hasUpperCase(value) ? true : false;
  newMessages[4].isCompleted = hasNumber(value) ? true : false;
  setMessages(newMessages);
};

/**
 * isPasswordValid
 * @description checks if the password meets all the requirements and is valid
 */

export const isPasswordValid = (value, user) => {
  return (
    hasCorrectLimit(value) &&
    hasLowerCase(value) &&
    !usedEmailAddress(value, user) &&
    hasUpperCase(value) &&
    hasNumber(value)
  );
};

/**
 * usedEmailAddress
 * @description check if the password does not include the email username
 */
export const usedEmailAddress = (str, user) => {
  const emailFragment = user.substring(
    user.indexOf("email: "),
    user.indexOf("@")
  );
  const username = emailFragment.substring(8);
  return str.includes(username);
};
