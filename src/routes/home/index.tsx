import { Row, Col, Button } from 'antd';

import AchievementRate from './AchievementRate';
import FoodTimeLine from './FoodTimeLine';
import MealHistory from './MealHistory';
import Chart from '../../components/Chart';

import backgroundImageAchievementRate from '../../assets/images/d01.jpg'

const Home = () => {
  return (
    <Col className='p-home'>
      <Row className='p-home-block-top'>
        <Col
          style={{ backgroundImage: `url(${backgroundImageAchievementRate})` }}
          className='p-home-block-top-content' 
          span={10}
        >
          <Row style={{ height: '100%' }} align='middle' justify='center'>
            <AchievementRate />
          </Row>
        </Col>
        <Col span={14}>
          <Chart theme={{ background: '#2E2E2E' }} />
        </Col>
      </Row>
      <Row gutter={[50, 50]} align="middle" justify='center' className='p-home-block-mid p-common-block'>
        <FoodTimeLine />
      </Row>
      <Row className='p-home-block-bottom p-common-block'>
        <MealHistory />
      </Row>
      <Row justify='center' className='p-home-block-actions p-common-block'>
        <Button
          className='ant-btn-primary-with-linear-gradient'
          type='primary'
          style={{ width: 300 }}
          size='large'
        >
          記録をもっと見る
        </Button>
      </Row>
    </Col>
  )
}

export default Home