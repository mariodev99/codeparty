"use client";

import SearchForm from "@/components/common/search-form";
import SearchProfiles from "@/modules/profile/components/search-profiles";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();
  const query = params.get("q");
  return (
    <div className="w-full py-4">
      <SearchForm />
      {query && <SearchProfiles query={query} />}
    </div>
  );
}
