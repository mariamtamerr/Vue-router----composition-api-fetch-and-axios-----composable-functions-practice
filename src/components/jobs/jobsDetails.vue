<template>
    <div>
<h2>this is details of job</h2> <br/>

<h2 style="color:brown">the router param dynamic object is : {{ $route.params.id }}</h2>
<h2 style="color:brown">the router param using data options api object is : {{ id }}</h2>
    </div>
</template>

<script>

export default {



data() {
    return {
        id: this.$route.params.id, 
    }
}
}
</script>

<style lang="scss" scoped>

</style>