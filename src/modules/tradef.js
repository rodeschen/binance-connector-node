const { validateRequiredParameters } = require('../helpers/validation')

/**
 * API trade endpoints
 * @module Trade
 * @param {*} superclass
 */
const Tradef = superclass => class extends superclass {
  /**
   * New Order (TRADE)<br>
   *
   * POST /api/v3/order<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#new-order-trade}
   *
   * @param {string} symbol
   * @param {string} side
   * @param {string} type
   * @param {object} [options]
   * @param {string} [options.timeInForce]
   * @param {number} [options.quantity]
   * @param {number} [options.quoteOrderQty]
   * @param {number} [options.price]
   * @param {string} [options.newClientOrderId]
   * @param {number} [options.stopPrice]
   * @param {number} [options.icebergQty]
   * @param {string} [options.newOrderRespType]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   **********************************/
  newFutureOrder (symbol, side, type, options = {}) {
    validateRequiredParameters({ symbol, side, type })

    return this.signRequest(
      'POST',
      '/fapi/v1/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        type: type.toUpperCase()
      })
    )
  }

  /**
   * Cancel all Open Orders on a Symbol (TRADE)<br>
   *
   * DELETE /api/v3/openOrders<br>
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-all-open-orders-on-a-symbol-trade}
   * @param {string} symbol
   * @param {object} [options]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  cancelFutureOpenOrder (symbol, orderId, options = {}) {
    validateRequiredParameters({ symbol })

    return this.signRequest(
      'DELETE',
      '/fapi/v1/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        origClientOrderId: orderId
      })
    )
  }

  cancelFutureAllOpenOrder (symbol, options = {}) {
    validateRequiredParameters({ symbol })

    return this.signRequest(
      'DELETE',
      '/fapi/v1/allOpenOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  getFutureAllOrders (symbol, options = {}) {
    validateRequiredParameters({ symbol })
    return this.signRequest(
      'GET',
      '/fapi/v1/openOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }
  
  accountPositionInfo (symbol) {
    validateRequiredParameters({ symbol })
    return this.signRequest(
      'GET',
      '/fapi/v2/positionRisk', {
        symbol: symbol.toUpperCase()
      }
    )
  }
  modifyPositionMargin (symbol, amount, type, options = {}) {
    validateRequiredParameters({ symbol, amount, type })

    return this.signRequest(
      'POST',
      '/fapi/v1/positionMargin',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        amount,
        type
      })
    )
  }
}

module.exports = Tradef
