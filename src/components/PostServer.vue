<script setup lang="ts">
import PausePost from "@/components/PausePost.vue"
import PostItem from "@/components/Post.vue"

const props = defineProps({
        'post' : {type : Object, require: true},
        'id' : {type : Number, require: true}  
})

const post = props.post!;
const  id = props.id!;
</script>

<template>
    <PostType>
        <PausePost v-if = "(id + 1) % 5 == 0" :post ="post"/>
        <PostItem v-else :post="post" />
    </PostType>
</template>
