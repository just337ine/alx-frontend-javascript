import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handlProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const resolve = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return resolve.map((i) => ({
    status: i.status,
    value: i.status === 'fulfilled' ? i.value : String(i.reason),
  }));
}
