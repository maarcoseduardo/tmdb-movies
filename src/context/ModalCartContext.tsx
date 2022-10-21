import React, { createContext, useState, useContext, ReactNode } from 'react'

interface ModalProviderProps {
  children: ReactNode
}
interface ContextValues {
  openModalCart: boolean
  setOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>
  handleOpenModalCart: React.Dispatch<React.SetStateAction<any>>
  handleCloseModalCart: React.Dispatch<React.SetStateAction<any | any>>
}

const defaultValues: ContextValues = {
  openModalCart: false,
  setOpenModalCart: () => false,
  handleOpenModalCart: () => true,
  handleCloseModalCart: () => false,
}

const ModalCartContext = createContext(defaultValues)

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
