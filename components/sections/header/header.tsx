import Logo from "@/components/sections/logo";
import Container from "@/components/container";
import Navigate from "@/components/sections/header/navigate";
import ButtonsGroup from "@/components/sections/header/actions";

const Header = () => {
  return (
    <div className="h-12 bg-primary">
      <Container className="h-full py-1 flex justify-between items-center">
        <div className="h-full flex gap-11">
          <Logo className="self-center" />
          <Navigate className="hidden md:inline-flex md:self-end " />
        </div>
        <ButtonsGroup />
      </Container>
    </div>
  );
};

export default Header;
