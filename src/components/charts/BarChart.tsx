'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
        {
            label: '사용자 증가 수',
            data: [50, 75, 150, 200, 300, 500],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
    ],
};

// const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: '월별 사용자 증가',
//         },
//     },
// };

const BarChart = () => {
    return <Bar data={data} />;
};

export default BarChart;
