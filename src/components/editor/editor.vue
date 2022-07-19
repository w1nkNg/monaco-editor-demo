<template>
  <div id="container" style="width: 800px; height: 600px; border: 1px solid grey"></div>
</template>

<script setup lang="ts">
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import * as monaco from "monaco-editor";

import { onMounted, onUnmounted, inject } from "vue";

let instance: monaco.editor.IStandaloneCodeEditor;

const axios: any = inject("axios");

//@ts-ignore
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

onMounted(() => {
  console.log("editor onMounted.");
  instance = monaco.editor.create(document.querySelector("#container") as HTMLElement, {
    theme: "vs-dark",
    tabSize: 2,
    language: "javascript",
    automaticLayout: true,
    scrollBeyondLastLine: false,
  });
});

onUnmounted(() => {
  console.log("editor onUnmounted.");
  instance.dispose();
});

axios
  .get("/src/test/test.js")
  .then((res: any) => {
    instance.setValue(res.data);
  })
  .catch((err: any) => {
    console.log(err);
  });
</script>

<style scoped></style>
