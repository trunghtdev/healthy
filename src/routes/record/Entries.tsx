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
              style={{
                border: '24px solid #FFCC21',
                backgroundColor: '#2E2E2E',
                position: 'relative'
              }}
            >
              <Col
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}
              >
                <Row style={{ width: '100%', height: '100%' }} align='middle' justify='center'>
                  <Col>
                    <Row align='middle' justify='center'>
                      <Text style={{ color: '#FFCC21', letterSpacing: '0.125px', fontSize: 25 }}>{item.title}</Text>
                    </Row>
                    <Row align='middle' justify='center'>
                      <Button
                        type='primary'
                        size='small'
                        style={{ minWidth: 160 }}
                      >
                        {item.subTitle}
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  mixBlendMode: 'luminosity',
                  height: 240,
                  width: 240,
                }}
              >
                <Row
                  style={{
                    mixBlendMode: 'luminosity',
                    backgroundColor: 'black',
                    height: 240,
                    width: 240,
                    opacity: 0.25
                  }}
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