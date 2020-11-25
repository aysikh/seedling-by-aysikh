import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

// Generate Sales Data
const createData = (date, rating) => {
  return { date, rating };
}

const data = [
  createData('11/01', 1),
  createData('11/02', 4),
  createData('11/03', 3),
  createData('11/05', 2),
  createData('11/06', 1),
  createData('11/07', 2),
  createData('11/08', 2),
  createData('11/09', 1),
  createData('11/11', 2),
  createData('11/12', 5)
];

const Stats = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          <Label
            angle ={200}
            position="middle"
            style={{ textAnchor: 'middle', fill: theme.palette.text.primary}}
            >
              DATE
            </Label>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              MOOD
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="rating" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Stats