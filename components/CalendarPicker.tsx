import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarPickerProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ selectedDate, onDateChange }) => {
    return ( 
        <div>
            <h1>Add Time Slots:</h1>
            <DatePicker
                inline
                selected={selectedDate}
                onChange={onDateChange}
                dateFormat="MM/dd/yyyy hh:mm:ss"
                showTimeSelect
                timeIntervals={30}
                timeFormat="hh:mm"
            />
        </div>
    );
};

export default CalendarPicker;
