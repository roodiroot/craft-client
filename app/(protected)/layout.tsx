import UserButton from "@/components/auth/user-button";
import NavigateMobil from "@/components/datas/navigate-mobil";
import NavigateDesctop from "@/components/datas/navigate-desctop";

const ProtectedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <NavigateDesctop />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <NavigateMobil />
          <UserButton className="ml-auto" />
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
