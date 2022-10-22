import { useState, useEffect, FC } from 'react';
import { Line, G2 } from '@ant-design/plots';
import { deepMix } from '@antv/util';

const DemoLine = (props) => {
  const { height, width, theme, ...restProps } = props
  const [data, setData] = useState([]);
  
  const darkTheme = G2.getTheme('dark');
  
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  // #414141
  const config = {
    theme: deepMix({}, darkTheme, theme || {}),
    appendPadding: [20, 20, 20, 20],
    xField: 'year',
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: '',
      grid: {
        line: {
          style: {
            stroke: 'transparent',
          },
        },
      },
    },
    
    xAxis: {
      label: {
        formatter: (v) => v,
      },
      grid: {
        line: {
          style: {
            stroke: '#777777',
          },
        },
      },
    },
    legend: false,
    smooth: true,
    // @TODO 后续会换一种动画方式
    
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line width={width} height={height || 315} {...config} {...restProps} />;
};

export default DemoLine
