import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigateProps extends React.HTMLAttributes<HTMLDivElement> {}

const Navigate: React.FC<NavigateProps> = ({ className, ...props }) => {
  return (
    <nav className={cn("font-unbounded", className)} {...props}>
      <ul className="flex gap-10">
        <li>
          <Link href={"/"}>Глaвная</Link>
        </li>
        <li>
          <Link href={"/"}>О нас</Link>
        </li>
        <li>
          <Link href={"/"}>Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
