<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<style scoped>
h1 {

  font-size: 1.5rem;
  position: relative;
  letter-spacing:5px;
  text-align: center;
  color:#FF1493;
  font-family:serif;
  font-weight:bold;
  opacity:1;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}

</style>
