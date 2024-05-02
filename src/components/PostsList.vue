<!-- resuable component + fetch + axios -->

<script>
import getPosts from '@/composables/getPosts';

// import axios from 'axios';
// import {  ref } from 'vue';

    export default {
        setup() {


            // exported the fetch/axios function from another getPosts.js file so it could resuable
             const {posts, error, load } = getPosts()

             load()

            
            // const posts = ref([])
            // const error = ref(null)


// ******* using fetch **********
           
            // const load = async () => {
            //    try {
                
            //     const response = await fetch('http://localhost:3000/posts')
            //     console.log(response)
// fetch handles data using ok property unlike axios with status code
            //     if (!response.ok) {
            //         throw new Error('Failed to fetch data')
            //     }
// reponse.json() itself returns a promise to give you the actual body,
// so YOU HAVE to await it again apart from the await above at fetch 
// ... unlike axios you only await in the beginning but the rest promise is done by axios.get itself
            //     const data = await response.json()
            //     posts.value = data
              
            // } 
               
            //     catch (error) {
            //     console.log(error)
            //     error.value = error.message
            //    }
            // }


// ************* using axios *************

            // const load = async () => {
            //     try {
            //         const response = await axios.get('http://localhost:3000/posts');
            //         console.log(response);
                    
            //         // axios handles data using status code
            //         if (response.status !== 200) {
            //             throw Error('Failed to fetch data');
            //         }
                    
            //         const data = response.data;
            //         posts.value = data;
            //     } catch (error) {
            //         error.value = error.message;
            //         console.error(error.value);
            //     }
            // };

            // don't forget to call it!
            // load()
                
            // OR  
        // Call load() function when the component is mounted
        // onMounted(load);


            return {
                posts,
                error,
            }
        }
    }
</script>



<template>
    <div>

        <!-- Display error message if error is not null -->
        <div v-if="error" class="error-message">
           <h2> NO data avaialiable {{ error }} </h2>
        </div>


        <div v-if="posts.length">

            <div v-for="(post, index) in posts" :key="post.id">
                <h2> {{ index + 1}}) {{ post.title }} </h2>
                <h4>{{ post.body }}</h4> <br/>
            </div>


        </div>

        <div v-else>
            <h2>Loading ... </h2>

        </div>

       
      

    </div>
</template>

<style scoped>

</style>