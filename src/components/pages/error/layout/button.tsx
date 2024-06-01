import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import Link from "next/link";
import { cn } from "@/utils/styling/cn";

export type ErrorPageButtonProps = {
  label: string;
  icon: IconType;
} & (
  | {
      onClick: () => void;
    }
  | {
      href: string;
    }
);

const CLASS_NAME = cn(
  "rounded-7xl font-medium",
  "px-14 py-6 md:px-16 md:py-8",
  "transition-all duration-300",
  "scale-100 active:scale-95",
  "bg-gray-100 hover:bg-gray-200 active:bg-gray-100",
  "dark:bg-gray-900 dark:hover:bg-gray-800 dark:active:bg-gray-900",
  "text-gray-600 dark:text-gray-500",
  "whitespace-nowrap text-lg",
  "flex flex-row",
  "items-center justify-center gap-x-4"
);

export const ErrorPageButton: FunctionComponent<ErrorPageButtonProps> = ({
  label,
  icon: Icon,
  ...props
}) => {
  /**
   * Define the content for the button.
   */
  const content = (
    <>
      <Icon className="h-5 w-5 shrink-0" />
      {label}
    </>
  );

  /**
   * Render as either a button element or a Next.js link depending on the props
   * provided.
   */
  return "onClick" in props ? (
    <button type="button" className={CLASS_NAME} onClick={props.onClick}>
      {content}
    </button>
  ) : (
    <Link className={CLASS_NAME} href={props.href}>
      {content}
    </Link>
  );
};
