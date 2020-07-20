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
      |椅子{{circle.space_count}}
      |+ 追加{{circle.additionChair}}
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
  .spaceCount-1 {
    .circleCut {
      width: 128px;
      top: 13px;
    }
    .position {
      left: 165px;
      top: 13px;
      font-size: 30px;
      font-weight: 900;
    }
    .circleName {
      left: 165px;
      top: 60px;
      font-size: 20px;
    }
    .remarks {
      left: 165px;
      top: 100px;
    }
  }
  .spaceCount-2 {
    .circleCut {
      width: 210px;
      top: 47px;
    }
    .position {
      left: 13px;
      top: 10px;
      font-size: 30px;
      font-weight: 900;
    }
    .circleName {
      left: 145px;
      top: 19px;
      font-size: 20px;
    }
    .remarks {
      left: 230px;
      top: 47px;
    }
  }
}
@media print {
  .list-item {
    width: 69.9mm;
    height: 42.3mm;
  }
  .circleCut {
    left: 2.6mm;
  }
  .position {
    font-size: 18pt;
    font-weight: 900;
  }
  .circleName {
    font-size: 12pt;
  }
  .remarks {
    font-size: 10pt;
  }
  .spaceCount-1 {
    .circleCut {
      width: 25.6mm;
      top: 2.6mm;
    }
    .position {
      left: 33mm;
      top: 2.6mm;
    }
    .circleName {
      left: 33mm;
      top: 12mm;
    }
    .remarks {
      left: 33mm;
      top: 23mm;
    }
  }
  .spaceCount-2 {
    .circleCut {
      width: 42mm;
      top: 10mm;
    }
    .position {
      left: 2.6mm;
      top: 2mm;
    }
    .circleName {
      left: 29mm;
      top: 4mm;
    }
    .remarks {
      left: 46mm;
      top: 10mm;
    }
  }
}
</style>
