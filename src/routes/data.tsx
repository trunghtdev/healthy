import { RouteProps } from 'react-router-dom'
import { lazy } from 'react'

export type TypeRoute = RouteProps & { Component?: any }

export const routes: TypeRoute[] = [
  {
    path: '/',
    Component: lazy(() => import(`./home`)),
  },
  {
    path: '/record',
    Component: lazy(() => import(`./record`))
  },
  {
    path: '/recommend',
    Component: lazy(() => import(`./recommend`))
  }
]