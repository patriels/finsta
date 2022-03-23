<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue"
  import getPosts from '@/assets/scripts/post-loader'
  import PostType from "@/components/PostServer.vue"

  const posts = ref(getPosts(4, true));

  const scrollComponent = ref(null)

  const loadMorePosts = () => {
    let newPosts = getPosts(4, true);
    posts.value.push(...newPosts);
  }

  onMounted(() => {
  	window.addEventListener("scroll", handleScroll)
  })

  onUnmounted(() => {
  	window.removeEventListener("scroll", handleScroll)
  })

 	const handleScroll = (e : Event) => {
    let element : HTMLDivElement = scrollComponent.value!;
    if (element.getBoundingClientRect().bottom <= window.innerHeight) {
      loadMorePosts();
    }
  };
</script>

<template>
  <main>
    <div class="scrolling-container" ref="scrollComponent">
        <PostType v-for="(post,index) in posts" :key="index" :post="post" :id="index"/>
    </div>    
  </main>
</template>
