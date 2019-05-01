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
  }
});
