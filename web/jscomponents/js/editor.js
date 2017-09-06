new Vue({
  el: '#editor',
  data: {
    //input: window.localStorage.getItem("file1") 
    input: '# hello css grid',
    bouncy: '# hello css grid',
    current_file: 'temporary name'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, {
        sanitize: true
      })
    }
  },
  created: function () {
    // `this` points to the vm instance
    console.log("ready fired");
    window.addEventListener('add-file', e => this.addFile(e));
    window.addEventListener('open-file', e => this.openFile(e));
    window.addEventListener('removed-file', e => this.handleRemove(e));
  },
  methods: {
    getFileName: function (name) {
      var strReg = new RegExp('[A-Z a-z \s]+');
      // get the new name
      var tmpName = strReg.exec(this.input);
      if (tmpName != null && tmpName[0].length > 10) {
        tmpName = tmpName[0].substr(0, 10).trim();
        tmpName+="...";
      }

      if (tmpName != null && name !== tmpName) {
        window.localStorage.removeItem(name);
        name = tmpName;
      }

      window.localStorage.setItem(name, this.input);      
      return name;
    },
    update: _.debounce(function (e) {
      this.input = this.bouncy;
      this.current_file = this.getFileName(this.current_file);

      var evt = new Event("updated-file", {
        "bubbles": true,
        "cancelable": false,
      });
      window.dispatchEvent(evt);
    }, 300),
    handleRemove: function () {
      console.log("Handling remove");
      for (var i = 0; i < window.localStorage.length; i++) {
        if (this.current_file === window.localStorage.key(i)) {
          return;
        }
      }
      this.addFile();
    },
    addFile: function () {
      console.log("Adding file");
      this.input = "# new file";
      this.bouncy = "# new file";
      this.current_file = null;
    },
    openFile: function (e) {
      console.log(e);
      console.log(e.detail);
      for (var i = 0; i < window.localStorage.length; i++) {
        if (e.detail === window.localStorage.key(i)) {
          this.input = window.localStorage.getItem(e.detail);
          this.bouncy = this.input;
          this.current_file = e.detail;
          return;
        }
      }
    }
  }
});

// window.addEventListener('updated-file', e => this.updateFileList(e));