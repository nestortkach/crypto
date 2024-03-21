import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';

import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { ContentWithSidebar } from 'components/ContentWithSidebar';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import { Header } from '../Header';

import css from './TermsLayout.module.scss';

export const TermsLayout = (props) => {
  const { data, withoutHeader } = props;
  const [activeLink, setActiveLink] = useState(data.content[0].id);
  const ref = useRef(null);

  const contentWithoutSidebar = useMemo(() => data.content.filter((el) => !el.notInSidebar), [data.content]);
  const elemWithoutSideBarIndex = useMemo(() => data.content.findIndex((el) => el.notInSidebar), [data.content]);

  const showIndex = useCallback(
    (i) => {
      if (elemWithoutSideBarIndex > -1) {
        return i === 0 ? '' : `${i}.`;
      }

      return `${i + 1}.`;
    },
    [elemWithoutSideBarIndex],
  );

  const highlightAnchor = useCallback(
    throttle(() => {
      const sections = ref.current.querySelectorAll('.article-page');
      const windowOffset = Math.round(window.pageYOffset);
      let activeAnchor = window.location.hash;

      if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const lastSection = sections[sections.length - 1];
        activeAnchor = `#${lastSection.id}`;
        setActiveLink(lastSection.id);
      } else {
        sections.forEach((sec) => {
          const sectionTopOffset = sec.offsetTop;
          const sectionEndOffset = sectionTopOffset + sec.offsetHeight;

          if (windowOffset >= sectionTopOffset - 80 && windowOffset < sectionEndOffset) {
            activeAnchor = `#${sec.id}`;
            setActiveLink(sec.id);
          }
        });
      }
      if (window.location.hash !== activeAnchor) {
        window.history.replaceState(null, null, activeAnchor);
      }
    }, 50),
    [setActiveLink, ref],
  );

  useEffect(() => {
    setActiveLink(window.location.hash || data.content[0].id);
  }, []);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', highlightAnchor);
    }

    watchScroll();
    return () => {
      window.removeEventListener('scroll', highlightAnchor);
    };
  }, []);

  const renderContent = useCallback(
    () => (
      <div ref={ref}>
        {data.content.map((section, i) => (
          <>
            {section.noHeading ? (
              <Text tag='section' size='sm' key={section.id} id={section.id} className='article-page'>
                {section.content}
              </Text>
            ) : (
              <Text tag='section' size='sm' key={section.id} id={section.id} className='article-page'>
                <Title tag='h2' size='md'>
                  {showIndex(i)} {section.title}
                </Title>
                {section.content}
              </Text>
            )}
          </>
        ))}
      </div>
    ),
    [],
  );

  return (
    <>
      {withoutHeader ? (
        <div className={css.bannerContainer}>
          <div className='container'>
            <Title tag='h1' size='xl'>
              {data.title}
            </Title>

            <Text className={css.subtext}>
              <p>{data.subtext}</p>
            </Text>
          </div>
        </div>
      ) : (
        <Header>
          <Banner className={css.banner}>
            <Title tag='h1' size='xl'>
              {data.title}
            </Title>

            <Text className={css.subtext}>
              <p>{data.subtext}</p>
            </Text>
          </Banner>
        </Header>
      )}

      <ContentWithSidebar
        className={css.content}
        sidebar={<Sidebar activeLink={activeLink} content={contentWithoutSidebar} />}
        content={renderContent()}
      />
    </>
  );
};

const Sidebar = (props) => {
  const { content, activeLink } = props;

  const breakpoint = useBreakPoint('');
  const useResponsive = breakpoint === breakpoints.xs;
  const [hidden, setHidden] = useState(false);

  const toggleContent = useCallback(() => setHidden(!hidden), [setHidden, hidden]);

  useEffect(() => setHidden(true), [useResponsive]);

  const showContent = !useResponsive || !hidden;

  return (
    <div className={cn({ [css.collapsible]: useResponsive })}>
      <Title tag='h2' size='sm' className={css.title} onClick={useResponsive ? toggleContent : undefined}>
        Contents:
      </Title>

      {showContent && (
        <div>
          <ol className={css.sidebarList}>
            {content.map((section, index) => (
              <li key={`${section.id}-content`}>
                <a href={`#${section.id}`} className={activeLink === section.id ? 'primary' : ''}>
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
