'use strict'

import { combineReducers } from 'redux'
import videos from './videos/index'
import ui from './ui'

export default combineReducers({
  videos,
  ui
})
