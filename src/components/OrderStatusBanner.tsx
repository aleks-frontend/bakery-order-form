import { useTranslation } from "react-i18next";

const WEBSITE_URL_HU = "https://lisztrapszodia.in.rs/index.html";
const WEBSITE_URL_RS = "https://lisztrapszodia.in.rs/index-rs.html";

interface OrderStatusBannerProps {
  show: boolean;
}

/**
 * Next Saturday from today, formatted for the banner (hu: YYYY.MM.DD., else DD.MM.YYYY.).
 */
function getNextSaturdayDateLabel(isHun: boolean): string {
  const today = new Date();
  const day = today.getDay(); // 0 Sun … 5 Fri … 6 Sat
  const diff = (6 - day + 7) % 7; // days until Saturday (0 if today is Saturday)

  const saturday = new Date(today);
  saturday.setDate(today.getDate() + diff);

  const dd = String(saturday.getDate()).padStart(2, "0");
  const mm = String(saturday.getMonth() + 1).padStart(2, "0");
  const yyyy = saturday.getFullYear();

  if (isHun) {
    return `${yyyy}.${mm}.${dd}.`;
  }
  return `${dd}.${mm}.${yyyy}.`;
}

export function OrderStatusBanner({ show }: OrderStatusBannerProps) {
  const { t, i18n } = useTranslation();
  const isHun = i18n.language === "hu";
  const reopenDate = getNextSaturdayDateLabel(isHun);
  const websiteUrl = i18n.language === "hu" ? WEBSITE_URL_HU : WEBSITE_URL_RS;

  if (!show) return null;

  return (
    <div className="bg-blue-50 border-2 border-blue-500 rounded-xl py-5 px-6 my-6 mx-auto max-w-[720px] text-left text-blue-900 font-light text-base leading-relaxed shadow-md">
      <div>
        {t("New orders will be available from this Saturday, {{date}} 💛", {
          date: reopenDate,
        })}
      </div>
      <div className="mt-3">
        {t("Until then, check out")}{" "}
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 underline font-bold transition-opacity hover:opacity-80"
        >
          {t("our offer and learn about how we prepare our products")}
        </a>
        .
      </div>
    </div>
  );
}
