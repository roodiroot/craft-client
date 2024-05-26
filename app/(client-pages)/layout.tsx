import Header from "@/components/sections/header/header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-primary-text">
      <Header />
      {children}
      <div className="font-unbounded">Footer</div>
    </div>
  );
}
