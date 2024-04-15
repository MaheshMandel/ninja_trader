import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { createChart } from 'lightweight-charts';

const socket = io.connect('http://localhost:8000');

const Dashboard = () => {
  const sendMessage = () => {
    socket.emit('send_message', { message: 'Hello World, nice to meet you' });
  };

  // useEffect(() => {
  //   socket.on('receive_message', (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: 'black',
        background: { type: 'solid', color: 'white' },
      },
    };
    const chart = createChart(document.getElementById('container'), {
      ...chartOptions,
      autoSize: true,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });
    candlestickSeries.setData([
      {
        time: '2018-12-22',
        open: 75.16,
        high: 82.84,
        low: 36.16,
        close: 45.72,
      },
      { time: '2018-12-23', open: 45.12, high: 53.9, low: 45.12, close: 48.09 },
      {
        time: '2018-12-24',
        open: 60.71,
        high: 60.71,
        low: 53.39,
        close: 59.29,
      },
      { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.5 },
      {
        time: '2018-12-26',
        open: 67.71,
        high: 105.85,
        low: 66.67,
        close: 91.04,
      },
      { time: '2018-12-27', open: 91.04, high: 121.4, low: 82.7, close: 111.4 },
      {
        time: '2018-12-28',
        open: 111.51,
        high: 142.83,
        low: 103.34,
        close: 131.25,
      },
      {
        time: '2018-12-29',
        open: 131.33,
        high: 151.17,
        low: 77.68,
        close: 96.43,
      },
      {
        time: '2018-12-30',
        open: 106.33,
        high: 110.2,
        low: 90.39,
        close: 98.1,
      },
      {
        time: '2018-12-31',
        open: 109.87,
        high: 114.69,
        low: 85.66,
        close: 111.26,
      },
      {
        time: '2019-01-01',
        open: 112.5,
        high: 116.25,
        low: 88.75,
        close: 113.75,
      },
      {
        time: '2019-01-02',
        open: 113.75,
        high: 118.5,
        low: 90.25,
        close: 116.25,
      },
      {
        time: '2019-01-03',
        open: 116.25,
        high: 120.0,
        low: 92.0,
        close: 118.75,
      },
      {
        time: '2019-01-04',
        open: 118.75,
        high: 122.5,
        low: 94.5,
        close: 121.25,
      },
      {
        time: '2019-01-05',
        open: 121.25,
        high: 124.5,
        low: 97.0,
        close: 123.75,
      },
      {
        time: '2019-01-06',
        open: 123.75,
        high: 126.75,
        low: 99.25,
        close: 126.25,
      },
      {
        time: '2019-01-07',
        open: 126.25,
        high: 129.0,
        low: 101.5,
        close: 128.75,
      },
      {
        time: '2019-01-08',
        open: 128.75,
        high: 131.25,
        low: 104.0,
        close: 131.25,
      },
      {
        time: '2019-01-09',
        open: 131.25,
        high: 133.5,
        low: 106.0,
        close: 133.75,
      },
      {
        time: '2019-01-10',
        open: 133.75,
        high: 136.5,
        low: 108.25,
        close: 136.25,
      },
      {
        time: '2019-01-11',
        open: 136.25,
        high: 138.75,
        low: 110.5,
        close: 138.75,
      },
      {
        time: '2019-01-12',
        open: 138.75,
        high: 141.0,
        low: 112.0,
        close: 141.25,
      },
      {
        time: '2019-01-13',
        open: 141.25,
        high: 143.25,
        low: 114.25,
        close: 143.75,
      },
      {
        time: '2019-01-14',
        open: 143.75,
        high: 146.25,
        low: 116.5,
        close: 146.25,
      },
      {
        time: '2019-01-15',
        open: 146.25,
        high: 148.5,
        low: 118.0,
        close: 148.75,
      },
      {
        time: '2019-01-16',
        open: 148.75,
        high: 151.5,
        low: 120.25,
        close: 151.25,
      },
      {
        time: '2019-01-17',
        open: 151.25,
        high: 153.75,
        low: 122.5,
        close: 153.75,
      },
      {
        time: '2019-01-18',
        open: 153.75,
        high: 156.0,
        low: 124.0,
        close: 156.25,
      },
      {
        time: '2019-01-19',
        open: 156.25,
        high: 158.25,
        low: 126.25,
        close: 158.75,
      },
      {
        time: '2019-01-20',
        open: 158.75,
        high: 161.25,
        low: 128.5,
        close: 161.25,
      },
      {
        time: '2019-01-21',
        open: 161.25,
        high: 163.5,
        low: 130.0,
        close: 163.75,
      },
      {
        time: '2019-01-22',
        open: 163.75,
        high: 166.5,
        low: 132.25,
        close: 166.25,
      },
      {
        time: '2019-01-23',
        open: 166.25,
        high: 168.75,
        low: 134.0,
        close: 168.75,
      },
      {
        time: '2019-01-24',
        open: 168.75,
        high: 171.0,
        low: 136.0,
        close: 171.25,
      },
      {
        time: '2019-01-25',
        open: 171.25,
        high: 173.25,
        low: 138.25,
        close: 173.75,
      },
      {
        time: '2019-01-26',
        open: 173.75,
        high: 176.25,
        low: 140.5,
        close: 176.25,
      },
      {
        time: '2019-01-27',
        open: 176.25,
        high: 178.5,
        low: 142.0,
        close: 178.75,
      },
      {
        time: '2019-01-28',
        open: 178.75,
        high: 181.25,
        low: 144.25,
        close: 181.25,
      },
      {
        time: '2019-01-29',
        open: 181.25,
        high: 183.5,
        low: 146.5,
        close: 183.75,
      },
    ]);

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div className='bg-slate-500 w-full h-full'>
      <div id='container' className='w-full h-full' />
    </div>
  );
};

export default Dashboard;
