import { Col, Row, Typography } from "antd"

const { Text } =Typography

const data = [
  {
    image: require('../../assets/images/m01.jpg'),
    label: "05.21.Morning"
  },
  {
    image: require('../../assets/images/l03.jpg'),
    label: "05.21.Lunch"
  },
  {
    image: require('../../assets/images/d01.jpg'),
    label: "05.21.Dinner"
  },
  {
    image: require('../../assets/images/l01.jpg'),
    label: "05.21.Snack"
  },
  {
    image: require('../../assets/images/m01.jpg'),
    label: "05.20.Morning"
  },
  {
    image: require('../../assets/images/l02.jpg'),
    label: "05.20.Lunch"
  },
  {
    image: require('../../assets/images/d02.jpg'),
    label: "05.20.Dinner"
  },
  {
    image: require('../../assets/images/s01.jpg'),
    label: "05.21.Snack"
  }
]

const MealHistory = () => {
  return (
    <Row gutter={[8, 8]} align='middle' justify='center' className="p-home-block-bottom-mealhistory">
      {data.map(item => {
        return (
          <Col
            key={item.label}
          >
            <Row
              style={{
                height: 234,
                width: 234,
                background: `url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Col
                className="p-home-block-bottom-mealhistory-label"
              >
                <Text>{item.label}</Text>
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}

export default MealHistory