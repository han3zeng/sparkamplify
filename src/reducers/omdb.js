import * as types from '../constants/action-types'
import normalizer from '../utility/normalizer'
// idList === {}, but only conain key value string and array respectively
const initialState = {
  params: {},
  currentPage: 0,
  totalResults: 0,
  isFetching: false,
  idList: {},
  items: {},
  error: null
}

export const omdb = (state=initialState, action={}) => {
  switch (action.type) {
    case types.FETCH_MOVIE_REQUEST: {
      const { params } = action.payload
      return {
        ...state,
        isFetching: true
      }
    }
    case types.FETCH_MOVIE_SUCCESS: {
      const { params, currentPage, items, totalResults } = action.payload
      const returnData = normalizer(items)
      let newIdList = {}
      let newItems = {}
      if(state.idList[params.type] === null) {
        newIdList = {
          [params.type]: returnData.idArray,
        }
        newItems = returnData.dataObject
      } else {
        newIdList = {
          [params.type]: {
            ...state.idList[params.type],
            [currentPage]: returnData.idArray,
          }
        }
        newItems = {
          ...state.items,
          ...returnData.dataObject,
        }
      }
      return {
        ...state,
        params,
        currentPage,
        isFetching: false,
        totalResults,
        idList: newIdList,
        items: newItems,
      }
    }
    case types.FETCH_MOVIE_REDUX_SUCCESS: {
      const { params, currentPage } = action.payload
      return {
        ...state,
        params,
        currentPage,
      }
    }
    case types.FETCH_MOVIE_FAILURE: {
      const { error, params } = action.payload
      const currentPage = params.page
      return {
        ...state,
        isFetching: false,
        params,
        currentPage,
        error
      }
    }
    default:
      return state
  }
}
