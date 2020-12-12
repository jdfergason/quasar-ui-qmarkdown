(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"6c79":function(n,e,a){"use strict";a.r(e),e["default"]='<template>\n  <div class="q-pa-md q-gutter-sm" style="max-width: 800px; width: 100%;">\n    <q-toggle v-model="model" label="Disable Heading Anchor Links (hover to see difference)"></q-toggle>\n    <div class="q-ma-md q-gutter-sm">\n      <div>The TOC (Table of Contents) Start and End properties also control the Heading anchor links</div>\n      <div>TOC Start: {{ range.min }}</div>\n      <div>TOC End: {{ range.max }}</div>\n    </div>\n    <q-range\n      v-model="range"\n      :min="1"\n      :max="6"\n      label-always\n    />\n    <q-markdown\n      :no-heading-anchor-links="model"\n      :toc-start="range.min"\n      :toc-end="range.max"\n    >\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n    </q-markdown>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      model: false,\n      range: {\n        min: 1,\n        max: 3\n      }\n    }\n  }\n}\n<\/script>\n'}}]);