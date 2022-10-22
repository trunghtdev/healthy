import { Col, Row, Typography } from "antd"

import Chart from '../../components/Chart';

const { Text } = Typography

const MyRecord = () => {
  return (
    <Col
      className="p-entries-record-wrapper"
      style={{ position: 'relative' }}
      span={24}
    >
      <Chart
        padding={[40, 20, 40, 20]}
        height={304}
        theme={{ background: '#414141' }}
      />
      <Row
        className="p-entries-record-content"
        gutter={30}
      >
        <Col>
          <Text
            className="p-entries-record-title"
          >
            BODY RECORD
          </Text>
        </Col>

        <Col>
          <Text
            className="p-entries-record-subtitle"
          >
            2021.05.21
          </Text>
        </Col>
      </Row>
      <Row
        className="p-entries-record-footer"
        gutter={16}
      >
        {[
          {
            label: '日',
            selected: false
          },
          {
            label: '週',
            selected: false
          },
          {
            label: '月',
            selected: false
          },
          {
            label: '年',
            selected: true
          }
        ].map(i => {
          return (
            <Col
              key={i.label}
            >
              <Row
                align='middle' 
                justify='center'
                className={`p-entries-record-footer-item${i.selected ? ' p-entries-record-footer-item-selected' : ''}`}
              >
                {i.label}
              </Row>
            </Col>
          )
        })}
      </Row>
    </Col>
  )
}

export default MyRecord