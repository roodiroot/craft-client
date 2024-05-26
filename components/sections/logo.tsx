import Link from "next/link";
import { Icons } from "../icons";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <Link href={"/"} className={className} {...props}>
      <Icons.logo className="w-28" />
    </Link>
  );
};

export default Logo;
