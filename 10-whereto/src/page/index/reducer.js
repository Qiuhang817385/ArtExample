import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  ACTION_SET_HIGH_SPEED,
  ACTION_SET_DEPART_DATE
} from './actions'
// import { combineReducers } from 'redux';
// export default {};
const initialState = {
  from: '北京',
  to: '上海',
  // 城市浮层开关
  isCitySelectorVisible: false,
  // 数据回填的地方     默认值
  currentSelectingLeftCity: false,
  // 城市数据
  cityData: null,
  // 节流,loading
  isLoadingCityData: false,
  // 日期浮层开关
  isDateSelectorVisible: false,
  // 高铁
  highSpeed: false,
  departDate: Date.now(),
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_FROM:
      return { ...state, from: payload }
    case ACTION_SET_TO:
      return { ...state, to: payload }
    case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
      console.log('payload', payload)
      return { ...state, isCitySelectorVisible: payload }
    case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
      return { ...state, currentSelectingLeftCity: payload }
    case ACTION_SET_CITY_DATA:
      return { ...state, cityData: payload }
    case ACTION_SET_IS_LOADING_CITY_DATA:
      return { ...state, ...payload }
    case ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
      return { ...state, isDateSelectorVisible: payload }
    case ACTION_SET_HIGH_SPEED:
      return { ...state, highSpeed: payload }
    case ACTION_SET_DEPART_DATE:
      return { ...state, departDate: payload }
    default:
      return state
  }
}
