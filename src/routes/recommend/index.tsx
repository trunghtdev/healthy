import { Col, Row, Button } from 'antd'
import Main from './Main'
import Sub from './Sub'
const Recommend = () => {
  return (
    <Col className='p-recommend'>
      <Row
        className="p-common-block p-recommend-main"
      >
        <Main />
      </Row>
      <Row
        className="p-common-block p-recommend-sub"
      >
        <Sub />
      </Row>
      <Row
        justify='center'
        className='p-common-block p-recommend-actions'
      >
        <Button
          className='ant-btn-primary-with-linear-gradient'
          type='primary'
          style={{ width: 300 }}
          size='large'
        >
          コラムをもっと見る
        </Button>
      </Row>
    </Col>
  )
}

export default Recommend