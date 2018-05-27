import _omit from 'lodash/omit'
import _get from 'lodash/get'
import { ID } from '../constants/omdb-data-keys'

const _ = {
  omit: _omit,
  get: _get
}

const normalizer = (arr) => {
  if(arr.constructor !== Array) {
    throw "Parameter should be an array";
  }
  let idArray = []
  let dataObject = {}
  for(let i=0 ; i<arr.length ; i++) {
    idArray[i] =  _.get(arr[i], [ID], 'default_id')
    dataObject[idArray[i]] = _.omit(arr[i], [ID])
  }
  return {idArray, dataObject}
}

export default normalizer
