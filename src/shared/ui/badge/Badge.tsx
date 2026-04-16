import S from "./Badge.module.scss";
import cn from "classnames";

type BadgeProps = {
  variant: "blue" | "teal";
  children: React.ReactNode;
  className?: string;
};

export const Badge = ({ variant, children, className }: BadgeProps) => {
  return (
    <div className={cn(S["badge"], S[`badge_${variant}`], className)}>
      {children}
    </div>
  );
};
