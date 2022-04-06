import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const a = uploadPhoto();
  const b = createUser();

  return Promise.all([a, b]).then(
    (payload) => console.log(`${payload[0].body} ${payload[1].firstName} ${payload[1].lastName}`),
    () => console.log('Signup system offline'),
  );
}
