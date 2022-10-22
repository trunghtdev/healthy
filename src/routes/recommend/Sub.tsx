import { Row, Col, Typography } from 'antd'

const { Text, Paragraph } = Typography

const data = [
  {
    image: require('../../assets/images/column-1.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: require('../../assets/images/column-2.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: require('../../assets/images/column-3.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: require('../../assets/images/column-4.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: require('../../assets/images/column-5.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: require('../../assets/images/column-6.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: require('../../assets/images/column-7.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  },
  {
    image: require('../../assets/images/column-8.jpg'),
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べる魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    title: '#魚料理  #和食  #DHA'
  }
]

const Sub = () => {
  return (
    <Row gutter={[8, 8]} className='p-recommend-sub-wrapper'>
      {data.map(item => {
        return (
          <Col className='p-recommend-sub-item'>
            <Row
              className='p-recommend-sub-item-top'
              style={{
                backgroundImage: `url(${item.image})`
              }}
            >
              <Col
                className='p-recommend-sub-item-time'
                span={24}
              >
                <Text>{item.time}</Text>
              </Col>
            </Row>
            <Row
              className='p-recommend-sub-item-bottom'
            >
              <Col>
                <Paragraph
                  className='p-recommend-sub-item-content'
                  ellipsis={{
                    rows: 2
                  }}
                >
                  {item.content}
                </Paragraph>
              </Col>
              <Col>
                <Text
                  className='p-recommend-sub-item-title'
                >
                  {item.title}
                </Text>
              </Col>
            </Row> 
          </Col>
        )
      })}
    </Row>
  )
}

export default Sub