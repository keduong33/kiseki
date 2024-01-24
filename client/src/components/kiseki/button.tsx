import { Loader2 } from "lucide-react";
import React from "react";
import { Button, type ButtonProps } from "../shadcn/ui/button";

interface KisekiButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const KisekiButton = React.forwardRef<HTMLButtonElement, KisekiButtonProps>(
  ({ children, isLoading, className, ...props }, ref) => {
    return (
      <Button ref={ref} className={`${className} text-base`} {...props}>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && children}
      </Button>
    );
  }
);

export default KisekiButton;
