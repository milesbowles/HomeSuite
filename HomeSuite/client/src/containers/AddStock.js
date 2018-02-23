import React from 'react'
import { connect } from 'react-redux'
import { fetchStocks, addStock } from '../actions/actions'

let AddStock = ({ dispatch }) => {
  let ticker

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!ticker.value.trim()) {
            return
          }
          dispatch(fetchStocks(ticker.value))
          ticker.value = ''
        }}
      >
        <input
          ref={node => {
            ticker = node
          }}
        />
        <button type="submit">
          Add Stock
        </button>
      </form>
    </div>
  )
}
AddStock = connect()(AddStock)

export default AddStock
