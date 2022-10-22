import { Col, Row, Typography, Divider } from "antd"

const { Text } = Typography


const MyExercise = () => {
  const data = Array(50).fill([
    {
      title: '家事全般（立位・軽い',
      content: '26kcal',
      time: '10 min'
    },
    {
      title: '家事全般（立位・軽い',
      content: '26kcal',
      time: '10 min'
    }
  ])
  return (
    <Col
      className="p-entries-exercise-wrapper"
      span={24}
    >
      <Row
        className="p-entries-exercise-content"
        style={{
          overflow: 'auto',
          height: '100%'
        }}
      >
        <Col span={24} style={{ paddingRight: 32 }}>
          {data.map((row: any, idx: number) => {
            return (
              <Row gutter={40}>
                {row.map((cell: any, idx1: number) => {
                  return (
                    <Col
                      flex={1}
                      key={`${idx}${idx1}`}
                    >
                      <Row justify='space-between'>
                        <Col
                          style={{ marginRight: 10 }}
                        >
                          <Text
                            style={{
                              fontSize: 5,
                              lineHeight: '7px',
                              fontWeight: '300',
                              letterSpacing: 0.01,
                              color: 'white',
                              display: 'block',
                              top: 9
                            }}
                          >
                            ●
                          </Text>
                        </Col>
                        <Col flex={1}>
                          <Row>
                            <Text
                              style={{
                                fontWeight: '300',
                                fontSize: 15,
                                lineHeight: '22px',
                                letterSpacing: '0.075px',
                                color: 'white'
                              }}
                            >{cell.title}</Text>
                          </Row>
                          <Row>
                            <Text
                              style={{
                                fontSize: 15,
                                lineHeight: '18px',
                                letterSpacing: 0.08,
                                color: '#FFCC21'
                              }}
                            >
                              {cell.content}
                            </Text>
                          </Row>
                        </Col>
                        <Col>
                          <Text
                            style={{
                              fontWeight: '400',
                              fontSize: 18,
                              lineHeight: '22px',
                              letterSpacing: '0.09px',
                              color: '#FFCC21'
                            }}
                          >
                            {cell.time}
                          </Text>
                        </Col>
                      </Row>
                      <Divider style={{ marginBlock: 2, borderColor: '#777777' }} />
                    </Col>
                  )
                })}
              </Row>
            )
          })}
        </Col>
      </Row>
      <Row
        gutter={30}
        className='p-entries-exercise-title-wrapper'
      >
        <Col>
          <Text
            className='p-entries-exercise-title'
          >
            MY EXERCISE
          </Text>
        </Col>

        <Col>
          <Text
            className='p-entries-exercise-subtitle'
          >
            2021.05.21
          </Text>
        </Col>
      </Row>
    </Col>
  )
}

export default MyExercise