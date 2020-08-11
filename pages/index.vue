<template lang="pug">
  .page-wrapper
    ul.circle-list(
      v-for="(page, key) in circleList",
      :key="key",
      )
      div(
        v-for="circle in page",
        :key="circle.circle_id",
      )
        CircleItem(v-bind:circle="circle")
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  async fetch ({ store }) {
    await store.dispatch('getCircleList');
    // await store.dispatch('getSettings');
  },
  data () {
    return {
      data: null,
    };
  },
  computed: {
    ...mapGetters([
      'circleList',
      'allData',
    ]),
  },
};
</script>

<style scoped lang="scss">
/* ===============
circle List
================== */
.circle-list {
  display: flex;
  flex-wrap: wrap;
  @media screen {
    padding-bottom: 100px;
  }
  @media print {
    page-break-after: always;
    padding: 20mm 19mm 0;
  }
}
</style>
