import { useTranslation } from 'react-i18next'
import type { UseFormRegister, Control, FieldArrayWithId, UseFieldArrayRemove } from 'react-hook-form'
import type { OrderFormValues } from '@/schemas/orderSchemas'
import type { BreadType } from '@/types/orderTypes'
import { Controller } from 'react-hook-form'

interface OrderItemRowProps {
  register: UseFormRegister<OrderFormValues>
  control: Control<OrderFormValues>
  breadTypes: BreadType[]
  field: FieldArrayWithId<OrderFormValues, 'items', 'id'>
  index: number
  onRemove: UseFieldArrayRemove
}

export function OrderItemRow({
  register,
  control,
  breadTypes,
  field,
  index,
  onRemove,
}: OrderItemRowProps) {
  const { t } = useTranslation()

  return (
    <div className="p-2 bg-[rgb(250,248,244)] border border-bakery-border rounded-lg mb-3 last:mb-0">
      <div className="flex gap-3 items-end">
        <select
          {...register(`items.${index}.breadId`)}
          className="flex-[2] mt-0 py-2.5 px-3 rounded-[10px] border border-bakery-border text-[0.95rem] focus:outline-none focus:border-bakery-primary focus:shadow-focus bg-white"
        >
          {breadTypes.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name} ({b.price} {t('RSD')})
            </option>
          ))}
        </select>
        <Controller
          name={`items.${index}.quantity`}
          control={control}
          rules={{ min: 1 }}
          render={({ field: qtyField }) => (
            <input
              type="number"
              min={1}
              {...qtyField}
              onChange={(e) => qtyField.onChange(parseInt(e.target.value, 10) || 1)}
              className="flex-1 mt-0 py-2.5 px-3 rounded-[10px] border border-bakery-border text-[0.95rem] focus:outline-none focus:border-bakery-primary focus:shadow-focus bg-white"
            />
          )}
        />
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="flex-shrink-0 bg-red-50 text-red-700 border border-red-200 py-2 px-2.5 rounded-xl hover:bg-red-100 remove-btn"
          aria-label="Remove item"
        >
          ✖
        </button>
      </div>
    </div>
  )
}
