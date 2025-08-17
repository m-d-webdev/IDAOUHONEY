import Dialog from '@/Components/Global/Dialog'
import RegisterThings from '@/Components/RegisterThings'
import React from 'react'

const page = () => {
  return (
    <Dialog
      containerClassName="w-full max-w-[550] "
      backWhenClose={true}
    >
      <RegisterThings />
    </Dialog>
  )
}

export default page
