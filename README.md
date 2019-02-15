# Vue Fitty

Fitty text wrapper for Vue

[![npm (scoped with tag)](https://img.shields.io/npm/v/vue-fitty/latest.svg?style=flat-square)](https://npmjs.com/package/vue-fitty)
[![npm](https://img.shields.io/npm/dt/vue-fitty.svg?style=flat-square)](https://npmjs.com/package/vue-fitty)
[![Dependencies](https://david-dm.org/schlunsen/vue-fitty/status.svg?style=flat-square)](https://david-dm.org/schlunsen/vue-fitty)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

## Usage

```
<template>
    <div>
        <!-- Wrap your component with Fitty -->
        <fitty :options="options">
            <template v-slot:content>
            
              <h1>FITTED TEXT HERE</h1>

            </template>
        </fitty>
    </div>
</template>
import Fitty from 'vue-fitty' 
import MyAwesomeComponent from 'my/aweseome/path'

// Install plugin 
Vue.use(Fitty)

export default {
  data: () => ({
      options: {
        minSize: 11,
        maxSize: 120,
      }
  }),
  components: {
    MyAwesomeComponent
  }
  ...
}

```

