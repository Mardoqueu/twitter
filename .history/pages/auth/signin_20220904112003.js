import { async } from '@firebase/util'
import {getProviders} from 'next-auth/react';

export default function siginin({providers}) {
  return (
    <div>
      <img 
      src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png" 
      alt="twitter-image"></img>
    <div className=''>
      {Object.values(providers).map((provider =>
        <div src="" alt="">
            <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt='twitter-logo'></img>
            <p>This app is created for learning purposes</p>
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
