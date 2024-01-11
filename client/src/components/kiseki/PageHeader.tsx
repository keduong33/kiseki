import type { ReactNode } from "react";

type PageHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const PageHeader = ({ children, className }: PageHeaderProps) => (
  <h2 className={`${className}`}>{children}</h2>
);
