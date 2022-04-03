<script setup lang="ts">
    import {ref, onMounted, onUnmounted, reactive} from "vue"
    //import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    const props = defineProps({
            'post' : {type : Object, require: true},
            'pause' : {type : Boolean, require : true},
            'id' : {type: Number, require: true}
    });
 
    const baseUrl = import.meta.env.BASE_URL;
    const post = props.post!;
    const pause = props.pause!;
    const id = props.id!;

    const liked = ref(false);
    const readMore = ref(true);

    let videos : HTMLCollection;
    const postItem = ref(null);
    const pauseVideos = () => {
        let element : HTMLDivElement = postItem.value!,
            rect = element.getBoundingClientRect(),
            windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        if (rect.bottom <= (windowHeight - (windowHeight/2)))
        {
            for(let i = 0; i < videos.length; i++){
                let vid = <HTMLVideoElement>videos[i]
                vid.pause();
            }
        }
    }

    onMounted(() => {
  	    //window.addEventListener("scroll", pauseVideos)
        //videos = document.getElementsByClassName("video_"+id)
    })

    onUnmounted(() => {
  	   // window.removeEventListener("scroll", pauseVideos)
    })
</script>

<template>
    <PostItem>
        <div class="post" :class="{'pause-post' : pause}" ref="postItem">
            <div class="header">
                <img class="profile-pic" :src="!pause ? baseUrl+post.profile : baseUrl+'images/finsta_pastel_logo.jpg'">

                <div class="profile-attr">
                    <span class="profile-user">{{!pause ? post.user : 'Mindfulness Break'}}</span>
                    <span v-if="!pause" class="profile-location">{{post.location}}</span>
                </div>

                <!--<font-awesome-icon id="dots" :icon="['fas', 'ellipsis-h']" />-->
            </div>
        <div class="body">
            <carousel :items-to-show="1">
                <slide v-for="(slide,index) in post.content" :key="index">
                    <div class="carousel__item">
                        <img v-if="slide.type == 'image'" class="post-img" v-bind:src="baseUrl+slide.source">
                        <div class="video-player" v-if="slide.type == 'video'">
                            <video controls class="post-img" :class="'video_'+id" :src="baseUrl+slide.source"  :id="'video_'+index"></video>
                        </div>
                    </div>
                </slide>
                <template #addons="{ slidesCount, currentSlide  }">
                    <navigation v-if="slidesCount > 1" :class="{ 'is-first-slide': !currentSlide, 'is-last-slide':  currentSlide ===  slidesCount - 1 }"/>
                    <pagination v-if="slidesCount > 1"/>
                </template>
            </carousel>
            <div class="icons">
                <font-awesome-icon @click="liked = !liked" id="heart" :class="{filled : liked }" v-bind:icon="[ liked ? 'fas' : 'far' , 'heart']" />
                <!--<font-awesome-icon id="comment" :icon="['far', 'comment']" />
                <font-awesome-icon id="send" :icon="['far', 'paper-plane']" />
                <font-awesome-icon id="bookmark" :icon="['far', 'bookmark']" />-->

            </div>
        </div>
        <div class="footer">
            <p v-if="!pause" class="caption">
                <span class="username">{{post.user}}</span>
                <span v-if="readMore">{{post.caption.slice(0, 100)}}</span>
                <span v-if="!readMore">{{post.caption}}</span>
                <span class="read-more" v-if="readMore" @click="readMore = !readMore">..more</span>
            </p>
            <p v-else class="caption">{{post.caption}}</p>
        </div>
        </div>
    </PostItem>
</template>
<style>
@import "vue3-carousel/dist/carousel.css";
.carousel__prev,.carousel__next{
    color: ffffff85;
    background: #80808085;
    transform: none;
}

.carousel__prev:hover,.carousel__next:hover{
    color: #fff;
    background: grey;
}
.carousel__prev{
    margin-left: 0.75%;
}
.carousel__next{
    margin-right: 0.75%;
}
.carousel__pagination-button{
    background: grey;
}
.carousel__pagination-button--active {
  background-color: darkgrey;
}

.carousel__item{
    width: 100%;
}

.is-first-slide.carousel__prev,.is-last-slide.carousel__next{
    display: none;
}

.carousel__pagination{
    margin: 0;
}
</style>
<style scoped>
.post{
    max-width: 500px;
    margin: auto;
    border: #0000002b 1px solid;
    margin-bottom: 10px;
}

.post.pause-post{
    background: #63a7b7;
    color: #fff;
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
    max-height: 70vh;
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