import { Header } from 'layout/Header';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';

import css from './Header.module.scss';

export const PageHeader = ({ title }) => (
  <Header hideNav>
    <Banner className={css.component}>
      <Title tag='h1' size='xl'>
        {title}
      </Title>
    </Banner>
  </Header>
);
