import { useTranslation } from 'react-i18next'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { OrderFormValues } from '@/schemas/orderSchemas'

interface CustomerFieldsProps {
  register: UseFormRegister<OrderFormValues>
  errors: FieldErrors<OrderFormValues>
}

const LOCATION_OPTIONS = [
  { value: '', labelKey: 'Select location' as const },
  { value: 'subotica', labelKey: 'Subotica' as const },
  { value: 'hajdukovo', labelKey: 'Hajdukovo' as const },
] as const

export function CustomerFields({ register, errors }: CustomerFieldsProps) {
  const { t } = useTranslation()

  return (
    <>
      <label className="block mt-4 font-medium">
        <span className="block">{t('First name')}</span>
        <input
          type="text"
          {...register('firstName')}
          className="mt-1.5 w-full py-2.5 px-3 rounded-[10px] border border-bakery-border text-[0.95rem] transition-colors focus:outline-none focus:border-bakery-primary focus:shadow-focus bg-white"
        />
        {errors.firstName?.message && (
          <span className="text-red-600 text-sm mt-1 block">
            {errors.firstName.message}
          </span>
        )}
      </label>

      <label className="block mt-4 font-medium">
        <span className="block">{t('Last name')}</span>
        <input
          type="text"
          {...register('lastName')}
          className="mt-1.5 w-full py-2.5 px-3 rounded-[10px] border border-bakery-border text-[0.95rem] transition-colors focus:outline-none focus:border-bakery-primary focus:shadow-focus bg-white"
        />
        {errors.lastName?.message && (
          <span className="text-red-600 text-sm mt-1 block">
            {errors.lastName.message}
          </span>
        )}
      </label>

      <label className="block mt-4 font-medium">
        <span className="block">{t('Phone number')}</span>
        <input
          type="tel"
          {...register('phone')}
          className="mt-1.5 w-full py-2.5 px-3 rounded-[10px] border border-bakery-border text-[0.95rem] transition-colors focus:outline-none focus:border-bakery-primary focus:shadow-focus bg-white"
        />
        {errors.phone?.message && (
          <span className="text-red-600 text-sm mt-1 block">
            {errors.phone.message}
          </span>
        )}
      </label>

      <label className="block mt-4 font-medium">
        <span className="block">{t('Email (optional)')}</span>
        <input
          type="email"
          {...register('email')}
          className="mt-1.5 w-full py-2.5 px-3 rounded-[10px] border border-bakery-border text-[0.95rem] transition-colors focus:outline-none focus:border-bakery-primary focus:shadow-focus bg-white"
        />
        {errors.email?.message && (
          <span className="text-red-600 text-sm mt-1 block">
            {errors.email.message}
          </span>
        )}
      </label>

      <label className="block mt-4 font-medium">
        <span className="block">{t('Location')}</span>
        <select
          {...register('location')}
          className="mt-1.5 w-full py-2.5 px-3 rounded-[10px] border border-bakery-border text-[0.95rem] transition-colors focus:outline-none focus:border-bakery-primary focus:shadow-focus bg-white"
        >
          {LOCATION_OPTIONS.map((opt) => (
            <option key={opt.value || 'empty'} value={opt.value}>
              {t(opt.labelKey)}
            </option>
          ))}
        </select>
        {errors.location?.message && (
          <span className="text-red-600 text-sm mt-1 block">
            {errors.location.message}
          </span>
        )}
      </label>
    </>
  )
}
