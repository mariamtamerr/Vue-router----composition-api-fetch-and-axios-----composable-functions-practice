<template>
    <div>
<h2>this is jobs parent</h2>


<div v-for="job in jobs" :key="job.id">
 
    <!-- top access each job using its id .. ex : job/1 and job/2 and job/3 -->
    <!-- we use params  -->
    <!-- :to= { name:''   ,   params: { key:value }   } -->
   <router-link :to="{name:'Jobs Details' , params: {id: job.id}}">{{ job.title }}</router-link> <br/> <br/>
</div>



    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                jobs: [
                    {title:'job 1', id:1},
                    {title:'job 2', id:2},
                    {title:'job 3', id:3},
                ]
            }
        }
    }
</script>

<style scoped>

</style>