import { ShoppingBag } from 'lucide-react'

export default function CartWidget() {
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4 " />
      <span className="text-sm">Cart (0)</span>
    </div>
  )
}
