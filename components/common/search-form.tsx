"use client";

import { useCallback, useState } from "react";
import { Searchsvg } from "../icons";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitButton } from "../ui/submit-button";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setQuery(newSearch);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim()) {
      router.replace("/search?" + createQueryString("q", query.trim()));
    }
  };

  return (
    <form
      className="w-full flex bg-content-primary border border-border rounded-full p-2 px-3 gap-1 items-center"
      onSubmit={handleSubmit}
    >
      <Searchsvg className="stroke-content-secondary flex-shrink-0" />
      <input
        name="q"
        placeholder="search"
        className="flex-1 min-w-0 bg-transparent focus:outline-none focus:ring-0 text-foreground placeholder:text-content-secondary"
        value={query}
        onChange={handleChange}
        maxLength={20}
      ></input>
      <SubmitButton
        disabled={!query}
        className="flex-shrink-0"
        pendingText="Searching"
      >
        search
      </SubmitButton>
    </form>
  );
}
