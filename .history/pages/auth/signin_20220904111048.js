import { async } from '@firebase/util'
import React from 'react'

export default function siginin() {
  return (
    <div>siginin</div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders()
}
