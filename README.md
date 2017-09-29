# Netflix Clone

Search and recommend movies similar to Netflix.

In combinations of React, Redux and React Router to create view layer for single page app. Configured Webpack to provides tools for both dev and prod env, such as Hot-reload, PostCSS, and Autoprefixer to ensure styles are supported across modern browsers.

### Check out this site live on this [Link](http://netflix-react.surge.sh/) 

![Demo](https://github.com/yuchiu/netflix-clone/blob/master/demo.gif) 

## User Story

- user can see recommended movies on homepage.

- user can see description of a movie when mouse is hovering on movie's thumbnail.

- user can search for movies by titles.

- user can see detail description when I click on a movie's thumbnail.

- cast list is included in the description.

- responsive to different screen size.


### Usage 
#### 1. First install package cross-env globally

```
npm i -g cross-env

```
Ensure npm scripts work properly across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost
develop environment, run webpack dev server

```
npm start

```
This will get the files running on http://localhost:8080
Webpack will watch for changes and update the browser when file changes.

#### 3b. build dist directory
production environment, run webpack

```
npm run build

```
The minified JS bundle files including the output html file will be store in dist directory.


## Appreciation for all the great online Learning Resources that are provided for free.

#### Great Community: 
- inspired by kuanhsuh, his [post](https://forum.freecodecamp.org/t/check-it-out-my-netflix-clone-with-react/113587)
- Guide Line for Learning, FreeCodeCamp, [link](https://www.freecodecamp.org/)

#### Webpack: 
- Webpack Config Basics, by Matthew Hsiung, [link](https://www.youtube.com/playlist?list=PLnUE-7Cz5mHFU_qrXCxZlk0925nCMYKVS)
- Webpack & CSS, by Matthew Hsiung, [link](https://www.youtube.com/playlist?list=PLnUE-7Cz5mHExcBWO9VV_GN-fniE2l-CR)
- Webpack Config Advanced, by Matthew Hsiung, [link](https://www.youtube.com/playlist?list=PLnUE-7Cz5mHERezkTJfh0iU0LESkHmSxA)

#### CSS: 
- Performant CSS Animations: Netflix Case Study, by Eli White's, [link](http://eng.wealthfront.com/2015/06/30/implementing-netflix-redesign/)
- CSS Animations Neflix carousel, by Matthew James Taylor, [link](https://codepen.io/mattjamestaylor/pen/dodYPr)
- Netflix Style Carousel, by Jonathan Carroll, [link](https://codepen.io/jonathanlcarroll/pen/aNgRBb?q=Netflix&limit=all&depth=everything&show_forks=false)

#### redux:
- React+Redux+Webpack, by Kurt Weiberth, [link](https://www.youtube.com/playlist?list=PLQDnxXqV213JJFtDaG0aE9vqvp6Wm7nBg)

#### API:
- themoviedb, [link](https://www.themoviedb.org/documentation/api)
