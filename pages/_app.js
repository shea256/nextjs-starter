import App from 'next/app'
import Router from 'next/router'
import Navbar from '../components/Navbar'
import '../styles.css'

export default class MyApp extends App {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Router.events.on('routeChangeComplete', url => {
      window.analytics.page(url) // Segment
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </main>
      </>
    )
  }
}
