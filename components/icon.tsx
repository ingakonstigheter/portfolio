import { type LucideProps } from "lucide-react";
import { User, BriefcaseBusiness, Home, Menu } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const icons = {
  user: User,
  briefcaseBusiness: BriefcaseBusiness,
  home: Home,
  menu: Menu
}

const Icon = ({ name, color, size, className, ...props }: IconProps) => {
  const LucideIcon = (icons[name]);
  if (!LucideIcon) return null;
  return (
    <LucideIcon
      className={ className}
      color={color}
      size={size}
      {...props}
    />
  );
};

export default Icon;