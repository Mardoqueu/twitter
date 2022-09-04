import { async } from '@firebase/util'
import {getProviders} from 'next-auth/react';

export default function siginin({providers}) {
  return (
    <div>
      <img src="https://help.twitter.com/pt/resources/twitter-guide/twitter-101/find-your-way-around-twitter-by-taking-a-tour-twitter-help" alt="twitter-image"></img>
    </div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders()
    return {
      props: {
        providers,
      },
    };
}
