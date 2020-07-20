<template lang="pug">

    nuxt-link.link-button(
      v-if="prop.to",
      :to="prop.to",
      v-html="prop.label",
      :class="classList",
      )
    a.link-button(
      v-else,
      :href="prop.href",
      v-html="prop.label",
      :class="classList",
      )
</template>

<script>
export default {
  props: {
    // type check plus other validations
    prop: {
      type    : Object,
      default : () => {},
      required: true,
    },
  },
  computed: {
    classList () {
      const list = [];
      if (this.prop.isNarrow) {
        list.push('button-half');
      };
      if (this.prop.isWide) {
        list.push('button-wide');
      };
      if (this.prop.isCenter) {
        list.push('button-center');
      };
      return list;
    },
  },
  mounted () {
  },
};
</script>

<style scoped lang="scss">
</style>
