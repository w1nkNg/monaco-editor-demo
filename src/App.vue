<template>
  <div>
    <!-- <input v-model="data" placeholder="enter data here" /><br /> -->
    <div>
      <span>File Path:</span
      ><span id="file_path" ref="filePath">
        /home/ning/Projects/VUE/editor-proj/src/test/test.ts</span
      >
      <img id='output'>

      <!-- <button @click="testFile"> Open Directory</button> -->
      <button @click="getFile">Modify</button>
      <button @click="done">Done</button>
    </div>
    <Editor v-if="display"></Editor>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent,onMounted } from "vue";
import Editor from "./components/editor/editor.vue";

let data = ref("");
let display = ref(false);
let filePath = ref("");

let modifyFile = () => {
  let _path = document.querySelector("#file_path")?.textContent;
  display.value = true;
};

// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await (window as any).showOpenFilePicker();

  if (fileHandle.kind === 'file') {
    console.log("This is file kind");
    const file = await fileHandle.getFile();
    const contents = await file.text();
    console.log(contents);

    return;
    // run file code
  } else if (fileHandle.kind === 'directory') {
    // run directory code
    console.log("This is directory find");
    return;
  }

}

let done = () => {
  display.value = false;
};
</script>
