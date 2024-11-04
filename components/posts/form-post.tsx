"use client";

import { SetStateAction, useRef, useState } from "react";
import { SubmitButton } from "../ui/submit-button";
import { createPost } from "@/features/posts/actions";
import supabaseClient from "@/utils/supabase/client";
import Image from "next/image";
import { RotateCcw, Upload } from "lucide-react";
import { Photo } from "../icons";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross } from "../icons";

export default function FormPost() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const hiddenFileInput = useRef(null);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setContent(e.target.value);
  };

  let user = {
    username: "mariodev",
    avatar:
      "https://fwrawrtdsrrumgarhmds.supabase.co/storage/v1/object/public/images/Group%2020.jpg",
    position: "front",
  };

  const createPostWithData = createPost.bind(null, user, image, content);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const uploadFile = async (event) => {
    const file = event.target.files[0];
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
                  className="relative -top-2 left-12 h-5 w-5 bg-red-500 rounded-full cursor-pointer"
                  onClick={deleteImage}
                ></div>

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
                    <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                      <div className="relative w-96 h-96">
                        <Image
                          alt="content"
                          src={image}
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <Dialog.Close asChild>
                        <button className="bg-red-400 p-3 rounded-full border-none">
                          <Cross />
                        </button>
                      </Dialog.Close>
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
