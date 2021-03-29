import '../Styles/global.css'
import Header from '../components/header/header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="antialiased text-gray-700">
        <Header />
        <main className="my-6">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
