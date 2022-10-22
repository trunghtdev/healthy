import { Button, Col, Row, Typography } from "antd"

const { Text } = Typography

const Entries = () => {
  const data = [
    {
      title: "BODY RECORD",
      subTitle: "自分のカラダの記録",
      image: require('../../assets/images/MyRecommend-1.jpg')
    },
    {
      title: "MY EXERCISE",
      subTitle: "自分の運動の記録",
      image: require('../../assets/images/MyRecommend-2.jpg')
    },
    {
      title: "MY DIARY",
      subTitle: "自分の日記",
      image: require('../../assets/images/MyRecommend-3.jpg')
    }
  ]
  return (
    <Row gutter={[48, 48]} align='middle' justify='center'>
      {data.map(item => {
        return (
          <Col
            key={item.title}
          >
            <Row
              className="p-entries-recommend-item"
            >
              <Col
                className="p-entries-recommend-item-top"
              >
                <Row style={{ width: '100%', height: '100%' }} align='middle' justify='center'>
                  <Col>
                    <Row align='middle' justify='center'>
                      <Text className="p-entries-recommend-item-title">
                        {item.title}
                      </Text>
                    </Row>
                    <Row align='middle' justify='center'>
                      <Button
                        type='primary'
                        size='small'
                        className="p-entries-recommend-item-subtitle"
                      >
                        {item.subTitle}
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col
                className="p-entries-recommend-item-bottom"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              >
                <Row
                  className="p-entries-recommend-item-overlay"
                >

                </Row>
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}

export default Entries