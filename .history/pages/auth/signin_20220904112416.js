import { async } from '@firebase/util'
import {getProviders} from 'next-auth/react';

export default function siginin({providers}) {
  return (
    <div className='flex justify-center mt-20'>
      <img 
      src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png" 
      alt="twitter-image"
      className='hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex'
      ></img>
    <div className=''>
      {Object.values(providers).map((provider =>
        <div src="" alt="">
            <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt='twitter-logo'></img>
            <p>This app is created for learning purposes</p>
            <button>Sign in with {provider.name}</button>
        </div>
        ))}
    </div>

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
