import styled, {CSSObject} from 'styled-components';
import {gameConfig} from '../../config/game-config';

export const ContainerStyled = styled.div(
  (): CSSObject => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: gameConfig.container.maxWidth,
    height: gameConfig.container.maxHeight,
    maxWidth: gameConfig.container.maxWidth,
    maxHeight: gameConfig.container.maxHeight,
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
    '@media(max-width: 359px) and (min-height: 640px)': {
      width: '100vw',
      height: `calc(100vw * 16 / 9)`,
    },
    '@media(max-height: 639px) and (min-width: 360px)': {
      width: `calc(100vh * 9 / 16)`,
      height: `100vh`,
    },
    '@media(max-width: 359px) and (max-height: 639px)': {
      width: '100vw',
      height: `calc(100vw * 16 / 9)`,
    },
    '@media(max-width: 359px) or (max-height: 639px)': {
      borderRadius: '12px'
    },

  }),
);

/*
*
let viewportHeight = 640

let maxWidth = 360
let maxHeight = 640

let boxWidth = 0
let boxHeight = 0

if (viewportWidth >= 360 && viewportHeight >= 640) {
    boxWidth = maxWidth
    boxHeight = maxHeight
}
else if (viewportWidth <= 360 && viewportHeight <= 640) {
    //
    * boxWidth = (maxHeight * 9 / 16);
    * boxH
}

else if (viewportWidth <= 360 && viewportHeight >= 640) {
    // viewportWidth = 300, viewportHeight = 700
    boxWidth = viewportWidth
    boxHeight = boxWidth * (16 / 9)
    // boxWidth = 300, boxHeight = 533.33
}

else if
*
* */
