import { Col, Row, Typography } from "antd"
import Entries from "./Entries"

import Chart from '../../components/Chart';

import './entries.less'

const { Text } = Typography

const Records = () => {
  return (
    <Col className="p-entries">
      <Row className="p-common-block p-entries-recommend">
        <Entries />
      </Row>
      <Row className="p-common-block">
        <Col span={24}>
        <Chart
          legend={{
            position: 'bottom-left',
            offsetX: 30,
            marker: null,
            // itemName: {
            //   style: {
            //     fill: 'red'
            //   },
            // },
            
          }}
          height={304}
        />
        </Col>
      </Row>
      <Row>
        
      </Row>
      <Row>
        
      </Row>
      <Row>
        
      </Row>
    </Col>
  )
}

export default Records