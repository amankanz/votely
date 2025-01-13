// import { storage } from "./firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// export const uploadImage = async (
//   file: File,
//   path: string
// ): Promise<string> => {
//   const storageRef = ref(storage, path);
//   const uploadTask = uploadBytesResumable(storageRef, file);

//   return new Promise((resolve, reject) => {
//     uploadTask.on(
//       "state_changed",
//       null,
//       (error) => reject(error),
//       async () => {
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//         resolve(downloadURL);
//       }
//     );
//   });
// };
