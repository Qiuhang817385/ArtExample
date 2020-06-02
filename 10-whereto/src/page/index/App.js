import React, { useCallback } from 'react'
import Header from '../../common/Header'
import Journey from './Journey'
import DateSelector from '../../common/DateSelector'
export default function App () {
  // 历史回退的功能,必须这么写
  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  return (
    <>
      <div className="header-wrapper">
        <Header title={'火车票'} onBack={onBack}></Header>
        <Journey
          from={"from"}
          to={"to"}
        // exchangeFromTo={doExchangeFromTo}
        // showCitySelector={doShowCitySelector}
        ></Journey>

        <DateSelector
        // show={isDateSelectorVisible}
        // onBack={doDideDateSelector}
        // onSelect={doOnSelectDate}
        ></DateSelector>
      </div>
    </>
  )
}
