<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="api-status">
      <p v-if="loading">loading...</p>
      <p v-else-if="error">oh no there was an error: {{ error }}</p>
      <p v-else-if="data">{{ data }}</p>
    </div>
  </div>
</template>

<script>
import { getData } from '../utils/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    this.loading = true
    getData()
      .then(data => {
        if (data.error) {
          this.error = data.error
        } else {
          this.data = data.msg
        }
      })
      .catch(err => this.error = err)
      .finally(() => this.loading = false)
  },
  data() {
    return {
      loading: false,
      data: null,
      error: null,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
