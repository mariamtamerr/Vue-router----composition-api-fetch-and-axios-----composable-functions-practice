
<script>
export default {
  name:'App',
  data() {
    return {
     
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1) // here hit is router NOT route .. route is for id params .. router is for navigation
    } ,

    goForward() {
      this.$router.go(1)
    },

    redirect() {
      this.$router.push({name:'Home'})
      // or
      // this.$router.push('/')
    }
  }
}
</script>

<template>

<div>

  <router-link to="/">Home</router-link> <br/><br/>
  <router-link to="/hello-world">Hello World</router-link> <br/><br/>
  <router-link to="/jobs">Jobs</router-link>  <br/><br/>
  <router-link to="/posts">Posts</router-link>  <br/><br/>


  <!-- navgation  -->
  <button @click="goBack">back</button> <br/>
  <button @click="goForward">forward</button> <br/>
  <button @click="redirect">redirect</button> <br/>

  <main>
    <router-view/>
  </main>


</div>



</template>

<style scoped>

</style>
