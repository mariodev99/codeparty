import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross } from "../icons";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="h-10 w-10 bg-red-500"></div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 data-[state=open]:animate-overlayShow bg-black/30 backdrop-blur-lg	" />
      <Dialog.Title>hola</Dialog.Title>
      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-500 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-red-400 p-3 rounded-full border-none">
              <Cross />
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
