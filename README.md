# fitty

** UNDER CONSTRUCTION **

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
        <fitty :animation="'circle'" :options="options">
            <template v-slot:content>
            
            <!-- CONTENT HERE -->
            <my-awesome-component></my-awesome-component>

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
        duration: 1000,
        radius: 2000,
        delay: 1000
      }
  }),
  components: {
    MyAwesomeComponent
  }
  ...
}

```

