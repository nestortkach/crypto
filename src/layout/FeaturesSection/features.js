import css from './FeaturesSection.module.scss';

const features = [
  {
    img: {
      path: 'features/padlock.webp',
      alt: 'padlock',
    },
    text: (
      <div className={css.featureText}>
        Variety of <span style={{ color: '#F5FA00' }}>secure</span> payments
      </div>
    ),
    key: 1,
  },
  {
    img: {
      path: 'features/monitor.webp',
      alt: 'monitor',
    },
    text: (
      <div className={css.featureText}>
        <span style={{ color: '#F3BFFF' }}>Intuitive</span> interface
      </div>
    ),
    key: 2,
  },
  {
    img: {
      path: 'features/chat.webp',
      alt: 'chat',
    },
    text: (
      <div className={css.featureText}>
        Fast and friendly customer <span style={{ color: '#04C697' }}>support</span>
      </div>
    ),
    online: true,
    key: 3,
  },
  {
    img: {
      path: 'features/stopwatch.webp',
      alt: 'stopwatch',
    },
    text: (
      <div className={css.featureText}>
        <span style={{ color: '#F5FA00' }}>Seamless</span> exchange
      </div>
    ),
    key: 4,
  },
];

export { features };
