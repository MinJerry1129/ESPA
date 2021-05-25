import {
  prepareMainGraphStats,
} from '@helpers/graph.helpers';


export const getMainPageChartOptions = (history, monaPerEth) => {
  const options = {
    time: {
      useUTC: false,
    },
    title: {
      text: '',
    },
    chart: {
      height: 175,
      width: 825,
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      visible: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          radius: 3,
          enabled: true,
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null, // inherit from series
        },
        label: {
          enabled: false,
        },
      },
    },
    yAxis: {
      title: '',
      labels: {
        formatter(params) {
          return `${params.value} MONA`;
        },
      },
    },
    series: [
      {
        data: prepareMainGraphStats(history, monaPerEth),
      },
    ],
  };
  return options;
};