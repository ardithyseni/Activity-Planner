<template>
  <article class="post">
    <h4 class="title">{{ activity.title }}</h4>
    <p>{{ textUtility_capitalize(categories[activity.category].text) }}</p>
    <p>{{ activity.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Ardit Hyseni</a> updated {{ activity.updatedAt | prettyTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- <span>Progress : <span :class="'color-' + activityProgress">
          {{ activity.progress }} %</span> </span> -->
          <span>Progress : <span :style="{'color': activityProgress}">
          {{ activity.progress }} %</span> </span>
      </div>
    </div>
  </article>
</template>


<script>
import textUtility from '@/mixins/textUtility'
export default {
    props: {
      categories: {
        type: Object,
        required: true
      },
      activity: {
        type: Object,
        required: true
      }
    },
    mixins: [textUtility],
    computed: {
      activityProgress () {
        const progress = this.activity.progress

        if(progress >=0 && progress <= 33) {
          return 'red'
        } else if (progress >=33 && progress <= 66) {
          return 'orange'
        } else {
          return 'green'
        }
      }
    }
};
</script>


<style scoped>

.post .title {
  margin-bottom: 5px;
}

/* .color-red {
  color: red;
}

.color-orange {
  color: orange;
}

.color-green {
color: green;
} */


</style>
