# Life in Grey

## Five Minutes to Showtime

A monochrome voxel point-and-click silent-comedy adventure. Retrieve the missing hat from the circus wagon, recover from a few mishaps, and make an entrance.

- Play on ChatGPT hosting: https://life-in-grey.achallakiran.chatgpt.site
- GitHub Pages: https://achallakiran.github.io/life-in-grey/

Tap the ground to walk and objects to interact. The pocket appears when you collect an item; select the item and tap where to use it. Only pause and the contextual pocket are shown during gameplay. Turn phones to landscape.

The title menu includes Continue, New Game, Chapters, Settings and Credits. Progress saves at puzzle checkpoints in the current browser. Settings include music/effects volume, mute, graphics quality, grain, vignette, optional flicker, reduced motion, interaction feedback and intertitle size. Flicker is off by default. The accompaniment uses original phrases and offline synthesized piano samples.

Character experiments remain separate at `studio.html` and `character-study.html`. The main game does not show modelling sliders or diagnostics.

## Offline and development

`index.html` embeds the engine and scene and can be saved and opened offline without a CDN or server. A software renderer is available if WebGL cannot start; its visual detail and performance differ from hardware rendering.

Editable source is in `src/`. Install the pinned dependencies with `npm install`, then run `npm run build`. GitHub Pages publishes the main branch through Actions.

Three.js is included under its MIT license, retained in the HTML bundle.
