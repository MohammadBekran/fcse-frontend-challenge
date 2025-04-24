import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

interface ILogoProps {
  white?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  showText?: boolean;
}

const Logo = ({
  white = false,
  width = 100,
  height = 79,
  fontSize,
  showText = true,
}: ILogoProps) => {
  const { t } = useTranslation();

  const logoUrl = white ? "/white-logo.svg" : "/logo.svg";

  return (
    <div
      className={cn(
        "flex items-center gap-x-2  font-bold",
        white ? "text-white" : "text-brand",
        !fontSize && "text-4xl"
      )}
      style={{ fontSize }}
    >
      <img src={logoUrl} alt="Logo" width={width} height={height} />
      {showText && t("logoText")}
    </div>
  );
};

export default Logo;
