<template>
  <div style="height: 100%;">
      <div class="_image">

      </div>
      <div class="_data">
        <h2>{{item.title}}</h2>

        <!-- Buttons -->
        <div class="heart">
            <i class="fas fa-thumbs-up"></i>
        </div>
        <div class="btn-copy btn-copy-html">
            Copy HTML
        </div>
        <div class="btn-copy btn-copy-css">
            Copy CSS
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
          item: {},
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
