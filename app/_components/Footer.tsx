import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

function FooterTitle({ title }: { title: string }) {
  return <h5 className="p-4 pt-2 pb-2 font-medium">{title}</h5>;
}

function ContactIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <Button asChild variant="ghost" size="icon" className="hover:bg-white">
      <Link href="/">
        <Icon />
      </Link>
    </Button>
  );
}

function Contact({ title }: { title: string }) {
  return (
    <div className="mt-4">
      <FooterTitle title={title} />

      <div className="p-4 pt-2 pb-2">
        <ContactIcon Icon={Instagram} />
        <ContactIcon Icon={Facebook} />
        <ContactIcon Icon={Twitter} />
        <ContactIcon Icon={Youtube} />
      </div>
    </div>
  );
}

const data = [
  {
    title: "客戶服務",
    list: [
      "聯繫我們",
      "常見問題",
      "訂單和配送",
      "退貨和退款",
      "支付和商品價格",
      "加密貨幣支付",
      "優惠活動條款和條件",
      "法菲爾客戶承諾",
      "節假日配送日期和退貨",
    ],
  },
  {
    title: "關於法菲爾",
    list: [
      "關於我們",
      "投資人",
      "合作夥伴",
      "招聘求職",
      "法菲爾 App",
      "人性化勞動聲明",
    ],
  },
  {
    title: "優惠活動和會員資格",
    list: [
      "聯盟營銷",
      "邀請好友",
      "會員獎勵計劃",
      "UNiDAYS 學生折扣",
      "學生折扣和畢業生折扣",
      "學生和青年折扣",
    ],
  },
  {
    title: "法菲爾可持續服務",
    list: ["至善循環轉售閒置品牌包袋"],
    childtitle: "關注我們",
    Child: Contact,
  },
];

export default function Footer() {
  return (
    <footer className="w-full pt-6 pl-6 pr-6 sm:pl-12 sm:pr-12 flex bg-stone-200">
      <div className="w-full flex flex-wrap justify-around">
        {data.map(({ title, list, childtitle, Child }) => {
          return (
            <div
              className="w-full sm:w-1/2 md:w-1/4 flex flex-col mb-6"
              key={title}
            >
              <FooterTitle title={title} />

              {list.map((name) => {
                return (
                  <Button
                    asChild
                    variant="link"
                    className="text-base justify-start font-light"
                    key={name}
                  >
                    <Link href="/">{name}</Link>
                  </Button>
                );
              })}

              {Child ? <Child title={childtitle} /> : null}
            </div>
          );
        })}
      </div>
    </footer>
  );
}
