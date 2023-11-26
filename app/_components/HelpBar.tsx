import { Shirt, HelpCircle, MessageSquare, LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function HelperCard({
  Icon,
  title,
  desc,
}: {
  Icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <Link href="/" className="box-border block w-full sm:w-4/12 p-2">
      <Card className="hover:bg-stone-100 duration-300">
        <CardHeader className="pt-6 pb-3">
          <Icon />
        </CardHeader>

        <CardContent>
          <CardTitle className="font-medium text-lg">{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function HelpBar() {
  return (
    <div className="w-full flex flex-col sm:flex-row pl-5 pr-5 mt-12 mb-12">
      <HelperCard Icon={Shirt} title="如何購物" desc="新手必備購物指南" />
      <HelperCard
        Icon={HelpCircle}
        title="常見問題"
        desc="這裡或許有您要的答案"
      />
      <HelperCard
        Icon={MessageSquare}
        title="尋求幫助"
        desc="敬請聯繫我們的客服團隊"
      />
    </div>
  );
}
