<template>
  <div>
    <input v-model="data" placeholder="enter data here" /><br />
    <div>
      <span>File Path:</span
      ><span id="file_path" ref="filePath">
        /home/ning/Projects/VUE/editor-proj/src/test/test.ts</span
      >
      <button @click="modifyFile">Modify</button>
      <button @click="done">Done</button>
    </div>
    <Editor v-if="display"></Editor>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import Editor from "./components/editor/editor.vue";

let data = ref("");
let display = ref(false);
let filePath = ref("");

let modifyFile = () => {
  let _path = document.querySelector("#file_path")?.textContent;
  display.value = true;
};

let done = () => {
  display.value = false;
};
</script>
