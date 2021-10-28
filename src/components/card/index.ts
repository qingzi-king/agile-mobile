import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/card.less'
import Card from './card'
import Body from './body'
import Footer from './footer'
import Header from './header'
export type { CardProps } from './card'
export type { CardBodyProps } from './body'
export type { CardHeaderProps } from './header'
export type { CardFooterProps } from './footer'

export default attachPropertiesToComponent(Card, { Body, Header, Footer })
