import { async } from '@firebase/util'
import {getProviders} from 'next-auth/react';

export default function siginin() {
  return (
    <div>siginin</div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders()
}
