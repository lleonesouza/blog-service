import * as yup from "yup";

const userSchema = yup.object({
  email: yup
    .string()
    .nullable()
    .notRequired()
    .email(),
  id: yup.string(),
  username: yup.string().nullable(),
  url: yup.string(),
  repos_url: yup.string(),
  html_url: yup.string(),
  created_at: yup
    .date()
    .nullable()
    .notRequired()
    .min(new Date(1900, 0, 1))
});

type User = yup.InferType<typeof userSchema>;

export default User;
