import React, { createContext, useState, useContext, ReactNode } from 'react'

interface ModalProviderProps {
  children: ReactNode
}
interface ContextValues {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  hanleOpenModal: React.Dispatch<React.SetStateAction<any>>
  hanleCloseModal: React.Dispatch<React.SetStateAction<any | any>>
}

const defaultValues: ContextValues = {
  openModal: false,
  setOpenModal: () => false,
  hanleOpenModal: () => true,
  hanleCloseModal: () => false,
}

const ModalContext = createContext(defaultValues)

export function ModalContextProvider({ children }: ModalProviderProps) {
  const [openModal, setOpenModal] = useState(false)

  function hanleOpenModal() {
    setOpenModal(true)
  }

  function hanleCloseModal() {
    setOpenModal(false)
  }
  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        hanleOpenModal,
        hanleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  const {
    openModal,
    setOpenModal,
    hanleOpenModal,
    hanleCloseModal,
  } = context

  return {
    openModal,
    setOpenModal,
    hanleOpenModal,
    hanleCloseModal,
  }
}
