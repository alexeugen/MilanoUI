<template>
  <div> 
    <section>
        <div class="container" id="new-post-container">
          <div id="error-alert">
            {{ error }}
          </div>
          <div id="new-post-container-inputs">

          </div>
          <button @click="submit()" >Submit</button>
          <br><br>

        </div>

    </section>
  </div>
</template>

<script>
  import PostCard from './components/PostCard.vue'

  export default {
    components: {

    },
    data() {
      return {
        error: 'dsads',
      }
    },
    mounted() {
      this.generateInputs()
    },
    methods: {
      generateInputs() {
        let container = document.getElementById("new-post-container-inputs");
        
        let range = document.createElement("INPUT");
        range.type = "range";
        range.id = "range";
        let rangeText = document.createTextNode("Code complexity");

        let text = document.createElement("INPUT");
        text.type = "text";
        text.id = "title";
        let textText = document.createTextNode("Title");

        let checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        checkbox.id = "agreement";
        let checkboxText = document.createTextNode("I agree Terms and Conditions");

        let radioText = document.createTextNode("Is this free or monetizable?")

        let radio1 = document.createElement("INPUT");
        radio1.type = "radio";
        radio1.id = "free-radio";
        radio1.name = "theradio";
        let radio1Text = document.createTextNode("Free");

        let radio2 = document.createElement("INPUT");
        radio2.type = "radio";
        radio2.name = "theradio";
        radio2.id = "money-radio";
        radio2.style.marginLeft = "20px";
        let radio2Text = document.createTextNode("$$$");

        let selectText = document.createTextNode("Category")
        let select = document.createElement("SELECT");
        select.id = "category";
        let optionBtn = document.createElement("OPTION");
        optionBtn.value = "button";
        optionBtn.innerText = "button";
        let optionNav = document.createElement("OPTION");
        optionNav.value = "navbar";
        optionNav.innerText = "navbar";
        let optionCard = document.createElement("OPTION");
        optionCard.value = "card";
        optionCard.innerText = "card";
        let optionBlock = document.createElement("OPTION");
        optionBlock.value = "block";
        optionBlock.innerText = "block";
        select.appendChild(optionBtn);
        select.appendChild(optionNav);
        select.appendChild(optionCard);
        select.appendChild(optionBlock);


        let textareaHtml = document.createElement("textarea");
        textareaHtml.rows = 6;
        textareaHtml.cols = 60;
        textareaHtml.id = "html-code";
        let textareaHtmlText = document.createTextNode("Paste HTML");
        let textareaCss = document.createElement("textarea");
        textareaCss.rows = 6;
        textareaCss.cols = 60;
        textareaCss.id = "css-code";
        let textareaCssText = document.createTextNode("Paste CSS");

        let button = document.createElement("BUTTON");
        button.innerText = "Submit"
        button.id = "btn-new-post-submit";

        container.appendChild(textText);
        container.appendChild(document.createElement("BR"));
        container.appendChild(text);
        container.appendChild(document.createElement("BR"));
        container.appendChild(document.createElement("BR"));
        
        container.appendChild(textareaHtmlText);
        container.appendChild(document.createElement("BR"));
        container.appendChild(textareaHtml);
        container.appendChild(document.createElement("BR"));
        container.appendChild(document.createElement("BR"));
        
        container.appendChild(textareaCssText);
        container.appendChild(document.createElement("BR"));
        container.appendChild(textareaCss);
        container.appendChild(document.createElement("BR"));
        container.appendChild(document.createElement("BR"));

        container.appendChild(selectText);
        container.appendChild(document.createElement("BR"));
        container.appendChild(select);
        container.appendChild(document.createElement("BR"));
        container.appendChild(document.createElement("BR"));

        container.appendChild(rangeText);
        container.appendChild(document.createElement("BR"));
        container.appendChild(range);
        container.appendChild(document.createElement("BR"));
        container.appendChild(document.createElement("BR"));

        container.appendChild(radioText);
        container.appendChild(document.createElement("BR"));
        container.appendChild(radio1);
        container.appendChild(radio1Text);
        container.appendChild(radio2);
        container.appendChild(radio2Text);
        container.appendChild(document.createElement("BR"));
        container.appendChild(document.createElement("BR"));

        container.appendChild(checkbox);
        container.appendChild(checkboxText);
        container.appendChild(document.createElement("BR"));
        container.appendChild(document.createElement("BR"));
        // container.appendChild(radio);
      },
      submit() {
        let title = document.getElementById("title").value;
        let htmlCode =  document.getElementById("html-code").value;
        let cssCode =  document.getElementById("css-code").value;
        let category =  document.getElementById("category");
        category = category.options[category.selectedIndex].text;
        let range =  document.getElementById("range").value;
        let agreement =  document.getElementById("agreement").checked;

        let free = document.getElementById("free-radio").checked;
        let money = document.getElementById("money-radio").checked;

        let monetization = "";
        if(free)
          monetization = "free";
        if(money)
          monetization = "money";

        let str = '';
        if(!title)
          str += 'Title, ';
        if(!htmlCode)
          str += 'HTML Code, ';
        if(!cssCode)
          str += 'CSS Code, ';
        if(!range)
          str += 'Code complexity, ';
        if(!monetization)
          str += 'Monetization, ';
        if(!agreement)
          str += 'Agreement ';

        let alert = document.getElementById("error-alert");
        alert.style.display = "block";
        this.error = str + "are required."
        let timealert = setTimeout(function(){ alert.parentNode.removeChild(alert) }, 3000);
      }
    }
  }
</script>