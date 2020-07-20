<template lang="pug">
  .linksWrapper
    //- twitter
    a.links.twitter.hasLink(
      v-if="circle.twitter_id",
      :href="`https://twitter.com/${circle.twitter_id}`",
      target='_blank',
    )
      font-awesome-icon(:icon="['fab', 'twitter']")
    span.links.twitter.noLink(v-else)
      font-awesome-icon(:icon="['fab', 'twitter']")

    //- pixiv
    a.links.pixiv.hasLink(
      v-if="circle.pixiv_url",
      :href="circle.pixiv_url",
      target='_blank',
    )
      font-awesome-icon(:icon="['fas', 'palette']")
    span.links.pixiv.noLink(v-else)
      font-awesome-icon(:icon="['fas', 'palette']")
    //- web site
    a.links.site.hasLink(
      v-if="circle.site_url",
      :href="circle.site_url",
      target='_blank',
    )
      font-awesome-icon(:icon="['fas', 'globe']")
    span.links.site.noLink(v-else)
      i.fas.fa-globe(aria-hidden="true")
      font-awesome-icon(:icon="['fas', 'globe']")
</template>

<script>
export default {
  props: {
    circle: {
      type    : Object,
      default : () => {},
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.linksWrapper {
  height: 35px;
  justify-content: space-between;
  display: flex;
  a.links {
    color: #000;
  }
  .links.noLink {
    color: #aaa;
  }
}
@media screen and (min-width: 751px) {
  .links {
    font-size: 30px;
  }
  a.links {
    transition: color 0.2s $easeOutQuad;
  }
  a.links:hover {
    color: #888;
    transition: color 0.4s $easeOutQuad;
  }
}
@media screen and (max-width: 750px) {
  .links {
    font-size: 40px;
  }
}
</style>
