"use client";

import { createProfile } from "@/app/create-profile/actions";
import { useRef, useState } from "react";
import { positionList, skillsList } from "@/const";
import { SubmitButton } from "../../../components/ui/submit-button";
import { Input } from "../../../components/ui/input";
import supabaseClient from "@/utils/supabase/client";
import Image from "next/image";
import { Upload } from "lucide-react";
import { Cross } from "../../../components/icons";

export default function CreateProfileForm() {
  const [stack, setSkills] = useState([]);
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const hiddenFileInput = useRef(null);

  const createProfileWithData = createProfile.bind(
    null,
    description,
    stack,
    avatar
  );

  const handleDeleteSkill = (tecnologieName) => {
    let arrayWithoutSkill = stack.filter(
      (element) => element.name != tecnologieName
    );
    setSkills(arrayWithoutSkill);
  };

  const handleAddSkill = (color, name) => {
    // No repeeat
    let isRepeat = stack.some((element) => element.name === name);

    if (stack.length < 4 && isRepeat === false) {
      setSkills([...stack, { name, color }]);
    }
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const uploadFile = async (event) => {
    const file = event.target.files[0];
    const bucket = "images";

    const { data, error } = await supabaseClient.storage
      .from(bucket)
      .upload(file.name, file);

    if (error) {
      alert("Error uploading file.");
      return;
    } else {
      const {
        data: { publicUrl },
      } = supabaseClient.storage.from("images").getPublicUrl(data.path);
      setAvatar(publicUrl);
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="flex gap-5 flex-col">
      <input
        type="file"
        onChange={uploadFile}
        className="hidden"
        ref={hiddenFileInput}
      />
      <div className="flex flex-col items-center font-medium">
        <div
          className="rounded-full p-2 md:p-3 border-[3px] border-border cursor-pointer"
          onClick={handleClick}
        >
          <div className="relative h-20 md:h-24 w-20 md:w-24 overflow-hidden rounded-full border-2 bg-content-primary flex justify-center items-center">
            {avatar ? (
              <Image alt="avatar profile" src={avatar} fill />
            ) : (
              <Upload className="stroke-foreground"></Upload>
            )}
          </div>
        </div>
        <p className="mt-1">Avatar profile</p>
      </div>

      <form action={createProfileWithData} className="flex flex-col gap-5">
        <div>
          <label htmlFor="username" className="text-base font-medium">
            Username
          </label>
          <Input type="text" name="username" required></Input>
        </div>

        <div className="flex flex-col">
          <label htmlFor="username" className="text-base font-medium">
            Position
          </label>
          <select
            name="position"
            defaultValue="Desarrollador Frontend"
            className="cursor-pointer appearance-none h-10 rounded-full bg-content-primary border-2 border-border px-3 py-1 *:bg-content-primary *:border-2"
          >
            {positionList.map((item) => (
              <option key={item} value={item} className="border">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="username" className="text-base font-medium">
            Urls
          </label>
          <Input
            type="url"
            name="github"
            placeholder="https://github.com/yourprofile"
          ></Input>
          <Input
            type="url"
            name="website"
            placeholder="https://portfolio.com"
            className="mt-2"
          ></Input>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="description" className="text-base font-medium">
            Description
          </label>
          <textarea
            onChange={handleChange}
            name="description"
            className="bg-content-primary rounded-3xl border border-border h-44 p-3"
            required
          ></textarea>
        </div>
        <div>
          <div className="flex justify-between">
            <label className="text-base font-medium">Stack</label>
            <p>{stack.length}/4</p>
          </div>
          <div className="flex flex-wrap gap-3 py-2 border-b-2 border-border min-h-14">
            {stack.map((item) => (
              <div key={item.name}>
                <div
                  className="rounded-full px-3 py-1 cursor-pointer flex items-center gap-1"
                  style={{
                    backgroundColor: `${item.color}1A`,
                    color: item.color,
                  }}
                  onClick={() => handleDeleteSkill(item.name)}
                >
                  {item.name}

                  <Cross />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 ">
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
          pendingText="Creating..."
          type="submit"
          className="mt-4 font-medium text-black hover:bg-foreground "
        >
          Create profile
        </SubmitButton>
      </form>
    </div>
  );
}