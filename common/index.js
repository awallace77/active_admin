const Yup = require("yup");
/* Schema */
const formSchema = Yup.object({
  email: Yup.string()
    .required('Email required')
    .min(6, 'Email too short')
    .max(28, 'Email too long'),
  
  password: Yup.string()
    .required('Password required')
    .min(6, 'Password too short')
    .max(28, 'Passowrd too long')
});

module.exports = {formSchema}