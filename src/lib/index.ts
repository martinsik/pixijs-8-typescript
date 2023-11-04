import { a } from './pkg.js';

import * as PIXI from 'pixi.js';

window.addEventListener('load', (event) => {
    const canvas = document.querySelector('canvas');

    // Create the application helper and add its render target to the page
    let app = new PIXI.Application({
        hello: true,
        resizeTo: window,
        view: canvas,
    });

    // Create the sprite and add it to the stage
    let sprite = PIXI.Sprite.from('/assets/sample.png');
    app.stage.addChild(sprite);

    // Add a ticker callback to move the sprite back and forth
    // let elapsed = 0.0;
    // app.ticker.add((delta) => {
    //     elapsed += delta;
    //     sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    // });

    console.log(a);
});
