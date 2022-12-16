import { prices } from '../mocks'

export function getPrice(rating: number) {
  const roundRating = Math.round(rating < 11 ? rating : 10)
  const renderPrice = prices[roundRating]

  return renderPrice
}

export function formatPrice(price: number) {
  const newPrice = price?.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })

  return newPrice
}
