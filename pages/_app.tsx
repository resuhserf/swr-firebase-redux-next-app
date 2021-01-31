import '@css/global/general.css'
import '@css/global/tailwind.css'
import { firebaseConfig, Fuego } from '@db'
import { PageHead } from '@layouts/Head'
import { FuegoProvider } from '@nandorojo/swr-firestore'
import { store } from '@redux/store'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const fuego = new Fuego(firebaseConfig)

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <FuegoProvider fuego={fuego}>
      <Provider store={store}>
        <PageHead />
        <Component {...pageProps} />
      </Provider>
    </FuegoProvider>
  )
}

export default MyApp
