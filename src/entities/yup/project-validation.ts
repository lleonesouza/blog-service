import * as yup from 'yup';

const userSchema = yup.object({
    firstName: yup
      .string(),
    nickName: yup
      .string()
      .nullable(),
    gender: yup
      .mixed<'male' | 'female' | 'other'>()
      .oneOf(['male', 'female', 'other']),
    email: yup
      .string()
      .nullable()
      .notRequired()
      .email(),
    birthDate: yup
      .date()
      .nullable()
      .notRequired()
      .min(new Date(1900, 0, 1)),
  });


type User = yup.InferType<typeof userSchema>;

export default User