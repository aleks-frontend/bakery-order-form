import { useTranslation } from "react-i18next";

const WEBSITE_URL_HU = "https://lisztrapszodia.in.rs/index.html";
const WEBSITE_URL_RS = "https://lisztrapszodia.in.rs/index-rs.html";

interface OrderStatusBannerProps {
  show: boolean;
}

function getThisFridayDateString(): string {
  const today = new Date();
  const day = today.getDay(); // 0 (Sun) ... 5 (Fri) ... 6 (Sat)
  const diff = (5 - day + 7) % 7; // 5 is Friday; 0 means today if it's Friday

  const friday = new Date(today);
  friday.setDate(today.getDate() + diff);

  const dd = String(friday.getDate()).padStart(2, "0");
  const mm = String(friday.getMonth() + 1).padStart(2, "0");
  const yyyy = friday.getFullYear();

  return `${dd}.${mm}.${yyyy}.`;
}

export function OrderStatusBanner({ show }: OrderStatusBannerProps) {
  const { t, i18n } = useTranslation();
  const fridayDate = getThisFridayDateString();
  const websiteUrl = i18n.language === "hu" ? WEBSITE_URL_HU : WEBSITE_URL_RS;

  if (!show) return null;

  return (
    <div className="bg-blue-50 border-2 border-blue-500 rounded-xl py-5 px-6 my-6 mx-auto max-w-[720px] text-left text-blue-900 font-light text-base leading-relaxed shadow-md">
      <div>
        {t("We are currently not accepting new orders for this week.")}
        <br />
        <strong className="font-bold">
          {t("New orders will be available from this Friday, {{date}} 💛", {
            date: fridayDate,
          })}
        </strong>
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
