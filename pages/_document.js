import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import * as snippet from '@segment/snippet'

const { ANALYTICS_WRITE_KEY, NODE_ENV } = process.env

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  renderSegmentSnippet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true,
    }

    if (NODE_ENV === 'development') {
      return snippet.max(opts)
    }
    
    return snippet.min(opts)
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styles}
          <script dangerouslySetInnerHTML={{
            __html: this.renderSegmentSnippet()
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}