// setup 
const data = {
    datasets: [{
            label: 'value - 1',
            data: [{
                    name: "Mon",
                    2018: 22,
                    2019: 2,
                    2020: 25,
                    2021: 3,
                    2022: 23,
                },
                {
                    name: "Tue",
                    2018: 5,
                    2019: 4,
                    2020: 53,
                    2021: 30,
                    2022: 30,
                },
                {
                    name: "Wed",
                    2018: 18,
                    2019: 32,
                    2020: 8,
                    2021: 28,
                    2022: 3,
                },
                {
                    name: "Thu",
                    2018: 35,
                    2019: 17,
                    2020: 42,
                    2021: 43,
                    2022: 5,
                },
                {
                    name: "Fri",
                    2018: 20,
                    2019: 40,
                    2020: 2,
                    2021: 2,
                    2022: 3,
                },
                {
                    name: "Sat",
                    2018: 5,
                    2019: 17,
                    2020: 50,
                    2021: 3,
                    2022: 20,
                },
                {
                    name: "Sun",
                    2018: 45,
                    2019: 17,
                    2020: 8,
                    2021: 30,
                    2022: 55,
                },
            ],
            backgroundColor: 'rgba(255, 26, 104, 0.2)',
            borderColor: 'rgba(255, 26, 104, 1)',
            borderWidth: 1
        },
        {
            label: 'value - 2',
            data: [{
                    name: "Mon",
                    2018: 22,
                    2019: 2,
                    2020: 25,
                    2021: 3,
                    2022: 23,
                },
                {
                    name: "Tue",
                    2018: 5,
                    2019: 4,
                    2020: 53,
                    2021: 30,
                    2022: 30,
                },
                {
                    name: "Wed",
                    2018: 18,
                    2019: 32,
                    2020: 8,
                    2021: 28,
                    2022: 3,
                },
                {
                    name: "Thu",
                    2018: 35,
                    2019: 17,
                    2020: 42,
                    2021: 43,
                    2022: 5,
                },
                {
                    name: "Fri",
                    2018: 20,
                    2019: 40,
                    2020: 2,
                    2021: 2,
                    2022: 3,
                },
                {
                    name: "Sat",
                    2018: 5,
                    2019: 17,
                    2020: 50,
                    2021: 3,
                    2022: 20,
                },
                {
                    name: "Sun",
                    2018: 45,
                    2019: 17,
                    2020: 8,
                    2021: 30,
                    2022: 55,
                },
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'value - 3',
            data: [{
                    name: "Mon",
                    2018: 30,
                    2019: 17,
                    2020: 25,
                    2021: 3,
                    2022: 31,
                },
                {
                    name: "Tue",
                    2018: 5,
                    2019: 17,
                    2020: 5,
                    2021: 3,
                    2022: 3,
                },
                {
                    name: "Wed",
                    2018: 18,
                    2019: 6,
                    2020: 8,
                    2021: 7,
                    2022: 20,
                },
                {
                    name: "Thu",
                    2018: 35,
                    2019: 17,
                    2020: 42,
                    2021: 3,
                    2022: 5,
                },
                {
                    name: "Fri",
                    2018: 20,
                    2019: 45,
                    2020: 25,
                    2021: 20,
                    2022: 31,
                },
                {
                    name: "Sat",
                    2018: 5,
                    2019: 17,
                    2020: 5,
                    2021: 3,
                    2022: 2,
                },
                {
                    name: "Sun",
                    2018: 6,
                    2019: 17,
                    2020: 8,
                    2021: 3,
                    2022: 55,
                },
            ],
            backgroundColor: 'rgba(83, 62, 133, 0.2)',
            borderColor: 'rgba(83, 62, 133, 1)',
            borderWidth: 1
        }
    ]
};

// config 
const config = {
    type: 'bar',
    data,

    options: {
        parsing: {
            xAxisKey: 'name',
            yAxisKey: '2018',
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function selectYear(year) {
    myChart.config.options.parsing.yAxisKey = year.value;
    myChart.update();
}

function updateChart(dataset) {
    const isDataShown = myChart.isDatasetVisible(dataset.value);

    if (isDataShown == true) {
        myChart.hide(dataset.value);
    }

    if (isDataShown == false) {
        myChart.show(dataset.value);
    }
}