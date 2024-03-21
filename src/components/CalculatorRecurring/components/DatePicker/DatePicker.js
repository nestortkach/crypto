import React from 'react';
import ReactDatePicker, { CalendarContainer } from 'react-datepicker';
import styles from './styles.module.scss';

function DatePicker({ startDate, setStartDate }) {
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className={styles.datePickerContainer}>
      <span>Start date</span>
      <ReactDatePicker
        showTimeSelect
        selected={startDate}
        placeholderText='...'
        className={styles.datePicker}
        showPopperArrow={false}
        dateFormat='dd.MM.yyyy'
        minDate={new Date()}
        onChange={(date) => {
          setStartDate(date);
        }}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        clearButtonTitle='Clear date'
        dayClassName={() => styles.day}
        popperClassName={styles.popper}
        monthClassName={styles.popper}
        wrapperClassName={styles.wrapper}
        filterTime={filterPassedTime}
        timeClassName={() => styles.time}
        calendarContainer={({ className, children }) => (
          <div style={{ width: '328px' }}>
            <CalendarContainer className={className}>
              <div>{children}</div>
            </CalendarContainer>
          </div>
        )}
        popperPlacement='bottom'
        popperModifiers={{
          flip: {
            behavior: ['bottom'], // don't allow it to flip to be above
          },
          preventOverflow: {
            enabled: false, // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
          },
          hide: {
            enabled: false, // turn off since needs preventOverflow to be enabled
          },
        }}
      />
    </div>
  );
}

export { DatePicker };
