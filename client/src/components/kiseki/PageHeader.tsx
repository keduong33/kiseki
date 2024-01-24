import type { ReactNode } from "react";

type PageHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const PageHeader = ({ children, className }: PageHeaderProps) => (
  <h1 className={className}>{children}</h1>
);
