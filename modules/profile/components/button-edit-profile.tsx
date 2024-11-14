"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Edit, RotateCcw, Upload } from "lucide-react";
import { positionList, skillsList } from "@/const";
import { useRef, useState } from "react";
import { Profile, Skill } from "@/modules/profile/types";
import { Input } from "@/components/ui/input";
import { Cross } from "@/components/icons";
import { SubmitButton } from "@/components/ui/submit-button";
import supabaseClient from "@/utils/supabase/client";
import { updateProfile } from "../actions";
import Image from "next/image";

export default function ButtonEditProfile({
  existingData,
}: {
  existingData: Profile;
}) {
  const [currentStack, setCurrentStack] = useState<Skill[]>(existingData.stack);
  const [avatar, setAvatar] = useState(existingData.avatar);
  const [formData, setFormData] = useState({
    // stack: existingData.stack,
    description: existingData.description,
    username: existingData.username,
    position: existingData.position,
    avatar: existingData.avatar,
    github: existingData.github,
    website: existingData.website,
  });

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const bucket = "images";

    if (file) {
      const { data, error } = await supabaseClient.storage
        .from(bucket)
        .upload(file.name, file);

      if (error || !data) {
        alert("Error uploading file.");
        return;
      }

      const {
        data: { publicUrl },
      } = supabaseClient.storage.from(bucket).getPublicUrl(data.path);
      setAvatar(publicUrl);
    }
  };

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleDeleteSkill = (tecnologieName: string) => {
    const arrayWithoutSkill = currentStack.filter(
      (element) => element.name !== tecnologieName
    );
    setCurrentStack(arrayWithoutSkill);
  };

  const handleAddSkill = (color: string, name: string) => {
    const isRepeat = currentStack.some((element) => element.name === name);
    if (currentStack.length < 4 && !isRepeat) {
      setCurrentStack([...currentStack, { name, color }]);
    }
  };

  const UpdateProfileWithData = updateProfile.bind(null, currentStack, avatar);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="cursor-pointer p-1 border border-border rounded-full bg-background">
          <Edit className="stroke-foreground w-6 h-6" />
        </div>
      </SheetTrigger>
      {/* <SheetTitle>Edit profile</SheetTitle> */}
      <SheetContent
        side={"bottom"}
        className=" rounded-t-2xl md:rounded-t-3xl p-0  pt-2 border-none"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="flex justify-center border-b border-border">
          <SheetTitle className="hidden">Edit profile</SheetTitle>
          <div className=" flex items-center flex-col w-full py-2 text-lg font-medium">
            <div className="h-2 rounded-full w-14 bg-content-secondary mb-3"></div>
            <div>Edit profile</div>
          </div>
        </SheetHeader>
        <div className="overflow-y-scroll h-[450px] p-4 ">
          <input
            type="file"
            onChange={uploadFile}
            className="hidden"
            ref={hiddenFileInput}
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center font-medium">
              <div
                className="rounded-full p-2 md:p-3 border-[3px] border-border cursor-pointer"
                onClick={handleClick}
              >
                <div className="relative h-20 md:h-24 w-20 md:w-24 overflow-hidden rounded-full border-2 bg-content-primary flex justify-center items-center">
                  {avatar ? (
                    <div className="relative w-full h-full flex justify-center items-center group ">
                      <Image
                        alt="avatar profile"
                        src={avatar}
                        fill
                        objectFit="cover"
                        className="group-hover:hidden "
                      />
                      <div className="hidden group-hover:block ">
                        <RotateCcw />
                      </div>
                    </div>
                  ) : (
                    <Upload className="stroke-foreground" />
                  )}
                </div>
              </div>
              <p className="mt-1">Avatar profile</p>
            </div>
            <form
              action={UpdateProfileWithData}
              className="flex flex-col gap-5 max-w-[700px]"
            >
              <div>
                <label htmlFor="username" className="text-base font-medium">
                  Username
                </label>
                <Input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="position" className="text-base font-medium">
                  Position
                </label>
                <select
                  name="position"
                  defaultValue={formData.position}
                  className="cursor-pointer appearance-none h-10 rounded-full bg-content-primary border-2 border-border px-3 py-1"
                >
                  {positionList.map((item) => (
                    <option key={item} value={item} className="border">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="urls" className="text-base font-medium">
                  Urls
                </label>
                <Input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/yourprofile"
                />
                <Input
                  type="url"
                  name="website"
                  onChange={handleChange}
                  value={formData.website}
                  placeholder="https://portfolio.com"
                  className="mt-2"
                />
              </div>

              <div className="flex flex-col ">
                <label htmlFor="description" className="text-base font-medium">
                  Description
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.description}
                  name="description"
                  className="bg-content-primary rounded-3xl border border-border h-44 p-3"
                  required
                ></textarea>
              </div>

              <div>
                <div className="flex justify-between">
                  <label className="text-base font-medium">Stack</label>
                  <p>{currentStack.length}/4</p>
                </div>
                <div className="flex flex-wrap gap-3 py-2 border-b-2 border-border min-h-14">
                  {currentStack.map(({ name, color }) => (
                    <div key={name}>
                      <div
                        className="rounded-full px-3 py-1 cursor-pointer flex items-center gap-1"
                        style={{ backgroundColor: `${color}1A`, color: color }}
                        onClick={() => handleDeleteSkill(name)}
                      >
                        {name}
                        <Cross />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 ">
                {skillsList.map((item) => (
                  <div key={item.name}>
                    <div
                      className="rounded-full px-3 py-1 cursor-pointer"
                      style={{
                        backgroundColor: `${item.color}1A`,
                        color: item.color,
                      }}
                      onClick={() => handleAddSkill(item.color, item.name)}
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>

              <SubmitButton
                pendingText="Updating profile..."
                type="submit"
                className="mt-4 font-medium text-black hover:bg-foreground"
              >
                Update
              </SubmitButton>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
