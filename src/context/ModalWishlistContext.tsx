import React, { createContext, useState, useContext, ReactNode } from 'react'

interface ModalProviderProps {
  children: ReactNode
}
interface ContextValues {
  openModalWishlist: boolean
  setOpenModalWishlist: React.Dispatch<React.SetStateAction<boolean>>
  handleOpenModalWishlist: React.Dispatch<React.SetStateAction<any>>
  handleCloseModalWishlist: React.Dispatch<React.SetStateAction<any | any>>
}

const defaultValues: ContextValues = {
  openModalWishlist: false,
  setOpenModalWishlist: () => false,
  handleOpenModalWishlist: () => true,
  handleCloseModalWishlist: () => false,
}

const ModalWishlistContext = createContext(defaultValues)

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
