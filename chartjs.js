// Chart configuration
let chart;
let currentChartType = 'line';

// Theme handling
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    
    // Update theme toggle icon
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    // Update chart colors
    updateChartTheme();
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
}

function updateChartTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // Update chart colors based on theme
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    const textColor = isDark ? '#e2e8f0' : '#1e293b';
    const tooltipBg = isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)';
    const tooltipBorder = isDark ? '#475569' : '#e2e8f0';
    
    chart.options.scales.x.grid.color = gridColor;
    chart.options.scales.y.grid.color = gridColor;
    chart.options.scales.x.ticks.color = textColor;
    chart.options.scales.y.ticks.color = textColor;
    
    chart.options.plugins.legend.labels.color = textColor;
    chart.options.plugins.tooltip.backgroundColor = tooltipBg;
    chart.options.plugins.tooltip.titleColor = textColor;
    chart.options.plugins.tooltip.bodyColor = textColor;
    chart.options.plugins.tooltip.borderColor = tooltipBorder;
    
    chart.update();
}

// Sample data
const data = {
    2018: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Value 1',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 2',
                data: [28, 48, 40, 19, 86, 27],
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 3',
                data: [45, 25, 16, 36, 67, 18],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.4
            }
        ]
    },
    2019: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Value 1',
                data: [75, 69, 90, 91, 66, 65],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 2',
                data: [38, 58, 50, 29, 96, 37],
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 3',
                data: [55, 35, 26, 46, 77, 28],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.4
            }
        ]
    },
    2020: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Value 1',
                data: [85, 79, 100, 101, 76, 75],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 2',
                data: [48, 68, 60, 39, 106, 47],
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 3',
                data: [65, 45, 36, 56, 87, 38],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.4
            }
        ]
    },
    2021: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Value 1',
                data: [95, 89, 110, 111, 86, 85],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 2',
                data: [58, 78, 70, 49, 116, 57],
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 3',
                data: [75, 55, 46, 66, 97, 48],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.4
            }
        ]
    },
    2022: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Value 1',
                data: [105, 99, 120, 121, 96, 95],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 2',
                data: [68, 88, 80, 59, 126, 67],
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.4
            },
            {
                label: 'Value 3',
                data: [85, 65, 56, 76, 107, 58],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.4
            }
        ]
    }
};

// Chart configuration
const config = {
    type: currentChartType,
    data: data[2022],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'center',
                labels: {
                    usePointStyle: true,
                    padding: 12,
                    font: {
                        size: 11,
                        family: "'Inter', sans-serif"
                    },
                    boxWidth: 8,
                    boxHeight: 8
                }
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#1e293b',
                bodyColor: '#1e293b',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 8,
                boxPadding: 4,
                usePointStyle: true,
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.parsed.y}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    font: {
                        size: 10,
                        family: "'Inter', sans-serif"
                    },
                    padding: 8
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 10,
                        family: "'Inter', sans-serif"
                    },
                    padding: 8
                }
            }
        },
        animation: {
            duration: 500,
            easing: 'easeInOutQuart'
        }
    }
};

// Initialize chart
function initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, config);
    
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    if (savedTheme === 'dark') {
        updateChartTheme();
    }
}

// Update chart when year changes
function selectYear(select) {
    const year = select.value;
    chart.data = data[year];
    chart.update();
}

// Update chart when checkboxes are toggled
function updateChart(checkbox) {
    const index = parseInt(checkbox.value);
    const isChecked = checkbox.checked;
    
    chart.data.datasets[index].hidden = !isChecked;
    chart.update();
}

// Change chart type
function changeChartType(type) {
    currentChartType = type;
    
    // Update active button
    document.querySelectorAll('.chart-type-buttons button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === type) {
            btn.classList.add('active');
        }
    });
    
    // Update chart
    chart.config.type = type;
    chart.update();
}

// Initialize chart when page loads
window.addEventListener('load', initChart);