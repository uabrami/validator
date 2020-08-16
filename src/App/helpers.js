
//charLimit
export const hasCorrectLimit = (str) => str.length >= 8 && str.length <= 72;

//lowercase
export const hasLowerCase = (str) => {
  return str.toUpperCase() !== str;
};

//notEmail
export const usedEmailAddress = (str, user) => {
  const emailFragment = user.substring(user.indexOf("email: "), user.indexOf("@"))
const username = emailFragment.substring(8);
  return str.includes(username);
};

//uppercase
export const hasUpperCase = (str) => {
  return str.toLowerCase() !== str;
};

//number
export const hasNumber = (str) => {
  return /\d/.test(str);
};

export const isPasswordValid = (value, user) => {
  return (
    hasCorrectLimit(value) &&
    hasLowerCase(value) &&
    !usedEmailAddress(value, user) &&
    hasUpperCase(value) &&
    hasNumber(value)
  );
}

export const isCompleteMessage = (value, user, messages, setMessages) => {
  const newMessages = [...messages];
  newMessages[0].isCompleted = hasCorrectLimit(value) ? true : false;
  newMessages[1].isCompleted = hasLowerCase(value) ? true : false;
  newMessages[2].isCompleted = !usedEmailAddress(value, user) && value.length ? true : false;
  newMessages[3].isCompleted = hasUpperCase(value) ? true : false;
  newMessages[4].isCompleted = hasNumber(value) ? true : false;
  setMessages(newMessages);
};