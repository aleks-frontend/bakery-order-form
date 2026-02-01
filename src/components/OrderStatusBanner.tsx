import { useTranslation } from 'react-i18next'

const WEBSITE_URL = 'https://lisztrapszodia.in.rs/index.html'

interface OrderStatusBannerProps {
  show: boolean
}

export function OrderStatusBanner({ show }: OrderStatusBannerProps) {
  const { t } = useTranslation()

  if (!show) return null

  return (
    <div className="bg-blue-50 border-2 border-blue-500 rounded-xl py-5 px-6 my-6 mx-auto max-w-[720px] text-center text-blue-900 font-semibold text-base leading-relaxed shadow-md">
      <div>
        {t('We are currently not accepting new orders for this week.')}{' '}
        {t('New orders will be available next week 💛')}
      </div>
      <div className="mt-3">
        {t('Until then, check out')}{' '}
        <a
          href={WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 underline font-bold transition-opacity hover:opacity-80"
        >
          {t('our offer and learn about how we prepare our products')}
        </a>
        .
      </div>
    </div>
  )
}
