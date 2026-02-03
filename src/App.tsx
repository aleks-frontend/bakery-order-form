import { useTranslation } from "react-i18next";
import { useBreadTypes } from "@/hooks/useBreadTypes";
import { LanguageSelector } from "@/components/LanguageSelector";
import { OrderStatusBanner } from "@/components/OrderStatusBanner";
import { OrderForm } from "@/components/OrderForm";
import { Spinner } from "@/components/Spinner";

function App() {
  const { t } = useTranslation();
  const { breadTypes, acceptingOrders, isLoading } = useBreadTypes();

  return (
    <>
      <header className="max-w-[720px] mx-auto mb-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Bakery Logo"
              className="max-w-[50px] max-h-[50px] w-auto h-auto object-contain drop-shadow-[0_4px_8px_rgba(198,134,66,0.3)] hover:drop-shadow-[0_6px_12px_rgba(198,134,66,0.4)] transition-all duration-300"
            />
            <div className="flex flex-col text-left">
              <span className="text-[16px] font-bold uppercase">
                LISZT: RAPSZÓDIA
              </span>
              <span className="text-[12px]">{t("Hleb / Pastry / Pizza")}</span>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <OrderStatusBanner show={false} />

      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <Spinner />
        </div>
      ) : (
        <OrderForm breadTypes={breadTypes} acceptingOrders={true} />
      )}
    </>
  );
}

export default App;
