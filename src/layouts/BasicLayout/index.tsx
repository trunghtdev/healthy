import { Layout, BackTop } from 'antd';
import { FC } from 'react';

import {  ReactComponent as BackTopIcon } from '../../assets/icons/back-top.svg'

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
      <BackTop
        style={{
          height: 48,
          width: 48,
          right: 400,
          bottom: 150
        }}
        visibilityHeight={0}
      >
        <BackTopIcon />
      </BackTop>
    </Layout>
  )
}

export default BasicLayout