import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function NavBar() {
  return (
    <div className="w-full pr-6 sm:pr-12 pb-5 flex flex-row-reverse">
      <div className="relative">
        <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
        <Input type="text" placeholder="Search" className="pl-12 pr-4" />
      </div>
    </div>
  );
}
