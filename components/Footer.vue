<template lang="pug">
  footer#mainFooter.content_section.content_section-footer
    a.footer-toTop(href="#page-top")
      span.label TOP
    .inner
      .footer-logo ホロライブプロダクションオンリー同人誌即売会 ホロクル
      .footer-datePlace 2020.8/2 横浜産貿ホール マリネリア
      .footer-credits-container
        .footer-credits.inquiry
          dl.credits-item
            dt 主催・運営
            dd ホロクル準備会
          dl.credits-item
            dt お問い合わせ先
            dd: a(href="mailto:holokle.info@gmail.com") holokle.info@gmail.com
        .footer-credits.visual
          dl.credits-item
            dt SD Character Illustration
            dd: a(href="https://twitter.com/koga042", target="_blank") 古賀れじに(DROPWORTS)
          //- dl.credits-item
              dt Key Visual Illustration
              dd: a(href="#", target="_blank") ○○○○ (hoge hoge)
          //- dl.credits-item
              dt Key Visual Design, <br class="onlySP">Logo Design
              dd: a(href="https://twitter.com/BufferinChudoku", target="_blank") BufferinChudoku
          dl.credits-item
            dt Web Design & Coding
            dd: a(href="https://twitter.com/niltea_vt", target="_blank") 渋澤タカシ(Nilgiri Tea)
      .footer-notes
        p 当イベントは有志によるイベントです。「ホロライブプロダクション」および<br>カバー株式会社とは無関係ですので、関係先へのお問い合わせ等はご遠慮ください。
        p 当イベントへの参加に付随して取得する個人情報は、<br>イベントの連絡業務においてのみ使用し、一定期間後破棄します。
        p 当サイトに掲載している画像及び文書等の情報を無断にて転載することはご遠慮ください。
        p.copyright Copyright© 2020- Holokle Preparatory Committee All rights reserved.

</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
/* ===============
footer
================== */
.content_section.content_section-footer {
  position: relative;
  background-color: #000;
  color: #fff;
  font-family: azo-sans-web, noto-sans-cjk-jp, sans-serif;
  font-weight: 300;
  .footer-toTop {
    position: absolute;
    left: 50%;
    .label {
      display: none;
    }
    &:after {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .inner {
    position: relative;
    margin: 0 auto;
  }
  .footer-logo,
  .footer-datePlace {
    @include txtHide;
    display: block;
  }
  .footer-credits {
    .credits-item {
      dt {
        font-weight: 700;
      }
      dd a {
        color: #fff;
      }
    }
  }
  @media screen and (min-width: 751px) {
    width: 100%;
    margin-top: 150px;
    padding: 130px 0 90px;
    .footer-toTop {
      top: -20px;
      margin-left: -38px;
      width: 76px;
      height: 71px;
      &:after {
        background: url("/img/common/footer-toTop-w.png") 0 0 no-repeat;
        background-size: 76px 71px;
        transition: 0.4s $easeOutCirc;
      }
      &:hover {
        &:after {
          transform: translateY(-20px);
        }
      }
    }
    .inner {
      width: 682px;
    }
    .footer-logo {
      width: 330px;
      height: 59px;
      background: url("/img/common/footer-logo-w.png") 0 0 no-repeat;
      background-size: 330px auto;
    }
    .footer-datePlace {
      position: absolute;
      right: 0;
      top: 0;
      width: 214px;
      height: 165px;
      background: url("/img/common/footer-dateplace-w.png") 0 0 no-repeat;
      background-size: 214px auto;
    }
    .footer-credits {
      font-size: 12px;
      line-height: 24px;
      min-height: 110px;
      &.inquiry {
        margin-top: 35px;
        display: flex;
        .credits-item {
          min-width: 117px;
        }
      }
      &.visual {
        margin-top: 15px;
        .credits-item + .credits-item {
          margin-top: 1.75em;
        }
      }
    }
    .footer-notes {
      position: absolute;
      right: 0;
      bottom: 0;
      p {
        text-align: right;
        font-size: 11px;
        & + p {
          margin-top: 1.3em;
        }
      }
    }
    @media (-webkit-min-device-pixel-ratio:2), (min-resolution: 2dppx) {
      .footer-toTop:after {
        background-image: url("/img/common/footer-toTop-2x.png");
      }
      .footer-logo {
        background-image: url("/img/common/footer-logo-2x.png");
      }
      .footer-datePlace {
        background-image: url("/img/common/footer-dateplace-2x.png");
      }
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    margin-top: 180px;
    padding: 123px 0 90px;
    .footer-toTop {
      top: -70px;
      margin-left: -76px;
      width: 152px;
      height: 142px;
      &:after {
        background: url("/img/common/footer-toTop-2x.png") 0 0 no-repeat;
      }
    }
    .inner {
      width: 688px;
    }
    .footer-logo {
      margin: 0 auto;
      width: 434px;
      height: 170px;
      background: url("/img/common/footer-logo-n.png") 0 0 no-repeat;
    }
    .footer-datePlace {
      margin: 83px auto 0;
      width: 645px;
      height: 123px;
      background: url("/img/common/footer-dateplace-n.png") 0 0 no-repeat;
    }
    .footer-credits-container {
      width: 650px;
      margin: 94px auto 0;
      display: flex;
      justify-content: space-between;
    }
    .footer-credits {
      width: 290px;
      font-size: 24px;
      line-height: 48px;
      .credits-item + .credits-item {
        margin-top: 1.7em;
      }
    }
    .footer-notes {
      width: 650px;
      margin-top: 90px;
      p {
        text-align: right;
        font-size: 14px;
        & + p {
          margin-top: 1.3em;
        }
      }
    }
  }
}
</style>
