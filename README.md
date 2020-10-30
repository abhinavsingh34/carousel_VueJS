# vuetest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

I have implemented test case by using test cafe.

## First you need to  run this below command for test case:

npm install testcafe --save-dev

## after that add  below command in scripts section in package.json file .

"test": "testcafe chrome tests/*.test.js --app \"npm run serve\" -S -s screenshots"

after that run command "npm run test" .
