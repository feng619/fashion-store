import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function TopBanner() {
  return (
    <div className="w-full flex sm:justify-center bg-stone-200">
      <div className="flex flex-row items-center ml-6 sm:ml-0">
        <p className="text-sm">新進商品｜</p>

        <Button asChild variant="link" className="h-8 p-0">
          <Link href="/">本週新品陸續上架</Link>
        </Button>
      </div>
    </div>
  );
}
