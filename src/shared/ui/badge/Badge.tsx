import S from "./Badge.module.scss";
import cn from "classnames";

type BadgeProps = {
  tone: "blue" | "teal" | "red" | "gold" | "green";
  children: React.ReactNode;
  className?: string;
};

export const Badge = ({ tone, children, className }: BadgeProps) => {
  return (
    <div className={cn(S["badge"], S[`badge_${tone}`], className)}>
      {children}
    </div>
  );
};
