import * as types from '../constants/action-types'

const initialState = {
  params: {},
  currentPage: 0,
  isFetching: false,
  items: {},
  error: null
}

export const omdb = (state=initialState, action={}) => {
  switch (action.type) {
    case types.FETCH_MOVIE_REQUEST: {
      const { params } = action
      return {
        ...state,
        params: {},
        isFetching: true
      }
    }
    case types.FETCH_MOVIE_SUCCESS: {
      const { params, currentPage, items } = action
      return {
        ...state,
        params,
        currentPage,
        isFetching: false,
        items
      }
    }
    case types.FETCH_MOVIE_FAILURE: {
      const { error } = action
      return {
        ...state,
        isFetching: false,
        error
      }
    }
    default:
      return state
  }
}
