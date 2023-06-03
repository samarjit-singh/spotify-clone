import { forwardRef } from "react"; //The forwardRef function enables the component to work with the ref prop and be referenced externally if needed.
import { twMerge } from "tailwind-merge";

//  it inherits all the standard HTML button element attributes like onClick, className, type, etc.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={twMerge(
          `w-full 
          rounded-full 
          bg-green-500
          border
          border-transparent
          px-3 
          py-3 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          text-black
          font-bold
          hover:opacity-75
          transition`,
          className
        )}
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
