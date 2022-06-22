export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Пожалуйста заполните это поле",
});

export const fieldLengthValidation = (val) => ({
  hasPassed: /^.{24}$/.test(val),
  message: "id сайта должен содержать 24 символа",
});
