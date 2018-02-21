import { connect } from 'react-redux'
import {Table} from '../component/stocks'

const getVisibleStocks = (stocks) => {
    return stocks;
}

const mapStateToProps = state => {
  return {
    stocks: getVisibleStocks(state.stocks)
  }
}

const VisibleStockTable = connect(
  mapStateToProps,
)(Table)

export default VisibleStockTable;