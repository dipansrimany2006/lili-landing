import { memo } from "react";
import Image from "next/image";
import logoSrc from "/public/lili-logo.svg";

export const Logo = memo(
  (
    props: Omit<
      React.ImgHTMLAttributes<HTMLImageElement>,
      "width" | "height"
    > & { width?: number; height?: number }
  ) => {
    return (
      <div className="w-16 h-16 overflow-hidden">
        <Image
          src={logoSrc}
          alt="Lili Logo"
          width={32}
          height={32}
          {...props}
        />
      </div>
    );
  }
);

Logo.displayName = "Logo";
