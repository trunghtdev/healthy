import { Row, Col, Menu, MenuProps, Button, Dropdown } from 'antd'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/nav/edit.svg'
import { ReactComponent as MedalIcon } from '../../assets/icons/nav/medal.svg'
import { ReactComponent as NotiIcon } from '../../assets/icons/nav/noti.svg'
import DropdownMenu from './DropdownMenu'

const AppHeader = () => {
  // const navigate = useNavigate()

  const dataMenu: MenuProps['items'] = [
    {
      key: "自分の記録",
      label: (
        <Link to={'/'}>
          自分の記録
        </Link>
      ),
      icon: <EditIcon />,
      className: 'l-basic-header-menu-item'
    },
    {
      key: "チャレンジ",
      label: (
        <Link
          to='/record'
        >
          チャレンジ
        </Link>
      ),
      icon: <MedalIcon />,
      className: 'l-basic-header-menu-item'
    },
    {
      key: "お知らせ",
      label: (
        <Link
          to='/recommend'
        >
          お知らせ
        </Link>
      ),
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
        maxWidth: 1000,
        marginInline: 'auto',
        height: 80,
        paddingInline: 20
      }}
    >
      <Logo />
      <Col>
        <Row wrap={false} gutter={50} align='middle'>
          <Col
            style={{
              minWidth: 473
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              items={dataMenu}
            />
          </Col>
          <Col>
            <Row>
              <DropdownMenu />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AppHeader