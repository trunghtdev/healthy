import { Row, Col, Typography } from "antd"

const { Text, Paragraph } = Typography

const MyDiary = () => {
  return (
    <Row
      className="p-entries-my-diary-wrapper"
    >
      <Col span={24}>
        <Text
          className="p-entries-my-diary-title"
        >
          MY DIARY
        </Text>
      </Col>
      <Col
        span={24}
      >
        <Row gutter={[12, 12]}>
          {Array(8).fill({
            date: '2021.05.21',
            time: '23:25',
            content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
            title: "私の日記の記録が一部表示されます。"
          }).map(r => {
            return (
              <Col>
                <Row
                  className="p-entries-my-diary-item"
                >
                  <Col
                    span={24}
                  >
                    <Row>
                      <Text
                        className="p-entries-my-diary-item-time"
                      >
                        {r.date}
                      </Text>
                    </Row>
                    <Row>
                      <Text
                        className="p-entries-my-diary-item-time"
                      >
                        {r.time}
                      </Text>
                    </Row>
                  </Col>
                  <Col style={{
                    height: 155
                  }}>
                    <Row>
                      <Text
                        className="p-entries-my-diary-item-title"
                      >
                        {r.title}
                      </Text>
                    </Row>
                    <Row>
                      <Paragraph
                        className="p-entries-my-diary-item-content"

                        ellipsis={{
                          rows: 7,
                        }}
                      >
                        {r.content}
                      </Paragraph>
                    </Row>
                  </Col>
                </Row>
              </Col>
            )
          })}
        </Row>
      </Col >
    </Row >
  )
}

export default MyDiary