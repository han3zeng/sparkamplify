import axios from 'axios'
import * as types from '../constants/action-types'
import _get from 'lodash/get'
import { push } from 'react-router-redux'

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=eac9ce55'

const _ = {
  get: _get,
}

const getAxiosInstance = () => {
  return axios.create({
    headers: { 'Content-Type': 'application/json' },
  })
}

function fetchReq(params) {
  return {
    type: types.FETCH_MOVIE_REQUEST,
    payload: {
      params
    },
  }
}


function fetchError(error, params) {
  return {
    type: types.FETCH_MOVIE_FAILURE,
    payload: {
      error,
      params,
    },
  }
}

function fetchDone(params, items, totalResults) {
  return {
    type: types.FETCH_MOVIE_SUCCESS,
    payload: {
      params,
      currentPage: params.page || 1,
      items,
      totalResults
    },
  }
}

export function fetchMovieFromRedux(params) {
  return {
    type: types.FETCH_MOVIE_REDUX_SUCCESS,
    payload: {
      params,
      currentPage: params.page || 1,
    },
  }
}

export function fetchMovie(params) {
  return (dispatch, getState) => {
    dispatch(fetchReq(params))
    const axiosInstance = getAxiosInstance()
    const page = _.get(params, 'page', 1)
    const title = params.title
    const type = params.type
    const year =  params.year
    return axiosInstance.get(`${apiUrl}&s=${title}&type=${type}&y=${year}&page=${page}`, {
      timeout: 3000
    })
      .then((data) => {
        const totalResults = _.get(data, 'data.totalResults', 0)
        const items = _.get(data, 'data.Search', [])
        dispatch(fetchDone(params, data.data.Search, totalResults))
        const currentPath = _.get(getState(), 'routing.locationBeforeTransitions.pathname')
        console.log('currentPath: ', currentPath)
        if(currentPath !== '/list') {
          dispatch(push('/list'))
        }
      })
      .catch((error) => {
        console.log('Error', error.message);
        dispatch(fetchError(error, params))
      })
  }
}
