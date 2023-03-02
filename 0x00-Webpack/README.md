## This project is about: WEBPACK
1. Initializing a new project - npm init -y

2. install webpack and webpack CLI (command line interface) locally: 
- npm install webpack webpack-cli --save-dev
- npm install babel-loader @babel/core @babel preset-env @babel/preset-react --save-dev
- npm install style-loader css-loader file-loader image-webpack-loader url-loader --save-dev

3. Open package.json and change the scripts:
- "dev": "webpack --mode development",
- "build": "webpack --mode production"
4. npm run dev