import { render } from '@testing-library/react'
import React from 'react'
import { CheckoutCart } from '.'

test('should be a have cards', () => {
  render(<CheckoutCart />)
})