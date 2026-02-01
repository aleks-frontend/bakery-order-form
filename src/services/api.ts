import {
  breadTypesResponseSchema,
  type BreadTypesResponseSchema,
} from '@/schemas/orderSchemas'
import type { OrderPayload, OrderSubmitResponse } from '@/types/orderTypes'

const getBreadTypesUrl = (): string => {
  const url = import.meta.env.VITE_BREAD_TYPES_URL
  if (typeof url !== 'string' || !url.trim()) {
    throw new Error('VITE_BREAD_TYPES_URL is not set')
  }
  return url.trim()
}

const getOrderSubmitUrl = (): string => {
  const url = import.meta.env.VITE_ORDER_SUBMIT_URL
  if (typeof url !== 'string' || !url.trim()) {
    throw new Error('VITE_ORDER_SUBMIT_URL is not set')
  }
  return url.trim()
}

export async function fetchBreadTypes(): Promise<BreadTypesResponseSchema> {
  const url = getBreadTypesUrl()
  const res = await fetch(url)
  const json: unknown = await res.json()
  const parsed = breadTypesResponseSchema.safeParse(json)
  if (parsed.success) {
    return parsed.data
  }
  throw new Error('Invalid bread types response')
}

export async function submitOrder(payload: OrderPayload): Promise<OrderSubmitResponse> {
  const url = getOrderSubmitUrl()
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const json: unknown = await res.json()
  if (!res.ok) {
    throw new Error('Failed to submit order')
  }
  return json as OrderSubmitResponse
}
