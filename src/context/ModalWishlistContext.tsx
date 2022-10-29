import React, { createContext, useState, useContext } from 'react'
import { ModalProviderProps, defaultWishlistValues } from '../utils/types'

const ModalWishlistContext = createContext(defaultWishlistValues)

export function ModalWishlistContextProvider({ children }: ModalProviderProps) {
  const [openModalWishlist, setOpenModalWishlist] = useState(false)

  function handleOpenModalWishlist() {
    setOpenModalWishlist(true)
  }

  function handleCloseModalWishlist() {
    setOpenModalWishlist(false)
  }
  return (
    <ModalWishlistContext.Provider
      value={{
        openModalWishlist,
        setOpenModalWishlist,
        handleOpenModalWishlist,
        handleCloseModalWishlist,
      }}
    >
      {children}
    </ModalWishlistContext.Provider>
  )
}

export function useModalWishlist() {
  const context = useContext(ModalWishlistContext)

  const {
    openModalWishlist,
    setOpenModalWishlist,
    handleOpenModalWishlist,
    handleCloseModalWishlist,
  } = context

  return {
    openModalWishlist,
    setOpenModalWishlist,
    handleOpenModalWishlist,
    handleCloseModalWishlist,
  }
}
