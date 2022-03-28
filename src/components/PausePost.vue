<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

    const props = defineProps({
            'post' : {type : Object, require: true},
    })
    const post = props.post!;

    const baseUrl = import.meta.env.BASE_URL;
    
    const liked = ref(false);

    const completed = ref(false);

    const isPlaying = ref(false);

    const video = ref(null)

    const togglePlay = () => {
        let element : HTMLVideoElement = video.value!;
        if(!isPlaying.value){
            element.play();
        }else{
        element.pause();
        }
        isPlaying.value = !isPlaying.value;
    }

</script>
<template>
    <PostItem>
        <div class="post">
            <div class="header">
                <img class="profile-pic" src="@/assets/images/finsta_pastel_logo.jpg">

                <div class="profile-attr">
                    Mindfulness Break
                </div>

                <font-awesome-icon id="dots" :icon="['fas', 'ellipsis-h']" />
            </div>
        <div class="body">
            <img v-if="post.type == 'image'" class="post-img" :src="baseUrl+post.source">
            <div class="video-player" v-if="post.type == 'video'">
                <video class="post-img" :src="baseUrl+post.source"  ref="video"></video>
                <font-awesome-icon id="play"  @click="togglePlay" :icon="['fas', isPlaying ? 'pause' : 'play']" />
            </div>
            <div class="icons">
                <font-awesome-icon @click="liked = !liked" id="heart" :class="{filled : liked }" v-bind:icon="[ liked ? 'fas' : 'far' , 'heart']" />
                <font-awesome-icon id="comment" :icon="['far', 'comment']" />
                <font-awesome-icon id="send" :icon="['far', 'paper-plane']" />
                <font-awesome-icon @click="completed = !completed" id="bookmark" :class="{filled : completed }" v-bind:icon="[ completed ? 'fas' : 'far' , 'circle-check']" />
            </div>
        </div>
        <div class="footer">
            <p class="likes">{{post.likes + (liked ? 1 : 0)}}</p>
            <p class="caption">{{post.caption}}</p>
        </div>
        </div>
    </PostItem>
</template>

<style scoped>
.post{
    max-width: 500px;
    margin: auto;
    border: #0000002b 1px solid;
    margin-bottom: 10px;
}
.post .header{
    display: flex;
    padding: 8px;
}

.post .header .profile-pic{
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
}

.post .header .profile-attr{
    display: block;
    margin-left: 20px;
    margin-top: 13px;
    width: 80%;
}

.post .header #dots{
    color: rgb(0, 0, 0);
    transform: rotate(90deg);
}

.post .body .post-img{
    width: 100%;
    max-height: 31rem;
    object-fit: cover;
}

.post .body .icons{
    padding: 0.25rem;
}

.post .body .icons > * {
    padding-right: 0.35rem;
    cursor: pointer;
    height: 20px;
    width: 20px;
}

.post .body .icons > *:hover, .post .body .icons > *:focus {
    color: grey
}

.post .body .icons .filled:hover{
    color:red;
}

.post .body #heart.filled{
    color:red;
}
.post .body #bookmark{
    float: right;
}

.post .body #bookmark.filled{
    color: green
}
.post .body #play:hover, .post .body #play:focus{
    color: black;
}

.post .body .video-player{
    position: relative;
}

.post .body #play{
    position: absolute;
    top: 45%;
    left: 45%;
    font-size: 50px;
    color: #6662629e;
}

.post .body #play:hover, .post .body #play:focus{
    color: black;
}
.post .footer{
    padding: 0.35rem;
}
.likes{
    font-weight: bold;
    font-size: 14px;
}

.username{
    font-weight: bold;
}

.post .header .profile-attr > span{
    display: block;
}

.post .header .profile-attr .profile-location{
    color: grey;
}

.post .body .post-img{
    width: 100%;
}
</style>