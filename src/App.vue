<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <input type="text" @keydown.enter="text = $event.target.value" placeholder="type text and press Enter">
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <hr>
                <h4>Exercise 1 (reverse)</h4>
                <p>{{ text | reverseStr }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr>
                <h4>Exercise 2 (each word's length)</h4>
                <p>{{ text | addWordLen }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <h4>Exersise 3 computed: (reverse) / (each word's length):</h4>
                <p>{{ textReversed }}<br>{{ textWordLenCounted }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <!-- it already done, see WordMixin.js -->
                <hr>
                <h4>Exercise 4 mixin: (each word's length)</h4>
                <p>{{ textWordLenCounted }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { wordMixin } from './WordMixin.js';

    export default {
      mixins: [wordMixin],
      filters: {
        reverseStr(value) {
          return value.split("").reverse().join("");
        }
      },
      computed: {
        textReversed () {
          return this.text.split("").reverse().join("");
        }
      }
    }
</script>

<style>
  p {
    white-space: pre-wrap;
    color: navy;
  }
  input {
    width: 300px;
  }
</style>
