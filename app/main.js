const submissionComponent = {
  template:
  `
  <div style="display: flex; width: 100%">
       <figure class="media-left">
         <img class="image is-64x64" :src="item.submissionImage">
       </figure>
       <div class="media-content">
         <div class="content">
           <p>
             <strong>
               <a href="#" class="has-text-info">{{ item.title }}</a>
               <span class="tag is-small">#{{ item.id }}</span>
             </strong>
             <br>{{ item.description }}</br>
             <small class="is-size-7">
               Submitted by: <img :src="item.avatar" class="image is-24x24">
             </small>
           </p>
         </div>
       </div>
       <div class="media-right">
         <span class="icon is-small" @click="upvote(item.id)">
           <i class="fa fa-chevron-up"></i>
           <strong class="has-text-info">{{ item.votes }}</strong>
         </span>
       </div>
  </div>
  `,
  props: ['item', 'upvote'],
};

new Vue({
  el: '#app',
  data: {
    submissions: Seed.submissions
  },
  computed: {
    sortedSubmissions() {
      const sorted = this.submissions;
      return sorted.sort((a, b) => {
        return b.votes - a.votes;
      });
    }
  },
  methods: {
    upvote(id) {
      const item = this.submissions.find(item => item.id === id);
      item.votes++;
    }
  },
  components: {
    'submission-component': submissionComponent,
  }
});
