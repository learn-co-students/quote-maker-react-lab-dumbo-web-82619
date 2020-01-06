import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuoteCard from '../components/QuoteCard'
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {

    const {quotes, removeQuote, upvoteQuote, downvoteQuote} = this.props

    let quoteCards = quotes.map(quote =>
      <QuoteCard 
        key={quote.id} 
        quote={quote}
        removeQuote={removeQuote}
        upvoteQuote={upvoteQuote} 
        downvoteQuote={downvoteQuote}
      />
    )

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quoteCards}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)), 
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)), 
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)

// alternative to mapDispatchToProps => {removeQuote, upvoteQuote, downvoteQuote}
