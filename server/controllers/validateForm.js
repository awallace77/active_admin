// const Yup = require("yup");
// /* Schema */
// const formSchema = Yup.object({
//   email: Yup.string()
//     .required('Email required')
//     .min(6, 'Email too short')
//     .max(28, 'Email too long'),
  
//   password: Yup.string()
//     .required('Password required')
//     .min(6, 'Password too short')
//     .max(28, 'Passowrd too long')
// });

const {formSchema} = require('@active/common');

const validateForm = (req, res) => {
  const formData = req.body;
  formSchema.validate(formData).catch(err => {
    res.status(422).send();
    console.log(err.errors);
  }).then(valid => {
    if(valid){
      res.status(200).send();
      console.log(`Form for login is good`);
    }
  });
}

module.exports = validateForm;