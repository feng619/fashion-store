import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NewsLetter() {
  return (
    <div className="w-full flex justify-center text-center pl-5 pr-5 mt-12 mb-12">
      <div>
        <h3 className="mb-4 text-2xl font-medium">暢購享禮遇</h3>

        <div>
          <p>成為法菲爾服飾的會員，解鎖免運費、折價卷等多項福利</p>
          <p>買越多，賺越多！</p>
        </div>

        <Button asChild className="mt-4">
          <Link href="/">建立帳號</Link>
        </Button>
      </div>
    </div>
  );
}
