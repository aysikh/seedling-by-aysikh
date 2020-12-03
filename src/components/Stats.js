import React from 'react';
import * as dateFns from "date-fns";
import { Line } from 'react-chartjs-2'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        height: '40rem',
        width: '65rem',
        marginLeft: '3rem'
    },
} ) )

const Stats = props => {
    const classes = useStyles()

    const lastWeek = dateFns.eachDayOfInterval( {
        start: dateFns.subDays( new Date(), 6 ),
        end: new Date()
    } ).map( date => dateFns.format( date, 'MM/dd' ) )

    const ratingsForLastWeek = () => {
        if ( !props.dailyEntries ) return;

        const ratingMap = new Map();

        props.dailyEntries.forEach( entry => {
            const date = dateFns.parseISO( entry.date );
            const entryDate = dateFns.format( date, 'MM/dd' )

            if ( lastWeek.includes( entryDate ) ) {
                ratingMap.set( entryDate, entry.rating );
            }
        } )

        return lastWeek.reduce( ( arr, day ) => {
            if ( ratingMap.has( day ) ) {
                arr.push( ratingMap.get( day ) );
            }
            else {
                arr.push( 0 );
            }

            return arr;
        }, [] );
    }

    return (
        <div>
            <Paper className={ classes.root }>
                {/* {newDate()} */ }
                <Line
                    data={ {
                        labels: lastWeek,
                        datasets: [
                            {
                                label: 'your mood rating',
                                data: ratingsForLastWeek(),
                                lineTension: 0,
                                borderColor: "#90caf9",
                                borderWidth: "3",
                                hoverBorderColor: "#000",
                                backgroundColor: [
                                    '#bbdefb'
                                ]
                            },
                        ],

                    }
                    }

                    style={ { overflow: 'hidden' } }
                    maxheight={ 400 }
                    maxwidth={ 600 }
                    options={ {
                        maintainAspectRatio: false,
                        bezierCurve: false,
                        layout: {
                            padding: {
                                bottom: 30,
                                left: 60,
                                right: 90,
                                top: 10
                            },
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        steps: 5,
                                        stepSize: 1,

                                    },
                                },
                            ],
                        },
                    } }
                />
            </Paper>
        </div>
    )
}

export default Stats