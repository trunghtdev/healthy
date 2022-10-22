import { Row, Menu, MenuProps } from 'antd'

const dataMenu: MenuProps['items'] = [
  {
    key: "会員登録",
    label: "会員登録",
    className: 'l-basic-footer-menu-item'
  },
  {
    key: "運営会社",
    label: "運営会社",
    className: 'l-basic-footer-menu-item'
  },
  {
    key: "利用規約",
    label: "利用規約",
    className: 'l-basic-footer-menu-item'
  },
  {
    key: "個人情報の取扱について",
    label: "個人情報の取扱について",
    className: 'l-basic-footer-menu-item'
  },
  {
    key: "特定商取引法に基づく表記",
    label: "特定商取引法に基づく表記",
    className: 'l-basic-footer-menu-item'
  },
  {
    key: "お問い合わせ",
    label: "お問い合わせ",
    className: 'l-basic-footer-menu-item'
  }
]

const AppFooter = () => {
  return (
    <Row
      style={{
        maxWidth: 1000,
        height: 128,
        marginInline: 'auto',
        paddingLeft: 17.5,
        paddingRight: 20
      }}
    >
      <Menu
        style={{ width: '100%' }}
        theme="dark"
        mode="horizontal"
        items={dataMenu}
      />
    </Row>
  )
}

export default AppFooter