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


function fetchError(error) {
  return {
    type: types.FETCH_MOVIE_FAILURE,
    payload: {
      error
    },
  }
}

function fetchDone(params, items) {
  return {
    type: types.FETCH_MOVIE_SUCCESS,
    payload: {
      params,
      currentPage: params.page || 1,
      items
    },
  }
}

export function fetchMovie(params) {
  return (dispatch) => {
    dispatch(fetchReq(params))
    const axiosInstance = getAxiosInstance()
    const page = _.get(params, 'page', 1)
    const title = params.title
    const type = params.type
    const year =  params.year
    return axiosInstance.get(`${apiUrl}&s=${title}&type=${type}&y=${year}&page=${page}`)
      .then((data) => {
        dispatch(fetchDone(params, data.data.Search))
        console.log('dispatch push')
        dispatch(push(`/list/${title}/${type}/${year}/${page}`))
      })
      .catch((err) => {
        dispatch(fetchError(err))
      })
  }
}
