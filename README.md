# 📦 Metadata Module
[![dependencies status](https://david-dm.org/guivic/fastify-socket.io/status.svg)](https://david-dm.org/guivic/fastify-socket.io#info=dependencies)
[![dev-dependencies status](https://david-dm.org/guivic/fastify-socket.io/dev-status.svg)](https://david-dm.org/guivic/fastify-socket.io#info=devDependencies)
[![Build Status](https://travis-ci.org/guivic/fastify-socket.io.svg?branch=master)](https://travis-ci.org/guivic/fastify-socket.io)
[![npm version](https://badge.fury.io/js/%40guivic%2Ffastify-socket.io-guivic.svg)](https://badge.fury.io/js/%40guivic%2Ffastify-socket.io-guivic)

> Easy metadata service system integration with Nuxt.js and Vuex

## ✅ Features

✓ Exposes `set` function to easily share metadatas across all components (sharing a color for a theme for expose)

✓ Exposes `get` function so you can bind reactivity based on a metadata update

## Installation

```bash
npm install @guivic/metadata-module --save

yarn add @guivic/metadata-module
```

## Usage

```javascript
// nuxt.config.js

	/*
	** Nuxt.js modules
	*/
	modules: [
		'@guivic/metadata-module',
	]
  

  // component.vue
  $metadata.set({
      key: 'value'
  });
  
  $metadata.get()
  
  // { key: 'value' }
```

## Development

1. Clone this repository
2. Install dependencies using `yarn` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## Author

Guillaume Galas from [Guivic](https://guivic.io)

## 📑 License

[MIT License](./LICENSE)

Copyright (c) Guivic
