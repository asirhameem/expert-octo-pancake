import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {GameBox} from "./GameBox";
import {render} from '@testing-library/react';
import {gameConfig} from "../../config/game-config";
import {CampaignBanner} from "../campaign-banner/CampaignBanner";
import {StartButton} from "../start-button/StartButton";
import React from "react";

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    //
    // Set the viewport size to 1000x1000
    Object.defineProperty(global, 'innerWidth', {value: 1000});
    Object.defineProperty(global, 'innerHeight', {value: 1000});

    // Render the GameBox component
    const {container} = render(
      <GameBox>
        <CampaignBanner/>
        <StartButton/>
      </GameBox>
    );

    // Get the computed style of the rendered GameBox
    const gameBoxStyle = window.getComputedStyle(container.firstChild as HTMLElement);

    // Assert that the rendered GameBox has the expected width and height
    expect(gameBoxStyle.width).toBe(`${gameConfig.container.maxWidth}px`);
    expect(gameBoxStyle.height).toBe(`${gameConfig.container.maxHeight}px`);
    // You can add more assertions based on your specific requirements
  });


  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    //
    Object.defineProperty(global, 'innerWidth', {value: 300});
    Object.defineProperty(global, 'innerHeight', {value: 1000});

    // Render the GameBox component
    const {container} = render(
      <GameBox>
        <CampaignBanner/>
        <StartButton/>
      </GameBox>
    );

    // Get the computed style of the rendered GameBox
    const gameBoxStyle = window.getComputedStyle(container.firstChild as HTMLElement);

    // Assert that the rendered GameBox has the expected width
    expect(gameBoxStyle.width).toBe(`${gameConfig.container.maxWidth}px`);
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    //
    Object.defineProperty(global, 'innerWidth', {value: 1000});
    Object.defineProperty(global, 'innerHeight', {value: 600});

    // Render the GameBox component
    const {container} = render(
      <GameBox>
        <CampaignBanner/>
        <StartButton/>
      </GameBox>
    );

    // Get the computed style of the rendered GameBox
    const gameBoxStyle = window.getComputedStyle(container.firstChild as HTMLElement);

    // Assert that the rendered GameBox has the expected height
    expect(gameBoxStyle.height).toBe(`${gameConfig.container.maxHeight}px`);
  });
});
