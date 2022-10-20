import { Layout, Menu } from 'antd';
import { FC } from 'react';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import './basicLayout.less'

const { Header, Footer, Content } = Layout;

const BasicLayout: FC<any> = ({ children }) => {
  return (
    <Layout className='l-basic'>
      <Header className='l-basic-header' style={{ height: 80 }}>
        <AppHeader />
      </Header>
      <Content className='l-basic-content'>{children}</Content>
      <Footer className='l-basic-footer'>
        <AppFooter />
      </Footer>
    </Layout>
  )
}

export default BasicLayout