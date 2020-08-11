<template lang="pug">
  li.list-item(:class="`spaceCount-${circle.space_count}`")
    //- circle cut
    .circleCut
      img(:src="`/circlecut/${circle.fileName}.png`")
      img(:src="`/circlecut/${circle.fileName}.jpg`")
    //- position
    .position {{circle.spaceNo}}
    .circleName {{ circle.circleName }}
    .remarks
      |{{ circle.space_count }} sp
      br
      |椅子{{circle.space_count}}&nbsp;+&nbsp;
      span(:class="{red: circle.additionChair !== '0'}") 追加{{circle.additionChair}}
    .logo
      img(src="/logo.png")
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
.red {
  color: #f00;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    display: block;
    border-bottom: 2px solid #ff0000;
  }
}
.list-item {
  position: relative;
}
.circleCut {
  display: block;
  position: absolute;
  img {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  }
}
.position,
.circleName,
.remarks {
  position: absolute;
  font-weight: 600;
  left: 0;
  top: 0;
}
.logo {
  position: absolute;
  img {
    width: 100%;
    height: auto;
  }
}
@media screen {
  .list-item {
    width: 432px;
    height: 254px;
    box-sizing: border-box;
    border: 1px dotted #888;
  }
  .circleCut {
    left: 13px;
  }
  .position {
    font-size: 40px;
    font-weight: 900;
  }
  .circleName {
    font-size: 20px;
  }
  .remarks {
    font-size: 18px;
    line-height: 1.5em;
  }
  .spaceCount-1 {
    .circleCut {
      width: 156px;
      top: 13px;
    }
    .position {
      left: 195px;
      top: 13px;
    }
    .circleName {
      left: 195px;
      top: 80px;
    }
    .remarks {
      left: 195px;
      top: 120px;
    }
    .logo {
      left: 195px;
      top: 191px;
      width: 200px;
      height: 49px;
    }
  }
  .spaceCount-2 {
    .circleCut {
      width: 240px;
      top: 65px;
    }
    .position {
      left: 13px;
      top: 10px;
    }
    .circleName {
      left: 165px;
      top: 28px;
    }
    .remarks {
      left: 265px;
      top: 61px;
    }
    .logo {
      left: 265px;
      top: 204px;
      width: 150px;
      height: 36px;
    }
  }
}
@media print {
  .list-item {
    width: 86mm;
    height: 53mm;
  }
  .circleCut {
    left: 2.6mm;
  }
  .position {
    font-size: 22pt;
    font-weight: 900;
  }
  .circleName {
    font-size: 14pt;
  }
  .remarks {
    font-size: 11pt;
    line-height: 1.5em;
    font-weight: 500;
  }
  .logo {
    background-color: #aae;
  }
  .spaceCount-1 {
    .circleCut {
      width: 31.2mm;
      top: 2.6mm;
    }
    .position {
      left: 37mm;
      top: 2.6mm;
    }
    .circleName {
      left: 37mm;
      top: 12mm;
    }
    .remarks {
      left: 37mm;
      top: 25mm;
    }
    .logo {
      left: 37mm;
      top: 38.2mm;
      width: 40mm;
      height: 9.8mm;
    }
  }
  .spaceCount-2 {
    .circleCut {
      width: 48mm;
      top: 13mm;
    }
    .position {
      left: 2.6mm;
      top: 2mm;
    }
    .circleName {
      left: 34mm;
      top: 5mm;
    }
    .remarks {
      left: 53mm;
      top: 12.2mm;
    }
    .logo {
      left: 53mm;
      top: 40.6mm;
      width: 30mm;
      height: 7.2mm;
    }
  }
}
</style>
