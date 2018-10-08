# axc
A library that offers a variety of react components written in typescript.

The scope of this project is not to provide something like bootstrap, but to create a suite of components that behave as they should, leaving the styling to the specific project in which they are deployed.

## Documentation

You can check the documentation of all components in the following link
[Documentation page](https://alex-mas.github.io/axc/)

Documentation generated by [typedoc](https://typedoc.org/)


## Current components
- The api is not currently stable, so use at your own risk.
- Provided components have some basic styles required for the element, such as dropdown floating elements, etc. But they are suposed to be style independent and allow you to     provide your custom styles via className or appending rules to the element css class

### Modal 
When open it renders the contents above an overlay, it has harcoded fade transitions between open and closed states. Use cases can be: Dialogs, loading spinners, etc...

### Router 
Basic router to be extended, it implements a default strategy and the hooks for custom routing strategies.

### MemoryRouter
Router that implements a strategy based on a data structure similar to browser history(IMPORTANT: it doesn't edit or use the actual window location) and renders the children who's "path" prop matches partially/totally the active route.


#### Auxiliary MemoryRouter components
They are intended to be used inside a MemoryRouter, as they are history context consumers

##### MemoryRoute
Renders the provided component/children and bootstraps history and route properties into it

##### MemoryLink 
On click pushes the provided location into MemoryRouter's history.

### Carousel
Renders a container with the provided children and with two buttons to switch the active child

### LinkedCarousel
like carousel, but also renders a link to each child in the form of several circle icons

### TabContainer
Renders the active child and a button for each child.

### Dialog 
Extends modal, renders the given title, description and options inside a modal and implements hooks to listen for onClick events on the options.

### TypeWriter
Renders the text as if was being typed by a human. 

### AutoComplete
Costumizable input tag that implements the logic to display suggestions and the hooks to customize how those are obtained/managed

### Countdown
Component that has two modes, in one you set the time and in the other it counts down to 0 from the specified time, when it ends it calls provided function(if any)

### Stopwatch
Component that renders a stopwatch and two buttons to pause/start and reset it, by default starts counting from 0 but a custom starting amount can be specified via the start prop(numeric value in seconds)

## Usage

- clone this repository locally
- cd to the directory where the package.json lies
- type 'npm run build'
- require the desired files from the dist directory into your project (assuming you're using build tools such as webpack or other tools that make commonjs module syntax available in the browser), otherwise just include a script tag in your html pointint to the files 



## Styling components
To style the components i've set up the css classes in most of the elements, so you can just require the component styles and build up on that
I might switch to css in js in the future to make it simpler to use the components.

## TODO
List of components that I will probably implement

- Toggable icons (like google/facebook widgets)
- Formsabstraction
- Animation components -> FadeIn/FadeOut/etc... 
- Draggable/resizable containers
- Parallax background
- Image that on focus zooms in
- WYSIWYG editor / markup editor
- Pagination
- Component that sticks to the edge of the page when you its original position falls out of the page.
- Some loaders/spinners
- Data grid
- Calendar
- Wrapper of graphjs for simplicty
- Progress bars


## Folder structure

- dist: where the compiled/transpile code is generated
- src: where the source of the components and styles live
- tasks: folder where task scripts are located
- tests: where unit/e2e tests live, also there's a test project to play around with the componentss


## Stack used
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [node-sass](https://www.npmjs.com/package/node-sass) to build the styles
- [Jest](https://jestjs.io/) and [enzyme](https://github.com/airbnb/enzyme) to test the components
