<template>
  <div>test</div>
</template>

<script>
export default {
  name: 'test',
  props: {
  	foo: string,
  },
  data() {
    return {
      a: 1,
      foo: null,
    };
  },
  computed: {
  	foo: {
  		get () {}
  	}
  },
};
</script>
