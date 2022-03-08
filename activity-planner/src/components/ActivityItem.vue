<template>
  <article class="post">
    <div>
      <h4 class="activity-title">{{ activity.title }}</h4>
      <i
        class="fas fa-cog activity-settings"
        @click="isMenuDisplayed = !isMenuDisplayed"
      />
    </div>
    <p>{{ textUtility_capitalize(categories[activity.category].text) }}</p>
    <p>{{ activity.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Ardit Hyseni</a> updated
            {{ activity.updatedAt | prettyTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- <span>Progress : <span :class="'color-' + activityProgress">
          {{ activity.progress }} %</span> </span> -->
        <span
          >Progress :
          <span :style="{ color: activityProgress }">
            {{ activity.progress }} %</span
          >
        </span>
      </div>
    </div>
    <div v-if="isMenuDisplayed" class="activity-control">
      <a class="button is-warning">Edit</a>
      <a class="button is-danger" @click="deleteActivity">Delete</a>
    </div>
  </article>
</template>


<script>
import textUtility from "@/mixins/textUtility";
export default {
  
  mixins: [textUtility],
  
  props: {
    categories: {
      type: Object,
      required: true,
    },
    activity: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isMenuDisplayed: false 
    }  
  },
  computed: {
    activityProgress() {
      const progress = this.activity.progress;

      if (progress >= 0 && progress <= 33) {
        return "red";
      } else if (progress >= 33 && progress <= 66) {
        return "orange";
      } else {
        return "green";
      }
    },
    },
    methods: {
      deleteActivity() {
        this.$emit('activityDeleted', this.activity)
      }
    },

  }

</script>


<style scoped>
.activity-title {
  margin-bottom: 5px;
  display: inline-block;
}

.activity-control {
  margin-top: 10px;
}

.activity-settings {
  float: right;
  font-size: 22px;
}

.activity-settings:hover {
  cursor: pointer;
}

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
