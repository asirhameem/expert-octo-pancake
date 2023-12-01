import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {GameBox} from "./GameBox";
import {CampaignBanner} from "../campaign-banner/CampaignBanner";
import {StartButton} from "../start-button/StartButton";
import {TestElement} from "../../enums/TestElement";
import {gameConfig} from "../../config/game-config";

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    //
    Object.defineProperty(screen, 'innerWidth', { value: 1000 });
    Object.defineProperty(screen, 'innerHeight', { value: 1000 });

    render(
      <GameBox>
        <CampaignBanner/>
        <StartButton/>
      </GameBox>
    );

    const boxElement = screen.getByTestId(TestElement.GAME_BOX);

    expect(getComputedStyle(boxElement).width).toBe(`${gameConfig.container.maxWidth}px`);
    expect(getComputedStyle(boxElement).height).toBe(`${gameConfig.container.maxHeight}px`);
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    //

  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    //
  });
});
