<template>
  <div id="activityApp">
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>Activity Planner</h1>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="#">Newest</a>
            <a class="navbar-item" href="#">In Progress</a>
            <a class="navbar-item" href="#">Finished</a>
          </div>
        </div>
      </div>
    </nav>

    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <a
            class="button is-primary is-block is-alt is-large"
            v-if="!isFormDisplayed"
            href="#"
            @click="displayNewActivityForm()"
            >New Activity</a
          >

          <div v-if="isFormDisplayed" class="create-form">
            <h2>Create Activity</h2>
            <form action="">
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input
                    v-model="newActivity.title"
                    class="input"
                    type="text"
                    placeholder="Set an activity"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Notes</label>
                <div class="control">
                  <textarea
                    v-model="newActivity.notes"
                    class="textarea"
                    placeholder="Write some notes here"
                  ></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button @click="createActivity()" class="button is-link">
                    Create Activity
                  </button>
                </div>
                <div class="control">
                  <button
                    class="button is-text"
                    @click="displayNewActivityForm()"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="column is-9">
          <div class="box content">
            <ActivityItem 
              v-for="activity in activities"
              v-bind:activity="activity"
              v-bind:key="activity.id">
            
              </ActivityItem> 
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import ActivityItem from './components/ActivityItem.vue'

export default {

  name: "App",
  components: {
    ActivityItem
  },
  data() {
    return {
      isFormDisplayed: false,
      message: "Hello Vue",
      titleMessage: "Title Message Vue!!",
      isTextDisplayed: true,
      newActivity: {
        title: "",
        notes: "",
      },
      items: {
        1: {
          name: "Ardit",
        },
        2: {
          name: "Tidra",
        },
      },
      user: {
        name: "Ardit Hyseni",
        id: "ah49393",
      },
      activities: {
        1546968934: {
          id: "1546968934",
          title: "Learn Vue.js",
          notes: "I started today",
          progess: 0,
          category: "1546969049",
          createdAt: 1546969144391,
          updatedAt: 1546969144391,
        },
        1546969212: {
          id: "1546969212",
          title: "Read Witcher Books",
          notes: "Good books",
          progress: 0,
          category: "1546969049",
          createdAt: 1546969144391,
          updatedAt: 1546969144391,
        },
      },
      categories: {
        1546969049: { text: "books" },
        1546969225: { text: "movies" },
      },
    };
  },
  methods: {
    toggleTextDisplay() {
      this.isTextDisplayed = !this.isTextDisplayed;
    },
    displayNewActivityForm() {
      this.isFormDisplayed = !this.isFormDisplayed;
    },
    createActivity() {
      console.log(this.newActivity);
    },
  },
};
</script>

<style>
#activityApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  font-family: "Open Sans", serif;
  background: #f2f6fa;
}
footer {
  background-color: #f2f6fa !important;
}

.example-wrapper {
  margin-left: 30px;
}

.topNav {
  border-top: 5px solid #3498db;
}
.topNav .container {
  border-bottom: 1px solid #e6eaee;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li {
  padding: 5px;
}

.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
</style>
