import type { Product } from '~/data/site'

interface CartItem extends Product {
  qty: number
}

export const useCart = () => {
  const items = useState<CartItem[]>('cart', () => [])

  const add = (product: Product) => {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) existing.qty++
    else items.value.push({ ...product, qty: 1 })
  }

  const remove = (id: number) => {
    items.value = items.value.filter(i => i.id !== id)
  }

  const setQty = (id: number, qty: number) => {
    const item = items.value.find(i => i.id === id)
    if (!item) return
    if (qty <= 0) remove(id)
    else item.qty = qty
  }

  const count = computed(() => items.value.reduce((s, i) => s + i.qty, 0))
  const total = computed(() => items.value.reduce((s, i) => s + i.qty * i.price, 0))

  return { items, add, remove, setQty, count, total }
}
