import '../styles/globals.css'

import 'carbon-components/scss/globals/scss/styles.scss';

function ScheduleApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default ScheduleApp
