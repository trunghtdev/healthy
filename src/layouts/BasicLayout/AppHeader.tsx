import { Row, Col, Menu, MenuProps, Button } from 'antd'
import { useNavigate } from 'react-router'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/nav/edit.svg'
import { ReactComponent as MedalIcon } from '../../assets/icons/nav/medal.svg'
import { ReactComponent as NotiIcon } from '../../assets/icons/nav/noti.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/nav/menu.svg'

const AppHeader = () => {
  // const navigate = useNavigate()

  const dataMenu: MenuProps['items'] = [
    {
      key: "自分の記録",
      label: "自分の記録",
      icon: <EditIcon />,
      className: 'l-basic-header-menu-item'
    },
    {
      key: "チャレンジ",
      label: "チャレンジ",
      icon: <MedalIcon />,
      className: 'l-basic-header-menu-item'
    },
    {
      key: "お知らせ",
      label: "お知らせ",
      icon: <NotiIcon />,
      className: 'l-basic-header-menu-item'
    }
  ]

  return (
    <Row
      wrap={false}
      align='middle'
      justify='space-between'
      style={{
        maxWidth: 1280,
        marginInline: 'auto',
        height: 80,
        paddingInline: 160
      }}
    >
      <Logo />
      <Col>
        <Row wrap={false} gutter={50} align='middle'>
          <Col>
            <Menu
              theme="dark"
              mode="horizontal"
              items={dataMenu}
            />
          </Col>
          <Col>
            <Row>
              <Button type='link' icon={<MenuIcon />} />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AppHeader