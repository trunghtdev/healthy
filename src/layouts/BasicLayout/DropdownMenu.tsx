import { Dropdown, Menu, Button, Row, Typography, Col, Divider } from 'antd'

import { ReactComponent as MenuIcon } from '../../assets/icons/nav/menu.svg'

const { Text } = Typography

const DropdownMenu = () => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: '自分の記録',
        },
        {
          key: '2',
          label: '体重グラフ',
        },
        {
          key: '3',
          label: '目標',
        },
        {
          key: '4',
          label: '選択中のコース',
        },
        {
          key: '5',
          label: 'コラム一覧',
        },
        {
          key: '6',
          label: '設定',
        }
      ].map(i => {
        return {
          ...i,
          label: (
            <Col>
              <Divider
                className='p-header-dropdown-menu-item-div_top'
              />
              <Row
                className='p-header-dropdown-menu-item'
              >
                <Text
                  className='p-header-dropdown-menu-item-text'
                >{i.label}</Text>
              </Row>
              <Divider
                className='p-header-dropdown-menu-item-div_bottom'
              />
            </Col>
          )
        }
      })}
    >

    </Menu>
  )
  return (
    <Dropdown
      arrow
      overlayClassName='p-header-dropdown-menu'
      placement='bottomRight'
      trigger={['click']}
      overlay={menu}
    >
      <Button type='link' icon={<MenuIcon />} />
    </Dropdown>
  )
}

export default DropdownMenu