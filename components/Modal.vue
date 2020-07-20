<template lang="pug">
  .modalContainer
    .modal_bg(@click="closeModal")
    .contentWrapper
      .btnClose(@click.self="closeModal")
      .innerWrapper
        .scrolling-content
          .circleDetail(:class="`spaceCount-${circleById.space_count}`")
            h2 サークル詳細
            .circleCut(ref="circleCut")
              img(v-if="circleById.circlecut", :src='circleById.circlecut', :alt='circleById.circle_name')
              img(v-else, src="/img/circle-list/blank.png")
            .circleMeta
              .spaceNo.textData {{ circleById.space_sym }} - {{ circleById.space_num.replace('-', ',') }}
              dl.circleInfo.textData
                dt.head CIRCLE
                dd.data {{ circleById.circle_name }}
              dl.circleInfo.textData
                dt.head PN
                dd.data {{ circleById.penname }}
              dl.circleInfo.buttons
                dt.head LINK
                dd.data
                  ModalLinks(v-bind:circle="circleById")
              dl.circleInfo.buttons
                dt.head SHARE
                dd.data
                  ModalShare(:circle="circleById")
            section.moreDetail
              h3 頒布物詳細
              p(v-if="circleComment", v-html="circleComment")
              p.blank(v-if="!circleComment && !circleById.circle_link") まだ登録されていません。
              a.link(
                v-if="circleById.circle_link",
                :href="circleById.circle_link",
                target="_blank",
                ) お品書きURL: {{ circleById.circle_link }}
          ModalMap(v-if="eventConfig.map.enabled", :circle="circleById")
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    circleID: {
      type    : String,
      default : () => '',
      required: true,
    },
  },
  data () {
    return {};
  },
  computed: {
    ...mapGetters([
      'circleById',
      'eventConfig',
    ]),
    circleComment () {
      if (!this.circleById) {
        return '';
      }
      const commentRaw = this.circleById.circle_comment;
      if (!commentRaw) {
        return '';
      }
      return commentRaw.replace(/\n/, '<br>');
    },
  },
  mounted () {
    document.addEventListener('keyup', this.keyPress);
  },
  destroyed () {
    document.removeEventListener('keyup', this.keyPress);
  },
  methods: {
    closeModal () {
      this.$router.push('/circle-list/');
    },
    keyPress (e) {
      if (e.keyCode === 27) {
        // モーダルを閉じる
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped lang="scss">
$eventFillColor: $color_blue;
$bgColor: #fdfdfd;
.modalContainer {
  position: fixed;
  display: block;
  z-index: 7000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  .modal_bg {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(#222, 0.8);
  }
}
.contentWrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-sizing: border-box;
  .btnClose {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      height: 1px;
      background-color: #fff;
    }
    &:before {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 0 0;
    }
    &:after {
      right: 0;
      transform: rotate(-45deg);
      transform-origin: 100% 1px;
    }
  }
  .innerWrapper {
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    border-radius: 5px;
  }
  .scrolling-content {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
}
@media screen and (min-width: 751px) {
  .contentWrapper {
    width: 800px;
    height: 860px;
    padding-top: 40px;
    max-height: 95%;
    .scrolling-content {
      padding: 30px 20px;
    }
  }
  .btnClose {
    width: 25px;
    height: 25px;
    &:hover {
      opacity: 0.4;
    }
    &:before,
    &:after {
      width: 36px;
    }
  }
}
@media screen and (max-width: 750px) {
  .contentWrapper {
    width: 710px;
    padding-top: 60px;
    max-height: calc(100% - 40px);
    .scrolling-content {
      padding: 30px 40px;
    }
  }
  .btnClose {
    width: 45px;
    height: 45px;
    &:before,
    &:after {
      width: 64px;
    }
  }
}
.circleDetail {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  h2 {
    width: 100%;
    text-align: center;
  }
  .circleCut {
    font-size: 0;
    line-height: 0;
    width: 25%;
    background-color: #000;
    img {
      width: 100%;
      height: auto;
      pointer-events: none;
    }
  }
  .spaceNo {
    background-color: $eventFillColor;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
  .circleInfo {
    border-right: 1px solid $eventFillColor;
    border-bottom: 1px solid $eventFillColor;
    display: table;
    width: 100%;
    box-sizing: border-box;
    dt, dd {
      box-sizing: border-box;
      display: table-cell;
      padding: 0.3em 0.75em;
      vertical-align: middle;
    }
    dt {
      background-color: $eventFillColor;
      color: #fff;
      text-align: center;
      font-weight: 600;
      letter-spacing: 0.1em;
    }
    dd {
      background-color: $bgColor;
      text-align: left;
      letter-spacing: 0.05em;
    }
  }
  .moreDetail {
    width: 100%;
    border: 1px solid $eventFillColor;
    h3 {
      margin: 0;
      font-weight: 600;
      color: #fff;
      text-align: center;
      background-color: $eventFillColor;
    }
    p {
      background-color: $bgColor;
      &.blank {
        text-align: center;
      }
    }
    .link {
      display: block;
      border-top: 1px dotted #000;
      padding: 1.5em 1em;
      color: $blue;
      text-align: center;
    }
  }
}
@media screen and (min-width: 751px) {
  .circleDetail {
    width: 570px;
    h2 {
      margin-bottom: 1em;
    }
    .circleCut {
      width: 190px;
      height: 277px;
    }
    .circleMeta {
      width: 380px;
    }
    &.spaceCount-2 {
      width: 100%;
      .circleCut {
        width: 380px;
      }
    }
    .textData {
      height: 50px;
    }
    .spaceNo {
      font-size: 25px;
      line-height: 51px;
      height: 51px;
    }
    .circleInfo {
      dt {
        width: 30%;
      }
      dd {
        width: 70%;
      }
    }
    .buttons {
      height: 63px;
      .data {
        padding: 0 1em;
      }
    }
    .moreDetail {
      h3 {
        font-size: 1em;
        padding: 1.5em 0 1em;
      }
      p {
        padding: 2em 1.5em;
      }
    }
  }
}
@media all and (max-width: 750px) {
  .circleDetail {
    width: 100%;
    h2 {
      font-size: 40px;
      margin-bottom: 1.4em;
    }
    .circleCut {
      width: 260px;
      /*height: 460px;*/
    }
    .circleMeta {
      width: 370px;
    }
    &.spaceCount-2 {
      width: 100%;
      .circleCut,
      .circleMeta {
        width: 100%;
      }
    }
    .textData {
      height: 70px;
    }
    .spaceNo {
      font-size: 40px;
      line-height: 80px;
      height: 80px;
    }
    .circleInfo {
      dt {
        width: 25%;
        font-size: 0.8em;
      }
      dd {
        width: 70%;
        font-size: 1.3em;
      }
    }
    .buttons {
      height: 80px;
      .data {
        padding: 0 1em;
      }
    }
    .moreDetail {
      h3 {
        font-size: 2em;
        padding: 1em 0.8em;
      }
      p {
        padding: 2em 1.5em;
        font-size: 1.8em;
      }
      .link {
        font-size: 1.6em;
      }
    }
  }
}
</style>
