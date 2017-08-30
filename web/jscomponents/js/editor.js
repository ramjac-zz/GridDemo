new Vue({
  el: '#editor',
  data: {
    //input: window.localStorage.getItem("file1") 
    input: '# hello css grid',
    bouncy: '# hello css grid',
    data_title: 'temporary name'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, {
        sanitize: true
      })
    }
  },
  methods: {
    getFileName: function (name) {
      var strReg = new RegExp('[A-Z a-z \s]+');
      // get the new name
      var tmpName = strReg.exec(this.input)[0];
      if (tmpName.length > 7) {
        tmpName = tmpName.substr(0, 7).trim();
      }

      if (name !== tmpName) {
        window.localStorage.setItem(tmpName, this.input);
        window.localStorage.removeItem(name);
        name = tmpName;
      }
      return name;
    },
    update: _.debounce(function (e) {
      this.input = this.bouncy;
      this.data_title = this.getFileName(this.data_title);
    }, 300)
  }
})