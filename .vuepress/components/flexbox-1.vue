<template>
  <div class="container">
    <div class="box-1">
      <h3>Box 1</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="box-2">
      <h3>Box 2</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="box-3">
      <h3>Box 3</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "flexbox-1"
};

</script>

<style scoped>
.container div {
    border: 1px #ccc solid;
    padding: 10px;
}

.container {
    display: flex;
}

.box-1 {
    flex:1
}

.box-2 {
    flex:2
}

.box-3 {
    flex:1
}

</style>
