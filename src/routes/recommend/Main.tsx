import { Row, Col, Typography, Divider } from 'antd'

const { Text } = Typography

const Main = () => {
  return (
    <Row
      align='middle'
      justify='center'
      gutter={[32, 32]}
      className='p-recommend-main-wrapper'
    >
      {[
        {
          name: "RECOMMENDED COLUMN",
          title: "オススメ"
        },
        {
          name: "RECOMMENDED DIET",
          title: "ダイエット"
        },
        {
          name: "RECOMMENDED BEAUTY",
          title: "美容"
        },
        {
          name: "RECOMMENDED HEALTH",
          title: "健康"
        }
      ].map(item => {
        return (
          <Col
            className='p-recommend-main-item'
          >
            <Row
              className='p-recommend-main-item-content'
              align='middle'
              justify='center'
            >
              <Col
                span={24}
              >
                <Row
                  align='middle'
                  justify='center'
                >
                  <Text
                    className='p-recommend-main-item-name'
                  >{item.name}</Text>
                </Row>
              </Col>
              <Col
                span={6}
              >
                <Divider
                  style={{
                    marginTop: 10,
                    marginBottom: 8,
                    borderColor: '#fff'
                  }}
                />
              </Col>
              <Col
                span={24}
              >
                <Row
                  align='middle'
                  justify='center'
                >
                  <Text
                    className='p-recommend-main-item-title'
                  >{item.title}</Text>
                </Row>
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}

export default Main