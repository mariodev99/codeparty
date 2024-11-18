// "use client";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { UserPostData } from "@/modules/post/types";
// import { ReactNode, SetStateAction, useEffect, useState } from "react";
// import FormComment from "./form-comment";
// import supabaseClient from "@/utils/supabase/client";

// export default function CommentDialog({
//   children,
//   postId,
//   currentUserId,
//   setOpen,
//   open,
// }: {
//   children: ReactNode;
//   postId: string;
//   currentUserId: string;
//   setOpen: any;
//   open: boolean;
// }) {
//   const [profile, setProfile] = useState();

//   useEffect(() => {
//     async function getProfileData() {
//       const { data } = await supabaseClient
//         .from("profiles")
//         .select("avatar, username, position")
//         .eq("id", currentUserId)
//         .single();
//       console.log(data);

//       if (data) {
//         setProfile(data);
//       }
//     }

//     getProfileData();
//   }, []);

//   const handleOpenModal = (event: React.MouseEvent) => {
//     event.preventDefault(); // Evita la redirección al abrir el modal
//     setOpen(true); // Abre el modal
//   };

//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   const handleClickOutside = (event: React.MouseEvent | React.TouchEvent) => {
//     event.stopPropagation(); // Evita la propagación del clic para que no redirija
//     if (open) {
//       setOpen(false); // Cierra el modal si se hace clic fuera
//     }
//   };

//   return (
//     <Sheet
//       open={open}
//       onOpenChange={(isOpen) => {
//         if (!isOpen) {
//           handleCloseModal(); // Cierra el modal sin redirigir
//         }
//       }}
//     >
//       <SheetTrigger onClick={handleOpenModal}>{children}</SheetTrigger>
//       <SheetContent
//         side={"bottom"}
//         className=" rounded-t-2xl md:rounded-t-3xl p-0  pt-2 border-none"
//         onOpenAutoFocus={(e) => e.preventDefault()}
//         onInteractOutside={(e) => {
//           e.stopPropagation();

//           e.preventDefault();
//           setOpen(false);
//         }}
//         // Maneja el clic fuera del modal
//       >
//         <SheetHeader className="flex justify-center border-b border-border">
//           <SheetTitle className="hidden">Comment post</SheetTitle>
//           <div className=" flex items-center flex-col w-full py-2 text-lg font-medium">
//             <div className="h-2 rounded-full w-14 bg-content-secondary mb-3"></div>
//             <div>Comment a post</div>
//           </div>
//         </SheetHeader>
//         <div className="overflow-y-scroll h-[250px] p-4">
//           {profile && <FormComment postId={postId} userProfile={profile} />}
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }
