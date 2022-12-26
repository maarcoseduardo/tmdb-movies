export function FormCheckout() {
  return (
    <div className='w-full flex flex-col gap-5'>
      <input
        className='w-full border h-10 px-4'
        type='text'
        placeholder='Nome completo'
      />
      <div className='flex gap-5'>
        <input
          className='max-w-[290px] w-full border h-10 px-4'
          type='text'
          placeholder='CPF'
        />
        <input
          className=' w-full border h-10 px-4'
          type='text'
          placeholder='Celular'
        />
      </div>
      <input
        className='w-full border h-10 px-4'
        type='text'
        placeholder='E-mail'
      />
      <div className='flex gap-5'>
        <input
          className='w-[150px] border h-10 px-4'
          type='text'
          placeholder='CEP'
        />
        <input
          className='w-full border h-10 px-4'
          type='text'
          placeholder='Endereço'
        />
      </div>
      <div className='flex gap-5'>
        <input
          className='max-w-[290px] w-full border h-10 px-4'
          type='text'
          placeholder='Cidade'
        />
        <input
          className=' w-full border h-10 px-4'
          type='text'
          placeholder='Estado'
        />
      </div>
    </div>
  )
}
