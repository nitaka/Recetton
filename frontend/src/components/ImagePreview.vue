<template>
    <div>
      <bouton
        class="photo-preview"
        :style="{ 'background-image': `url(${previewImage})` }"
        @click="selectImage">
      </bouton>
   
      <input
        ref="fileInput"
        type="file"
        class="inp"
        @input="pickFile">
       
    </div>
  </template>
   
  <script>
  export default {
    name:  'FilePreview',
    
    data() {
        return {
          previewImage: null
        };
      },
    methods: {
        selectImage () {
            this.$refs.fileInput.click()
        },
        pickFile () {
          let input = this.$refs.fileInput
          let file = input.files
          if (file && file[0]) {
            let reader = new FileReader
            reader.onload = e => {
              this.previewImage = e.target.result
            }
            reader.readAsDataURL(file[0])
            this.$emit('input', file[0])
          }
        }
    }
  }
  </script>
   
  <style scoped lang="scss">
  .photo-preview {
      width: 80%;
      height: 150px;
      object-fit: none;
      display: block;
      cursor: pointer;
      margin: 0 auto 30px;
      background-size: cover;
      background-position: center center;
  }

  .inp {
    margin: auto;
  }
  </style>