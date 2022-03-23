<script setup lang="ts">
import {ref} from "vue"

const props = defineProps({
        'post' : {type : Object, require: true},
});

const baseUrl = window.location.href;
const post = props.post!;

const liked = ref(false);
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

const readMore = ref(true);

</script>
<template>
    <PostItem>
        <div class="post">
            <div class="header">
                <img class="profile-pic" :src="baseUrl+post.profile">

                <div class="profile-attr">
                    <span class="profile-user">{{post.user}}</span>
                    <span class="profile-location">{{post.location}}</span>
                </div>

                <font-awesome-icon id="dots" :icon="['fas', 'ellipsis-h']" />
            </div>
        <div class="body">
            <img v-if="post.content[0].type == 'image'" class="post-img" v-bind:src="baseUrl+post.content[0].source">
            <div class="video-player" v-if="post.content[0].type == 'video'">
                <video class="post-img" :src="baseUrl+post.content[0].source"  ref="video"></video>
                <font-awesome-icon id="play"  @click="togglePlay" :icon="['fas', isPlaying ? 'pause' : 'play']" />
            </div>
            <div class="icons">
                <font-awesome-icon @click="liked = !liked" id="heart" :class="{filled : liked }" v-bind:icon="[ liked ? 'fas' : 'far' , 'heart']" />
                <font-awesome-icon id="comment" :icon="['far', 'comment']" />
                <font-awesome-icon id="send" :icon="['far', 'paper-plane']" />
                <font-awesome-icon id="bookmark" :icon="['far', 'bookmark']" />

            </div>
        </div>
        <div class="footer">
            <p class="likes">{{post.likes + (liked ? 1 : 0)}}</p>
            <p class="caption">
                <span class="username">{{post.user}}</span>
                <span v-if="readMore">{{post.caption.slice(0, 100)}}</span>
                <span v-if="!readMore">{{post.caption}}</span>
                <span class="read-more" v-if="readMore" @click="readMore = !readMore">..more</span>
            </p>
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
    margin-top: 4px;
    width: 80%;
}

.post .header #dots{
    color: rgb(0, 0, 0);
    transform: rotate(90deg);
}

.post .header .profile-attr > span{
    display: block;
}

.post .header .profile-attr .profile-location{
    color: grey;
}

.post .body .post-img{
    width: 100%;
    max-height: 31rem;
    object-fit: cover;
}

.post .body .icons{
    padding: 0.35rem;
}

.post .body .icons > * {
    padding-right: 0.8rem;
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
.post .body #play:hover, .post .body #play:focus{
    color: black;
}
.post .body .video-player{
    position: relative;
}

.post .body #play{
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: #6662629e;
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

.post .caption{
    white-space: pre-wrap;
}

.post .caption .read-more{
    color: #504f4f;
    cursor: pointer;
    padding-left: 3px;
}
.post .header .profile-attr > span{
    display: block;
}


.post .header .profile-attr .profile-location{
    color: #504f4f;
}

.post .body .post-img{
    width: 100%;
}
</style>