<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue"
  import getPosts from '@/assets/scripts/post-loader'
  import PostItem from "@/components/Post.vue"

  const postsN = ref(getPosts(4, false));

  const scrollComponent = ref(null);

  const loadMorePosts = () => {
    let newPosts = getPosts(4 , false);
    postsN.value.push(...newPosts);
  }

  onMounted(() => {
  	window.addEventListener("scroll", handleScroll)
  })

  onUnmounted(() => {
  	window.removeEventListener("scroll", handleScroll)
  })

 	const handleScroll = (e : Event) => {
    let element : HTMLDivElement  = scrollComponent.value!;
    if (element.getBoundingClientRect().bottom <= window.innerHeight) {
      loadMorePosts();
    }
  };
</script>

<template>
  <main>
    <div class="scrolling-container" ref="scrollComponent">
        <PostItem v-for="(post,index) in postsN" :key="index" :post="post"/>
    </div>    
  </main>
</template>
