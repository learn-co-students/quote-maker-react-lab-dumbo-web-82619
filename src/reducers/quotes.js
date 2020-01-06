const quotesReducer = (state = [], action) => {
  let quote
  let index
  let votes
  
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      index = state.indexOf(quote)
      votes = quote.votes + 1

      return [
        ...state.slice(0, index),
        {...quote, votes: votes},
        ...state.slice(index + 1)
      ]
      
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      index = state.indexOf(quote)
      votes = quote.votes > 0 ? quote.votes - 1 : 0

      return [
        ...state.slice(0, index),
        {...quote, votes: votes},
        ...state.slice(index + 1)
      ]  

    default:
      return state
  }
}

export default quotesReducer