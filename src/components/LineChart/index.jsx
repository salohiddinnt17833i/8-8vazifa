import React, { useEffect, useState } from 'react';
import LineJson from '../../JSON/LineJson12.json';
import LineJson1D from '../../JSON/LineJson1d.json'
import LineJson1W from '../../JSON/LineJson1w.json'
import LineJson1M from '../../JSON/LineJson1m.json'
import LineJson1Y from '../../JSON/LineJson1y.json'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};

export default function LineChart(props) {
    const {Pdata} = props.data
    console.log(Pdata);
    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);

    function convertTimestampToMonthYear(timestamp) {
        if (timestamp.toString().length === 10) {
            timestamp *= 1000;
        }

        const date = new Date(timestamp);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${month}.${year}`;
    }

    useEffect(() => {
        const { startTime, interval, rates } = LineJson.batchList;

        const labels = rates.map((_, index) => convertTimestampToMonthYear(startTime + index * interval));
        const values = rates;

        setLabels(labels);
        setValues(values);
    }, []);

    const data = {
        labels,
        datasets: [
            {
                label: 'Rates',
                data: values,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data} />;
}
