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
      <LanguageSelector />

      <div className="flex justify-center items-center mb-6">
        <img
          src="/logo.png"
          alt="Bakery Logo"
          className="w-[100px] h-auto drop-shadow-[0_4px_8px_rgba(198,134,66,0.3)] hover:drop-shadow-[0_6px_12px_rgba(198,134,66,0.4)] transition-all duration-300"
        />
      </div>

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
