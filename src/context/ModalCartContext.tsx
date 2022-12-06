import React, { createContext, useState, useContext } from 'react'
import { ModalProviderProps, defaultCartValues } from '../utils/types'

const ModalCartContext = createContext(defaultCartValues)

export function ModalCartContextProvider({ children }: ModalProviderProps) {
  const [openModalCart, setOpenModalCart] = useState(false)

  function handleOpenModalCart() {
    setOpenModalCart(true)
  }

  function handleCloseModalCart() {
    setOpenModalCart(false)
  }
  return (
    <ModalCartContext.Provider
      value={{
        openModalCart,
        setOpenModalCart,
        handleOpenModalCart,
        handleCloseModalCart,
      }}
    >
      {children}
    </ModalCartContext.Provider>
  )
}

export function useModalCart() {
  const context = useContext(ModalCartContext)

  const {
    openModalCart,
    setOpenModalCart,
    handleOpenModalCart,
    handleCloseModalCart,
  } = context

  return {
    openModalCart,
    setOpenModalCart,
    handleOpenModalCart,
    handleCloseModalCart,
  }
}
