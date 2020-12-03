import React, { useState } from "react";
import * as dateFns from "date-fns";
import "./Calendar.css";
import Heart from '../assets/heart.png'

const Calendar = (props) => {
    // console.log(props.selectedDate)

    // const completedEntry = () => {
    //     let dailyentry = props.parsedDateEntry()
    //     console.log(dailyentry[0].date)
    //     dailyentry = dailyentry.filter(entry => entry.date === props.selectedDate)[0]
    
    //     return dailyentry
    // }

    const header = () => {
        const dateFormat = "MMMM yyyy";

        return (
            <div>
                {/* {completedEntry()} */}
                <center>
                    <div className="header row flex-middle">
                        <div className="column col-start">
                            <div className="icon" onClick={prevMonth}>
                                chevron_left
                            </div>
                        </div>
                        <div className="column col-center">
                            <span>{dateFns.format(props.currentDate, dateFormat)}</span>
                        </div>
                        <div className="column col-end">
                            <div className="icon" onClick={nextMonth}>
                                chevron_right
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        );
    };
    const days = () => {
        const dateFormat = "eeee";
        const days = [];
        let startDate = dateFns.startOfWeek(props.currentDate);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="column col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    };
    const cells = () => {
        const monthStart = dateFns.startOfMonth(props.currentDate);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                let hasEntry = props.parsedDateEntry().find(entry => {
                    // return formattedDate == entry.date
                    // console.log(entry.date)
                    let x = new Date(entry.date)
                    return x.getDate() == formattedDate && dateFns.isSameMonth(day, monthStart) && dateFns.isSameMonth(x, monthStart)
                })
                // console.log(hasEntry)
                // console.log(formattedDate)
                const cloneDay = day;
                console.log( cloneDay )
                days.push(
                    <div
                    className={`column cell ${!dateFns.isSameMonth(day, monthStart)
                        ? "disabled" : dateFns.isSameDay(day, props.selectedDate)
                        ? "selected" : "" }`}
                        key={day}
                        onClick={(event) => onDateClick(dateFns.format(cloneDay, 'MM-dd-yyyy'), props.handleClick(event))}
                        >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                        <img src={hasEntry ? Heart : null} style={{height: '4.5rem', marginLeft: '1rem', marginTop: '.3rem'}}/>
                    </div>
                );
                day = dateFns.addDays(day, 1);
                
            }
            rows.push(
                <div className="row" key={day}> {days} </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }
    const nextMonth = () => {
        props.setCurrentDate(dateFns.addMonths(props.currentDate, 1));
    };
    const prevMonth = () => {
        props.setCurrentDate(dateFns.subMonths(props.currentDate, 1));
    };
    const onDateClick = day => {
        props.setSelectedDate(day);
    }
    return (
        <div>
            <br/>
            <div className="calendar">
                <div>{header()}</div>
                <div>{days()}</div>
                <div>{cells()}</div>
            </div>
        </div>
    );
};
export default Calendar;