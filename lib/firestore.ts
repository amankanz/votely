// import { firestore } from "./firebase";
// import {
//   collection,
//   addDoc,
//   doc,
//   updateDoc,
//   getDocs,
// } from "firebase/firestore";

// // Define the type for gallery images
// interface GalleryImage {
//   id: string;
//   imageUrl: string;
//   createdAt: Date;
// }

// // Define the type for updating business info
// interface BusinessInfoUpdate {
//   [key: string]: any; // Allow additional keys
//   name?: string;
//   description?: string;
//   address?: string;
//   contactNumber?: string;
// }

// // Add gallery image
// export const addGalleryImage = async (
//   businessId: string,
//   imageUrl: string
// ): Promise<string> => {
//   const galleryRef = collection(
//     firestore,
//     "businessUsers",
//     businessId,
//     "gallery"
//   );
//   const result = await addDoc(galleryRef, { imageUrl, createdAt: new Date() });
//   return result.id;
// };

// // Retrieve gallery images
// export const getGalleryImages = async (
//   businessId: string
// ): Promise<GalleryImage[]> => {
//   const galleryRef = collection(
//     firestore,
//     "businessUsers",
//     businessId,
//     "gallery"
//   );
//   const snapshot = await getDocs(galleryRef);

//   // Map docs while ensuring no duplicate 'id' key
//   return snapshot.docs.map((doc) => {
//     const data = doc.data() as Omit<GalleryImage, "id">; // Exclude 'id' from data
//     return {
//       id: doc.id,
//       ...data,
//     };
//   });
// };

// // Update business information
// export const updateBusinessInfo = async (
//   businessId: string,
//   data: BusinessInfoUpdate
// ): Promise<void> => {
//   const businessDocRef = doc(firestore, "businessUsers", businessId);
//   await updateDoc(businessDocRef, data as Record<string, any>);
// };
