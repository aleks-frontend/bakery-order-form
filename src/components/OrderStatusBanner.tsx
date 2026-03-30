import { useTranslation } from "react-i18next";

const WEBSITE_URL_HU = "https://lisztrapszodia.in.rs/index.html";
const WEBSITE_URL_RS = "https://lisztrapszodia.in.rs/index-rs.html";

interface OrderStatusBannerProps {
  show: boolean;
}

/** Set to false after Easter 2026 / fixed reopen date — banner date then uses `getNextFridayDateLabel` again. */
const USE_FIXED_EASTER_2026_REOPEN_DATE = true;

/**
 * Next Friday from today, formatted for the banner (hu: YYYY.MM.DD., else DD.MM.YYYY.).
 * Kept in use via flag above; do not delete while TEMP Easter messaging is active.
 */
function getNextFridayDateLabel(isHun: boolean): string {
  const today = new Date();
  const day = today.getDay(); // 0 Sun … 5 Fri … 6 Sat
  const diff = (5 - day + 7) % 7; // days until Friday (0 if today is Friday)

  const friday = new Date(today);
  friday.setDate(today.getDate() + diff);

  const dd = String(friday.getDate()).padStart(2, "0");
  const mm = String(friday.getMonth() + 1).padStart(2, "0");
  const yyyy = friday.getFullYear();

  if (isHun) {
    return `${yyyy}.${mm}.${dd}.`;
  }
  return `${dd}.${mm}.${yyyy}.`;
}

/** TEMP (Easter 2026): fixed reopen Saturday 11 Apr — remove when `USE_FIXED_EASTER_2026_REOPEN_DATE` is false. */
function getTempEasterReopenDateLabel(lang: string): string {
  if (lang === "hu") return "2026. április 11., szombat";
  if (lang === "en") return "Saturday, 11 April 2026";
  return "subote, 11.04.2026-e";
}

export function OrderStatusBanner({ show }: OrderStatusBannerProps) {
  const { t, i18n } = useTranslation();
  const isHun = i18n.language === "hu";
  const reopenDate = USE_FIXED_EASTER_2026_REOPEN_DATE
    ? getTempEasterReopenDateLabel(i18n.language)
    : getNextFridayDateLabel(isHun);
  const websiteUrl = i18n.language === "hu" ? WEBSITE_URL_HU : WEBSITE_URL_RS;

  if (!show) return null;

  return (
    <div className="bg-blue-50 border-2 border-blue-500 rounded-xl py-5 px-6 my-6 mx-auto max-w-[720px] text-left text-blue-900 font-light text-base leading-relaxed shadow-md">
      <div>
        {t("Due to the Easter holidays we will not be taking orders until {{date}}.", {
          date: reopenDate,
        })}
        <br />
        {t("Happy Easter — see you soon! 🐣")}
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
