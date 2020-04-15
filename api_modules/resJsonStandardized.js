const resJson = (formName, isSuccessful, message, errors) => {
  return {
    formName,
    isSuccessful,
    message,
    errors,
  };
};
module.exports = resJson;
