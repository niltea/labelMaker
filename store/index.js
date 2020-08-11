const listURL = `//${location.host}/list.csv`;
const perPage = 10;

// 引用符を除去する
const stripQuote = item => item.replace(/^['"]|['"]$/g, '');

// CSVのparse
const parseCSV = (CSVData) => {
  // 改行コードを正規化
  CSVData.replace('\r\n', '\n');
  CSVData.replace('\r', '\n');
  // 改行コードで分割して配列に格納する
  const CSVSplitInLine = CSVData.split('\n');

  // keyをparseする
  const keys = CSVSplitInLine[0].split(',');
  for (let keyNo = 1; keyNo < keys.length; keyNo += 1) {
    keys[keyNo] = stripQuote(keys[keyNo]);
  }
  // 値をparseして格納していく
  const parsedArray = [];
  for (let itemNo = 1; itemNo < CSVSplitInLine.length; itemNo += 1) {
    // 空行なら何もしない
    if (!CSVSplitInLine[itemNo].length) {
      continue;
    }

    const lineObject = {};
    // 値を分割
    const values = CSVSplitInLine[itemNo].split(',');

    for (let keyNo = 1; keyNo < keys.length; keyNo += 1) {
      lineObject[keys[keyNo]] = stripQuote(values[keyNo]);
    }
    parsedArray.push(lineObject);
  }
  // 終わった配列を返す
  return parsedArray;
};
// eslint-disable-next-line no-unused-vars
const sortList = (circleList, order) => {
  if (order === 'space_num') {
    return circleList.slice().sort((a, b) => {
      if (parseInt(a[order], 10) < parseInt(b[order], 10)) {
        return -1;
      }
      if (parseInt(a[order], 10) > parseInt(b[order], 10)) {
        return 1;
      }
      return 0;
    });
  }
  return circleList.slice().sort((a, b) => {
    return a[order].localeCompare(b[order], 'ja');
  });
};

export const state = () => ({
  eventConfig: {
    map: {},
  },
  allData   : {},
  circleList: {},
  sortConfig: ['space', 'desc'],
  sortOrder : [],
  modalID   : '',
});

export const getters = {
  eventConfig: state => state.eventConfig,
  isListOpen : state => state.isListOpen,
  topNews    : state => state.topNews,
  printer    : state => state.printer,
  circleList : state => state.circleList,
  sortOrder  : state => state.sortOrder,
  isModalOpen: (state) => {
    return (state.modalID !== '');
  },
  allData   : state => state.allData,
  circleById: (state) => {
    let hay = {};
    const needle = state.modalID;
    state.circleList.forEach((circle) => {
      if (circle.circle_id === needle) {
        hay = circle;
      }
    });
    return hay;
  },
};

export const mutations = {
  setSetting (state, setting) {
    state.topNews = setting.news;
    state.printer = setting.printer;
    state.isListOpen = setting.isListOpen;
    state.eventConfig = setting.eventConfig;
  },
  allData (state, allData) {
    state.allData = allData;
  },
  addCircleList (state, circles) {
    let prefixCount = 0;
    let prefixIndex = 0;
    let prevPrefix = '';
    circles.forEach((circle) => {
      prefixCount += 1;
      if (prevPrefix !== '' && prevPrefix !== circle.space_sym) {
        prefixIndex = 0;
        prefixCount = 1;
      }
      prevPrefix = circle.space_sym;
      if (prefixCount > perPage) {
        prefixCount = 1;
        prefixIndex += 1;
      }
      const prefix = circle.space_sym + prefixIndex.toString();
      if (!state.circleList[prefix]) {
        state.circleList[prefix] = [];
      }
      const spaceNum = circle.space_num.split('-')[0];
      state.circleList[prefix].push({
        circleName   : circle['サークル名'],
        writer       : circle['ペンネーム'],
        spaceNo      : circle.space_sym + '-' + circle.space_num.replace('-', ','),
        spaceNumInt  : parseInt(spaceNum, 10),
        space_count  : circle['スペース数'],
        coupleWith   : circle['合体先サークル'],
        additionChair: circle['追加イス'] || '0',
        isAdult      : circle['成人向け頒布物'] === 'あり',
        fileName     : circle.space_sym + circle.space_num,
      });
    });
  },
  addSortOrder (state, sortOrder) {
    state.sortOrder = sortOrder;
  },
  setCircleID (state, circleID) {
    state.modalID = circleID;
  },
};

export const actions = {
  async getSettings ({ commit }) {
    // const { data } = await this.$axios.get(settingURL);
    // commit('setSetting', data);
  },
  async getCircleList ({ commit, getters }) {
    const { data } = await this.$axios.get(listURL);
    const parsed = parseCSV(data);
    commit('allData', parsed);
    commit('addCircleList', parsed);
    // commit('addSortOrder', data.sort_order);
  },
};
