import React, { memo } from 'react';
import cn from 'classnames';

import { Button } from 'components/Button';
import { Input } from 'components/Input/v2';
import { MultiSelect } from 'components/MultiSelect';

import { useBreakPoint } from 'hooks/useResponsive';

import css from './styles.module.scss';
import { typeBtns, themeBtns, flowBtns } from '../../constants';

const Customise = memo(
  ({
    widgetData,
    toggleFormType,
    toggleFlowType,
    toggleFormTheme,
    toggleFormAmount,
    toggleFormApiKey,
    fiatCurrenciesList,
    cryptoCurrenciesList,
    handleChangeFiatCurrenciesList,
    handleChangeCryptoCurrenciesList,
    handleChangeDefaultCrypto,
    handleChangeDefaultFiat,
    isPartnerUrl,
  }) => {
    const breakpoint = useBreakPoint();

    if (isPartnerUrl) {
      return (
        <>
          <div className={cn(css.customizeTypes, { [css.customizePartnerUrl]: isPartnerUrl })}>
            <div>
              <div className={css.subTitle}>Type</div>
              <div className={css.navBtns}>
                {typeBtns.map((btn) => (
                  <Button
                    key={btn.id}
                    active={btn.title.toLowerCase() === widgetData?.type}
                    onClick={toggleFormType}
                    name={btn.title}
                    className={css.navBtn}
                    disabled={btn.id === widgetData?.sell && widgetData?.sellButtonDisabled}
                    rounded
                    customBlue
                  >
                    {btn.title}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <div className={css.subTitle}>Direction</div>
              <div className={css.navBtns}>
                {flowBtns.map((btn) => (
                  <Button
                    key={btn.id}
                    active={btn?.name === widgetData?.defaultSide || (!widgetData?.defaultSide && btn?.noDefaultSide)}
                    onClick={toggleFlowType}
                    name={btn?.name}
                    className={css.navBtn}
                    rounded
                    customBlue
                  >
                    {btn.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className={cn(css.customizeTypes, { [css.customizePartnerUrl]: isPartnerUrl })}>
            <div>
              <div className={css.subTitle}>Theme</div>
              <div className={css.navBtns}>
                {themeBtns.map((btn) => (
                  <Button
                    ariaLabel={btn.title}
                    key={btn.id}
                    active={btn.title.toLowerCase() === widgetData?.theme}
                    onClick={toggleFormTheme}
                    name={btn.title}
                    className={css.navBtn}
                    disabled={btn.id === widgetData?.sell && widgetData?.sellButtonDisabled}
                    rounded
                    customBlue
                  >
                    {btn.component}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className={cn(css.customizeTypes, { [css.customizePartnerUrl]: isPartnerUrl })}>
            <div>
              <div className={css.subTitle}>You send currencies</div>
              <MultiSelect
                setDefaultCurrency={handleChangeDefaultFiat}
                onSelect={handleChangeFiatCurrenciesList}
                list={fiatCurrenciesList}
                containerClass={css.multiSelectContainer}
                inputClass={css.input}
                inputLabel='You send'
              />
            </div>
            <div>
              <div className={css.subTitle}>You get currencies</div>
              <MultiSelect
                setDefaultCurrency={handleChangeDefaultCrypto}
                onSelect={handleChangeCryptoCurrenciesList}
                list={cryptoCurrenciesList}
                containerClass={css.multiSelectContainer}
                inputClass={css.input}
                inputLabel='You get'
              />
            </div>
            <div>
              <div className={css.subTitle}>You send amount</div>
              <Input
                containerClass={css.inputContainer}
                inputClass={css.input}
                label='Amount'
                value={widgetData?.defaultFiatAmount || ''}
                onChange={toggleFormAmount}
              />
            </div>
          </div>
          <div>
            <div className={css.subTitle}>Your API key</div>
            <Input
              containerClass={css.inputContainer}
              inputClass={css.input}
              label='Insert your API key'
              value={widgetData?.xApiKey || ''}
              onChange={toggleFormApiKey}
            />
          </div>
        </>
      );
    }

    return (
      <>
        <div className={css.customizeTypes}>
          {breakpoint !== 'mobile' && (
            <div>
              <div className={css.subTitle}>Type</div>
              <div className={css.navBtns}>
                {typeBtns.map((btn) => (
                  <Button
                    key={btn.id}
                    active={btn.title.toLowerCase() === widgetData?.type}
                    onClick={toggleFormType}
                    name={btn.title}
                    className={css.navBtn}
                    disabled={btn.id === widgetData?.sell && widgetData?.sellButtonDisabled}
                    rounded
                    customBlue
                  >
                    {btn.title}
                  </Button>
                ))}
              </div>
            </div>
          )}
          <div>
            <div className={css.subTitle}>Direction</div>
            <div className={css.navBtns}>
              {flowBtns.map((btn) => (
                <Button
                  key={btn.id}
                  active={btn?.name === widgetData?.defaultSide || (!widgetData?.defaultSide && btn?.noDefaultSide)}
                  onClick={toggleFlowType}
                  name={btn?.name}
                  className={css.navBtn}
                  rounded
                  customBlue
                >
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className={cn(css.customizeTypes, { [css.customizePartnerUrl]: isPartnerUrl })}>
          <div>
            <div className={css.subTitle}>Theme</div>
            <div className={css.navBtns}>
              {themeBtns.map((btn) => (
                <Button
                  ariaLabel={btn.title}
                  key={btn.id}
                  active={btn.title.toLowerCase() === widgetData?.theme}
                  onClick={toggleFormTheme}
                  name={btn.title}
                  className={css.navBtn}
                  disabled={btn.id === widgetData?.sell && widgetData?.sellButtonDisabled}
                  rounded
                  customBlue
                >
                  {btn.component}
                </Button>
              ))}
            </div>
          </div>
        </div>
        {breakpoint !== 'mobile' && (
          <div className={css.customizeTypes}>
            <div>
              <div className={css.subTitle}>You send currencies</div>
              <MultiSelect
                setDefaultCurrency={handleChangeDefaultFiat}
                onSelect={handleChangeFiatCurrenciesList}
                list={fiatCurrenciesList}
                containerClass={css.multiSelectContainer}
                inputClass={css.input}
                inputLabel='You send'
              />
            </div>
            <div>
              <div className={css.subTitle}>You get currencies</div>
              <MultiSelect
                setDefaultCurrency={handleChangeDefaultCrypto}
                onSelect={handleChangeCryptoCurrenciesList}
                list={cryptoCurrenciesList}
                containerClass={css.multiSelectContainer}
                inputClass={css.input}
                inputLabel='You get'
              />
            </div>
            <div>
              <div className={css.subTitle}>You send amount</div>
              <Input
                containerClass={css.inputContainer}
                inputClass={css.input}
                label='Amount'
                value={widgetData?.defaultFiatAmount || ''}
                onChange={toggleFormAmount}
              />
            </div>
          </div>
        )}
        {/* <div>
        <div className={css.subTitle}>Your API key</div>
        <Input
          containerClass={css.inputContainer}
          inputClass={css.input}
          label='Insert your API key'
          value={widgetData?.xApiKey || ''}
          onChange={toggleFormApiKey}
        />
      </div> */}
      </>
    );
  },
);

Customise.displayName = 'Customise';

export { Customise };
