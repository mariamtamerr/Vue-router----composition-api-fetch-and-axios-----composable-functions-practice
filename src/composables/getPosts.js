import axios from "axios";
import { ref } from "vue";


const getPosts = () => {

       
    const posts = ref([])
    const error = ref(null)

    
    const load = async () => {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            console.log(response);
            
            // axios handles data using status code
            if (response.status !== 200) {
                throw Error('Failed to fetch data');
            }
            
            const data = response.data;
            posts.value = data;
        } catch (error) {
            error.value = error.message;
            console.error(error.value);
        }
    };


    return {load, error, posts}
}

export default getPosts 