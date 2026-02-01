import { useTranslation } from 'react-i18next'
import { useFieldArray } from 'react-hook-form'
import type { UseFormRegister, Control } from 'react-hook-form'
import type { OrderFormValues } from '@/schemas/orderSchemas'
import type { BreadType } from '@/types/orderTypes'
import type { FieldArrayWithId } from 'react-hook-form'
import { OrderItemRow } from './OrderItemRow'

interface OrderItemsProps {
  register: UseFormRegister<OrderFormValues>
  control: Control<OrderFormValues>
  breadTypes: BreadType[]
}

export function OrderItems({ register, control, breadTypes }: OrderItemsProps) {
  const { t } = useTranslation()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  })

  const handleAdd = () => {
    const firstId = breadTypes[0]?.id ?? ''
    append({ breadId: firstId, quantity: 1 })
  }

  return (
    <>
      <h3 className="mt-6 text-left font-semibold">{t('Ordered bread')}</h3>
      <button
        type="button"
        onClick={handleAdd}
        className="mt-3 rounded-xl border-none py-2.5 px-4 text-[0.95rem] font-medium cursor-pointer transition-colors bg-bakery-primary text-white hover:bg-bakery-primary-hover hover:-translate-y-px active:translate-y-0 add-article"
      >
        {t('➕ Add bread')}
      </button>
      <div className="space-y-3 mt-3">
        {fields.map((field: FieldArrayWithId<OrderFormValues, 'items', 'id'>, index: number) => (
          <OrderItemRow
            key={field.id}
            register={register}
            control={control}
            breadTypes={breadTypes}
            field={field}
            index={index}
            onRemove={remove}
          />
        ))}
      </div>
    </>
  )
}
