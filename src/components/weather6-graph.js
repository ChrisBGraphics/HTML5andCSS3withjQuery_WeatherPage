import React from 'react';
// React-Line chart documentation https://react-chartjs-2.js.org/examples/line-chart
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js/auto';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Graph(props) {

    React.useEffect(() => {
        // See API documentation here: https://openweathermap.org/forecast5
        const data = props.data;
        const temp_min = [];
        const temp_max = [];
        const temp_time = [];
        // The required day index to display in the graph 
        const startIndex = props.dayIndex * 8
        const endIndex = (props.dayIndex + 1) * 8 - 1;
        console.log(startIndex, endIndex);
        data.list.forEach((sample, index) => {
            if (index < startIndex || index > endIndex) return;
            const d = new Date(sample.dt * 1000);
            // console.log(d);
            // console.log(d.toLocaleTimeString())
            temp_min.push(sample.main.temp_min);
            temp_max.push(sample.main.temp_max);
            temp_time.push(d.toLocaleTimeString());
        });
        //console.log('Graph mounted')
        console.log(temp_min);
        console.log(temp_max);


        const lineChart = new ChartJS("myChart", {
            type: "line",
            data: {
                labels: temp_time,
                datasets: [{
                    label: "Min Temp",
                    data: temp_min,
                    borderColor: "blue",
                    fill: false
                }, {
                    label: "Max Temp",
                    data: temp_max,
                    borderColor: "red",
                    fill: false
                }]
            },
            options: {
                legend: { display: false }
            }

        });
        return () => {
            lineChart.destroy();
        }

    }, [props.data, props.dayIndex]);

    const handleDay = (event) => {
        props.dayChangeHandler(parseInt(event.target.value));
        event.preventDefault(); // Prevent default form submission behavior 
    }


    const displayDay = (value) => {
        const d = new Date(props.data.list[value*8].dt * 1000);
        return d.toLocaleDateString('en-us', {month:"long", day:"numeric"});
    }

    return (
        <div className="p-3 my-5 graphComp">
            {/* <i className='text-danger fw-bold'>Graph Item component</i> */}
            <h4>Hourly Temperature data</h4>
            <canvas id="myChart" style={{ width: '90%', maxWidth: 1200 }}></canvas>
            <div className="btn-group" role="group">
                <button type="button" value={0} onClick={handleDay}>{displayDay(0)}</button>
                <button type="button" value={1} onClick={handleDay}>{displayDay(1)}</button>
                <button type="button" value={2} onClick={handleDay}>{displayDay(2)}</button>
                <button type="button" value={3} onClick={handleDay}>{displayDay(3)}</button>
                <button type="button" value={4} onClick={handleDay}>{displayDay(4)}</button>
               
            </div>
        </div >
    );
}
