<template>
  <div style="height: 100%;">
      <div class="_image">

      </div>
      <div class="_data" style="overflow: hidden;">
        <h2>{{item.title}}</h2>

        <!-- Buttons -->
        <div class="heart">
            <i class="fas fa-thumbs-up"></i>
        </div>
        <div class="btn-copy btn-copy-html" @click="copyHtml">
            Copy HTML
        </div>
    
        <textarea :id="item.title" style="postion:absolute;" cols="30" rows="10">&lt;div class="col-md-2 col-sm-6 _links"&gt;
 &lt;ul&gt;
 &lt;li&gt;&lt;a href="#"&gt;Messenger&lt;/a&gt;&lt;/li&gt;
 &lt;li&gt;&lt;a href="#"&gt;WhatsApp&lt;/a&gt;&lt;/li&gt;
 &lt;/ul&gt;
 &lt;/div&gt;
        </textarea>
        
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
            },
            copyHtml() {
                var copyText = document.getElementById("flat");

                /* Select the text field */
                copyText.select();

                /* Copy the text inside the text field */
                document.execCommand("copy");

            }
        }
    }

</script>
