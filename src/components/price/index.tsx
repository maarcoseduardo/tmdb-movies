import { formatPrice, getPrice } from '../../utils/fn'

interface IPriceProps {
  rating: number
}

export function Price({ rating }: IPriceProps) {
  const price = getPrice(rating)
  const newPrice = formatPrice(price)

  return (
    <span className='font-bold'>
      {newPrice}
    </span>
  )
}
