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
  <header>
    <p>Finsta</p>
  </header>
  <main>
    <div class="scrolling-container" ref="scrollComponent">
        <PostType v-for="(post,index) in posts" :key="index" :post="post" :id="index"/>
    </div>
  </main>
</template>

<style>
body{
  background-color: #fafafa;
  margin: 0;
}

#app {
  width: 100%;
  padding: 2rem;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-top: 0;
  margin: 0;
  padding: 0;
}


header{
  font-size: 4rem;
  background-color: #fff;
  margin-bottom: 1rem;
}

header p{
  font-size: 3rem;
  width: 100%;
  text-align: center;
  margin: 0;
}
</style>
