<template>
  <div> 
    <section>
        <div class="container-fluid">
            <!-- <div class="filters-dropdown">
                <div class="btn-filters">
                    <span>Filters&nbsp;<i class="fas fa-caret-down"></i></span>
                </div>
                <div class="_dropdown-content">
                    <ul>
                        <li>Newest</li>
                        <li>Most popular</li>
                        <li>Most votes</li>
                    </ul>
                </div>
            </div> -->
            <div id="content" class="grid-container main">
                <div class="card" v-for="(item, index) in items" v-bind:key="index">
                  <post-card :item="item"></post-card>
                </div>
            </div>
        </div>
    </section>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
  import PostCard from './components/PostCard.vue'

  export default {
    components: {
      PostCard
    },
    data() {
      return {
        items: {},
      }
    },
    mounted() {
      this.getItems();
    },
    methods: {
      getItems() {
        axios.get('/api/posts')
          .then((result) => {
            this.items = result.data
          })
      }
    }
  }
</script>