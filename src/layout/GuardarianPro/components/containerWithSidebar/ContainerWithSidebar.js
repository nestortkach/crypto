import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import cn from 'classnames';

import Exchanges from 'components/Icons/Exchanges';
import Settings from 'components/Icons/Settings';
import Subscriptions from 'components/Icons/Subscriptions';

import css from './ContainerWithSidebar.module.scss';

import { guardarianRecurringPaymentsDisabledPublic } from '../../../../../config';

const sidebarLinks = [
  {
    id: 1,
    title: 'Exchanges',
    href: '/pro/exchanges',
    image: Exchanges,
  },
  {
    id: 2,
    title: 'Subscriptions',
    href: '/pro/subscriptions',
    image: Subscriptions,
  },
  {
    id: 3,
    title: 'Settings',
    href: '/pro/settings',
    divider: true,
    image: Settings,
  },
];

const recurringPaymentsDisabled = guardarianRecurringPaymentsDisabledPublic === 'true';

function ContainerWithSidebar({ children }) {
  const router = useRouter();

  return (
    <div className={css.container}>
      <div className={css.sidebarContainer}>
        {sidebarLinks.map((el) => {
          const ElementImage = el.image;
          const isActive = router.query.product === el.title.toLowerCase();

          if (recurringPaymentsDisabled && el.title === 'Subscriptions') {
            return null;
          }

          return (
            <div className={css.elem} key={el.id}>
              {el.divider && <div className={css.divider} />}
              <Link passHref href={el.href}>
                <div className={cn(css.sidebarLink, { [css.active]: isActive })}>
                  <ElementImage isActive={isActive} />
                  <span>{el.title}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
}

export { ContainerWithSidebar };
