export const wordMixin = {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    textWordLenCounted () {
      if ( !this.text.trim() ) return "";

      return this.text.replace( /([^.,?!\s]+)/g,
        function( val ) {
          return val + ' (' + val.length + ')';
        }
      );
    }
  }
};
