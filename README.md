# Netflix Clone

### Check out this site live on this [Link](http://netflix-react.surge.sh/)

![Demo](https://github.com/yuchiu/netflix-clone/blob/master/demo2.gif)

## User Story

- user can see recommended movies on homepage.

- user can see description of a movie when mouse is hovering on movie's thumbnail.

- user can search for movies by titles.

- user can see detail description when I click on a movie's thumbnail.

- cast list is included in the description.

- responsive to different screen size.

### Usage

#### 1. install everything else

```
npm install
```

#### 2a. run on localhost

develop environment, run webpack dev server

```
npm start
```

This will get the files running on http://localhost:8080
Webpack will watch for changes and update the browser when file changes.

#### 2b. build dist directory

production environment, run webpack

```
npm run build
```

The minified JS bundle files including the output html file will be store in dist directory.
