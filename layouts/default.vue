<template lang="pug">
  div.wrapper
    Nuxt
</template>

<style lang="scss">
@import 'assets/sass/_reset.scss';
@page {
  size: A4 portrait;
}
body {
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
  @media screen {
    width: 1050px;
    padding: 106px 93px;
    background-color: #eee;
  }
  @media print {
    width: 210mm;
  }
}
.wrapper {
  background-color: #fff;
  position: relative;
  font-family: "Azo Sans", たづがね角ゴシック StdN, serif;
  @media screen {
    width: 864px;
  }
  @media print {
  }
}
</style>
