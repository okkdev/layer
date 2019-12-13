# layer

\> layered life

## Run dev instance

``` bash
# install dependencies
$ npm install
# serve with hot reload at localhost:3000
$ npm run dev
```

## Deploy

``` bash
# generate static site in /public folder
$ npm run generate
```

## Add command

There is a template at `/components/commands/Template.vue`.

1. Create a new command component
1. Import the component in `/components/Commandline.vue`
1. Create a new case in the switch of the commandline
1. Add command to `/components/commands/Help.vue`
