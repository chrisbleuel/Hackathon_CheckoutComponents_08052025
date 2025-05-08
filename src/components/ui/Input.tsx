import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, helperText, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <div className="text-[#606A76] text-xs font-normal leading-[22px] tracking-[0.06px]">
            {label}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "text-[#32373E] text-base font-medium tracking-[0.08px] w-full bg-transparent outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="w-full gap-1">
          <div className="bg-[rgba(194,205,214,1)] flex min-h-px w-full" />
        </div>
        {(helperText || error) && (
          <div className="flex w-full gap-2 text-xs font-normal tracking-[0.06px]">
            <div className={cn(
              "flex-1",
              error ? "text-red-500" : "text-[#606A76]"
            )}>
              {error || helperText}
            </div>
            {props.maxLength && (
              <div className="text-[#606A76] text-right">
                {(props.value as string)?.length || 0}/{props.maxLength}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
