import { Col, Row, Typography } from "antd"

import { ReactComponent as EatingIcon } from '../../assets/icons/foodtimeline/eating.svg'
import { ReactComponent as SnackIcon } from '../../assets/icons/foodtimeline/snack.svg'

const { Text } = Typography

const data = [
  {
    icon: <EatingIcon />,
    time: "Morning"
  },
  {
    icon: <EatingIcon />,
    time: "Lunch"
  },
  {
    icon: <EatingIcon />,
    time: "Dinner"
  },
  {
    icon: <SnackIcon />,
    time: "Snack"
  }
]

const FoodTimeLine = () => {
  return (
    <>
      {data.map(time => {
        return (
          <Col>
            <Row align="middle" justify="center" className="p-home-block-mid-foodtimeline-item">
              <svg width="116" height="134" viewBox="0 0 116 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z" fill="url(#paint0_linear_5773_256)" />
                <defs>
                  <linearGradient id="paint0_linear_5773_256" x1="25.9565" y1="165.202" x2="147.019" y2="118.302" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFCC21" />
                    <stop offset="1" stopColor="#FF963C" />
                  </linearGradient>
                </defs>
              </svg>

              <Col>
                <Row align="middle" justify="center">{time.icon}</Row>
                <Row align="middle" justify="center">
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      lineHeight: '24px',
                      color: 'white'
                    }}
                  >
                    {time.time}
                  </Text>
                </Row>
              </Col>
            </Row>
          </Col>
        )
      })}
    </>
  )
}

export default FoodTimeLine