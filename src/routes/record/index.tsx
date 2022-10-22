import { Button, Col, Row, Typography } from "antd"
import Entries from "./Entries"

import MyDiary from "./MyDiary";
import MyExercise from "./MyExercise";
import MyRecord from "./MyRecord";

const { Text } = Typography

const Records = () => {
  return (
    <Col className="p-entries">
      <Row className="p-common-block p-entries-recommend">
        <Entries />
      </Row>
      <Row className="p-common-block p-entries-record">
        <MyRecord />
      </Row>
      <Row className="p-common-block p-entries-exercise">
        <MyExercise />
      </Row>
      <Row className="p-common-block p-entries-my-diary">
        <MyDiary />
      </Row>
      <Row justify='center' style={{ marginTop: 30, marginBottom: 64 }} className="p-common-block p-entries-actions">
        <Button
          type='primary'
          size='large'
          className="ant-btn-primary-with-linear-gradient"
          style={{
            width: 296
          }}
        >
          自分の日記をもっと見る
        </Button>
      </Row>
    </Col>
  )
}

export default Records