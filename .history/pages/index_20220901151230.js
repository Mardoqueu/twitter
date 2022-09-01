import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className='flex min-h-screen max-w-7xl mx-auto '>  
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      
      {/* Modal */}

    </main>


    </div>
  )
}