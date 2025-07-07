// Reusable Section wrapper with theme-based background
import React from "react";
import clsx from "clsx";
import { useTheme } from "@/hooks/useTheme";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Section component for consistent section styling
const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const { theme } = useTheme();
  return (
    <section
      id={id}
      className={clsx(
        theme === "dark" ? "bg-dark-default" : "bg-light-default",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section; 