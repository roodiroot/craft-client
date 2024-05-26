import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";

const ButtonsGroup = () => {
  return (
    <div className="h-full flex gap-4 items-end">
      <LoginButton>
        <Button
          size="castomIcon"
          className="bg-white text-accent hover:bg-accent/5"
        >
          <User className="h-4 w-4" />
        </Button>
      </LoginButton>
      <div className="h-[18px] w-[1px] bg-[#26361D]/20 mb-2"></div>
      <Button
        size="castom"
        variant="castom"
        className="hidden sm:inline-flex hover:bg-accent/5"
      >
        Связаться
      </Button>
      <Button
        size="castomIcon"
        className="bg-white text-accent hover:bg-accent/5 sm:hidden"
      >
        <Menu className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ButtonsGroup;
