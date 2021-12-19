const { validateRequiredParameters } = require('../helpers/validation')

/**
 * API stream endpoints
 * @module Stream
 * @param {*} superclass
 */
const Stream = superclass => class extends superclass {
  /**
   * Create a ListenKey (USER_STREAM)<br>
   *
   * POST /fapi/v1/listenKey<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-spot}
   */
  createFutureListenKey () {
    return this.publicRequest(
      'POST',
      '/fapi/v1/listenKey'
    )
  }

  /**
   * Ping/Keep-alive a ListenKey (USER_STREAM)<br>
   *
   * PUT /fapi/v1/listenKey<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-spot}
   *
   * @param {string} listenKey
   */
  renewFutureListenKey (listenKey) {
    validateRequiredParameters({ listenKey })
    return this.publicRequest(
      'PUT',
      '/fapi/v1/listenKey',
      { listenKey }
    )
  }

  /**
   * Close a ListenKey (USER_STREAM)<br>
   *
   * DELETE /fapi/v1/listenKey<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#listen-key-spot}
   *
   * @param {string} listenKey
   */
  closeFutureListenKey (listenKey) {
    validateRequiredParameters({ listenKey })
    return this.publicRequest(
      'DELETE',
      '/fapi/v1/listenKey',
      { listenKey }
    )
  }

  
}

module.exports = Stream
