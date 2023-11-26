import HelpBar from "./_components/HelpBar";
import MainCategories from "./_components/MainCategories";
import NewsLetter from "./_components/NewsLetter";

export default function Home() {
  return (
    <main className="max-w-7xl w-full min-h-screen">
      <MainCategories />
      <HelpBar />
      <NewsLetter />
    </main>
  );
}
