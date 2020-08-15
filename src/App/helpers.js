
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

export const isPasswordValid = (value, email) => {
  return (
    hasCorrectLimit(value) &&
    hasLowerCase(value) &&
    !usedEmailAddress(value, email) &&
    hasUpperCase(value) &&
    hasNumber(value)
  );
}

export const isCompleteMessage = (value, email, messages, setMessages) => {
  const newMessages = [...messages];
  newMessages[0].isCompleted = hasCorrectLimit(value) ? true : false;
  newMessages[1].isCompleted = hasLowerCase(value) ? true : false;
  newMessages[2].isCompleted = !usedEmailAddress(value, email) && value.length ? true : false;
  newMessages[3].isCompleted = hasUpperCase(value) ? true : false;
  newMessages[4].isCompleted = hasNumber(value) ? true : false;
  setMessages(newMessages);
};