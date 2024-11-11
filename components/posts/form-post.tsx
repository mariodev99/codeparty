"use client";

import { SetStateAction, useEffect, useRef, useState } from "react";
import { SubmitButton } from "../ui/submit-button";
import supabaseClient from "@/utils/supabase/client";
import Image from "next/image";
import { Crosshair, CrossIcon, Upload, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Profile } from "@/modules/profile/types";
import { createPost } from "@/modules/post/actions";

export default function FormPost({ profile }: { profile: Profile }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setContent(e.target.value);
  };

  let user = {
    username: profile.username,
    avatar: profile.avatar,
    position: profile.position,
  };

  const createPostWithData = createPost.bind(null, user, image, content);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const bucket = "images";

    if (file) {
      const { data, error } = await supabaseClient.storage
        .from(bucket)
        .upload(file.name, file);
      if (error) {
        alert(error);
        console.log(error);

        return;
      } else {
        const {
          data: { publicUrl },
        } = supabaseClient.storage.from("images").getPublicUrl(data.path);
        setImage(publicUrl);
      }
    }
  };

  const deleteImage = () => {
    setImage("");
  };

  return (
    <>
      <form action={createPostWithData} className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full">
          <textarea
            onChange={handleChange}
            name="content"
            className="bg-content-primary rounded-3xl border-2 border-border h-44 p-3 w-full"
            required
            maxLength={200}
          ></textarea>
        </div>

        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-2">
            <input
              type="file"
              onChange={uploadFile}
              className="hidden"
              ref={hiddenFileInput}
            />

            <div onClick={handleClick} className="cursor-pointer">
              {!image && <Upload className="stroke-foreground"></Upload>}
            </div>
            {image && (
              <div className="h-14 w-14 rounded-lg relative ">
                <div
                  className="z-10 relative -top-2 left-12 w-6 h-6 flex justify-center items-center bg-red-500 rounded-full cursor-pointer"
                  onClick={deleteImage}
                >
                  <X size={21} />
                </div>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Image
                      alt="content"
                      src={image}
                      fill
                      objectFit="cover"
                      className="rounded-lg cursor-pointer"
                    />
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 data-[state=open]:animate-overlayShow bg-black/30 backdrop-blur-lg	" />
                    <Dialog.Title>Imagen</Dialog.Title>
                    <Dialog.Content className="z-20 fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                      <Dialog.Close
                        asChild
                        className="flex justify-center w-full mb-1"
                      >
                        <div>
                          <button className="bg-red-500 p-2 rounded-full border-none">
                            <X />
                          </button>
                        </div>
                      </Dialog.Close>
                      <div className="relative w-full h-96">
                        <Image
                          alt="content"
                          src={image}
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            )}
          </div>
          <div className="flex gap-4 items-center text-sm ">
            <div className="text-content-secondary">{content.length}/200</div>
            <SubmitButton
              pendingText="Creating..."
              type="submit"
              className="font-medium text-black hover:bg-foreground "
            >
              Create post
            </SubmitButton>
          </div>
        </div>
      </form>
    </>
  );
}
