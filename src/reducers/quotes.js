import { bindActionCreators } from "redux";

export default function quotes (state = [], action) {

  let idx;
  let quote;
  let votes;

  switch (action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      let idx = state.findIndex(quote => quote.quoteId === action.id)
      // return state.filter(quote => quote.quoteId !== action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case "UPVOTE_QUOTE":
      // idx = state.findIndex(quote => quote.id === action.quoteId)
      // quote = state[idx]
      quote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(quote)
      votes = quote.votes + 1

      return [...state.slice(0, idx),
        Object.assign({}, quote, { votes: votes }),
        ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
      idx = parseInt(state.findIndex(quote => quote.id === action.quoteId));
      quote = state[idx];
      votes = quote.votes - 1

        if (quote.votes > 0) {
          return [...state.slice(0, idx),
            Object.assign({}, quote, { votes: votes }),
            ...state.slice(idx + 1)]
        }
      return state;

    default: 
      return state;
  }

}


