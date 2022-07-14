const UserValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Nama harus diisi";
  }

  if (!values.image || values.image === "") {
    errors.image = "Umur harus diisi";
  }

  return errors
};

export default UserValidation;
