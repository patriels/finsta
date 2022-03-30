import { createApp } from 'vue'
import App from './App.vue'

/*Font Awesome library*/
import { library } from '@fortawesome/fontawesome-svg-core'
/*Import heart icon in solid and regular*/
import { faHeart as fasHeart, fas } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
/*Import comment icon in solid and regular*/
import { faComment as fasComment } from '@fortawesome/free-solid-svg-icons'
import { faComment as farComment } from '@fortawesome/free-regular-svg-icons'
/*Import paper plane icon in solid and regular*/
import { faPaperPlane as fasPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane as farPaperPlane } from '@fortawesome/free-regular-svg-icons'
/*Import bookmark icon in solid and regular*/
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'

/*Import hortizontal ellipses icon in solid and regular*/
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

/*Import plays icon in solid and regular*/
import { faPlay } from '@fortawesome/free-solid-svg-icons'

/*Import plays icon in solid and regular*/
import { faPause } from '@fortawesome/free-solid-svg-icons'

/*Import bookmark icon in solid and regular*/
import { faCircleCheck as fasCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck as farCircleCheck } from '@fortawesome/free-regular-svg-icons'


/*Import font-awesome component*/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fasHeart, farHeart, fasComment, farComment, fasPaperPlane, farPaperPlane, farBookmark, fasBookmark,faEllipsisH, faPlay, faPause, fasCircleCheck, farCircleCheck)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
