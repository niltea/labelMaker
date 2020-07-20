<template lang="pug">
  .globalNav-wrapper
    header#global-navigation.global-navigation(:class="{'is--menuOpened': isMenuOpen}")
      .inner
        nav.globalNav
          nuxt-link(to='/', @click.native="menuCloser").globalNav-logo ホロライブプロダクションオンリー同人誌即売会 ホロクル
          ul.globalNav_ul
            li.globalNav_item.item-01: nuxt-link(to='/#guide_general', @click.native="menuCloser") 一般参加案内
            li.globalNav_item.item-02: nuxt-link(to='/circle', @click.native="menuCloser") サークル参加案内
            li.globalNav_item.item-03(v-if="isListOpen === true")
              nuxt-link(to='/circle-list', @click.native="menuCloser") 参加サークルリスト
            //- https://checklist.holokle.info/?e=holokle-1st
            li.globalNav_item.item-04: a(href='https://twitter.com/holokle_info/', target="_blank", @click="menuCloser") Official Twitter
            li.globalNav_item.item-share: a(href!="https://twitter.com/intent/tweet?text=2020%E5%B9%B48%E6%9C%882%E6%97%A5%E9%96%8B%E5%82%AC%20%7C%20%E3%83%9B%E3%83%AD%E3%83%A9%E3%82%A4%E3%83%96%E3%82%AA%E3%83%B3%E3%83%AA%E3%83%BC%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%20%5B%E3%83%9B%E3%83%AD%E3%82%AF%E3%83%AB%5D&hashtags=ホロクル&url=https%3A%2F%2Fholokle.info", target="_blank", @click="menuCloser")
              |Share on Twitter
    button.button-hamburger#humberger(@click="menuOpener")
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    ...mapGetters([
      'isListOpen',
    ]),
  },
  methods: {
    menuOpener () {
      this.isMenuOpen = !this.isMenuOpen;
    },
    menuCloser () {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
/* ===============
menu / fixed objects
================== */
.global-navigation {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5000;
  background-color: $color_blue;
  overflow: hidden;
  transition: transform 0.5s $easeOutCirc;
  transform: translateX(-100%);
  &.is--menuOpened {
    transform: none;
  }
  .inner {
    height: 100%;
    padding: 0 5px;
    margin: 0 auto;
  }
  .globalNav-logo {
    display: block;
    @include txtHide;
  }
  .globalNav_ul {
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 5px;
    }
    &::-webkit-scrollbar-thumb{
      background: #33c5ff;
      height: 50px;
      border-radius: 1px;
    }
    &::-webkit-scrollbar-track-piece:start{
      background: $color_blue;
    }
    &::-webkit-scrollbar-track-piece:end{
      background: $color_blue;
    }
  }
  .globalNav_item {
    border-top: 1px solid $color_yellow;
    a {
      @include hover;
      @include txtHide;
      display: block;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 751px) {
    .inner {
      width: 468px;
    }
    .globalNav-logo {
      margin-top: 60px;
      width: 448px;
      height: 223px;
    }
    .globalNav_ul {
      margin-top: 40px;
      //logo: 283px (60px + 223px)
      //margin-bottom: 70px
      height: calc(100vh - 393px);
    }
    .globalNav_item {
      width: 448px;
      padding: 39px 0;
      a {
        width: 391px;
        height: 43px;
      }
      $navHeight: -43px;
      &.item-01 a {
        background-position: 0 $navHeight * 0;
      }
      &.item-02 a {
        background-position: 0 $navHeight * 1;
      }
      &.item-03 a {
        background-position: 0 $navHeight * 2;
      }
      &.item-04 a {
        background-position: 0 $navHeight * 3;
      }
      &.item-share a {
        background-position: 0 $navHeight * 4;
        height: 52px;
      }
    }
    &.is--menuOpened {
      .globalNav-logo {
        background-image: url("/img/common/nav_logo-w.png");
        background-size: 448px 223px;
      }
      .globalNav_item a {
        background-image: url("/img/common/nav-item-w.png");
        background-size: 391px auto;
      }
      @media (-webkit-min-device-pixel-ratio:2), (min-resolution: 2dppx) {
        .globalNav-logo {
          background-image: url("/img/common/nav_logo-2x.png");
        }
        .globalNav_item a {
          background-image: url("/img/common/nav-item-2x.png");
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .inner {
      width: 462px;
    }
    .globalNav-logo {
      margin-top: 92px;
      width: 448px;
      height: 223px;
    }
    .globalNav_ul {
      margin-top: 50px;
      //logo: 315px
      //margin-bottom: 70px
      height: calc(100vh - 395px);
    }
    .globalNav_item {
      width: 452px;
      padding: 48px 0;
      a {
        width: 384px;
        height: 44px;
      }
      $navHeight: -44px;
      &.item-01 a {
        background-position: 0 $navHeight * 0;
      }
      &.item-02 a {
        background-position: 0 $navHeight * 1;
      }
      &.item-03 a {
        background-position: 0 $navHeight * 2;
      }
      &.item-04 a {
        background-position: 0 $navHeight * 3;
      }
      &.item-share a {
        background-position: 0 $navHeight * 4;
        height: 51px;
      }
    }
    &.is--menuOpened {
      .globalNav-logo {
        background-image: url("/img/common/nav_logo-n.png");
      }
      .globalNav_item a {
        background-image: url("/img/common/nav-item-n.png");
      }
    }
  }
}
.button-hamburger {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5500;
  @media screen and (min-width: 751px) {
    width: 70px;
    height: 65px;
    background: url("/img/common/hamburger-w.png") 0 0 no-repeat;
    background-size: 140px 65px;
    &.is--menuOpened {
      background-position: -70px 0;
    }
    @media (-webkit-min-device-pixel-ratio:2), (min-resolution: 2dppx) {
      background-image: url("/img/common/hamburger-2x.png");
    }
  }
  @media screen and (max-width: 750px) {
    width: 138px;
    height: 128px;
    background-image: url("/img/common/hamburger-n.png");
    &.is--menuOpened {
      background-position: -138px 0;
    }
  }
}
</style>
