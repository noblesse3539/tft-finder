export enum EnumSynergy {
  //계열
  ABOMINATION = 0, // 괴생명체
  DAWNBRINGER, // 빛의인도자
  DRACONIC, // 용족
  FORGOTTEN, // 망각
  HELLION, // 악동
  INANIMATE, // 무생물
  IRONCLAD, // 철갑
  NIGHTBRINGER, // 어둠의인도자
  REDEEMED, // 구원받은자
  REVENANT, // 망령
  SENTINEL, // 감시자
  VICTORIOUS, // 승리자

  //직업
  ASSASSIN, // 암살자
  BRAWLER, // 싸움꾼
  CANNONEER, // 포병대
  CARETAKER, // 용사육사
  CAVALIER, // 기병대
  CRUEL, // 극악무도
  INVOKER, // 기원자
  KNIGHT, // 기사
  LEGIONNAIRE, // 군단
  MYSTIC, // 신비술사
  RANGER, // 정찰대
  RENEWER, // 재생술사
  SKIRMISHER, // 척후병
  SPELLWEAVER, // 주문술사
}

export enum SynergyType {
  ORIGINS = 0,
  CLASSES,
}
export const Synergy = {
  //계열
  [EnumSynergy.ABOMINATION]: {
    lang: ["괴생명체", EnumSynergy[EnumSynergy.ABOMINATION]],
    type: SynergyType.ORIGINS,
    steps: [3, 4, 5],
  },
  [EnumSynergy.DAWNBRINGER]: {
    lang: ["빛의인도자", EnumSynergy[EnumSynergy.DAWNBRINGER]],
    type: SynergyType.ORIGINS,
    steps: [2, 4, 6, 8],
  },
  [EnumSynergy.DRACONIC]: {
    lang: ["용족", EnumSynergy[EnumSynergy.DRACONIC]],
    type: SynergyType.ORIGINS,
    steps: [3, 5],
  },
  [EnumSynergy.FORGOTTEN]: {
    lang: ["망각", EnumSynergy[EnumSynergy.FORGOTTEN]],
    type: SynergyType.ORIGINS,
    steps: [2, 4, 6, 8],
  },
  [EnumSynergy.HELLION]: {
    lang: ["악동", EnumSynergy[EnumSynergy.HELLION]],
    type: SynergyType.ORIGINS,
    steps: [2, 4, 6, 8],
  },
  [EnumSynergy.INANIMATE]: {
    lang: ["무생물", EnumSynergy[EnumSynergy.INANIMATE]],
    type: SynergyType.ORIGINS,
    steps: [1],
  },
  [EnumSynergy.IRONCLAD]: {
    lang: ["철갑", EnumSynergy[EnumSynergy.IRONCLAD]],
    type: SynergyType.ORIGINS,
    steps: [2, 3, 4],
  },
  [EnumSynergy.NIGHTBRINGER]: {
    lang: ["어둠의인도자", EnumSynergy[EnumSynergy.NIGHTBRINGER]],
    type: SynergyType.ORIGINS,
    steps: [2, 4, 6, 8],
  },
  [EnumSynergy.REDEEMED]: {
    lang: ["구원받은자", EnumSynergy[EnumSynergy.REDEEMED]],
    type: SynergyType.ORIGINS,
    steps: [3, 6, 9],
  },
  [EnumSynergy.REVENANT]: {
    lang: ["망령", EnumSynergy[EnumSynergy.REVENANT]],
    type: SynergyType.ORIGINS,
    steps: [2, 3, 4, 5],
  },
  [EnumSynergy.SENTINEL]: {
    lang: ["감시자", EnumSynergy[EnumSynergy.SENTINEL]],
    type: SynergyType.ORIGINS,
    steps: [3, 6, 9],
  },
  [EnumSynergy.VICTORIOUS]: {
    lang: ["승리자", EnumSynergy[EnumSynergy.VICTORIOUS]],
    type: SynergyType.ORIGINS,
    steps: [1],
  },

  //직업
  [EnumSynergy.ASSASSIN]: {
    lang: ["암살자", EnumSynergy[EnumSynergy.ASSASSIN]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6],
  },
  [EnumSynergy.BRAWLER]: {
    lang: ["싸움꾼", EnumSynergy[EnumSynergy.BRAWLER]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6],
  },
  [EnumSynergy.CANNONEER]: {
    lang: ["포병대", EnumSynergy[EnumSynergy.CANNONEER]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6],
  },
  [EnumSynergy.CARETAKER]: {
    lang: ["용사육사", EnumSynergy[EnumSynergy.CARETAKER]],
    type: SynergyType.CLASSES,
    steps: [1],
  },
  [EnumSynergy.CAVALIER]: {
    lang: ["기병대", EnumSynergy[EnumSynergy.CAVALIER]],
    type: SynergyType.CLASSES,
    steps: [2, 3, 4],
  },
  [EnumSynergy.CRUEL]: {
    lang: ["극악무도", EnumSynergy[EnumSynergy.CRUEL]],
    type: SynergyType.CLASSES,
    steps: [1],
  },
  [EnumSynergy.INVOKER]: {
    lang: ["기원자", EnumSynergy[EnumSynergy.INVOKER]],
    type: SynergyType.CLASSES,
    steps: [2, 4],
  },
  [EnumSynergy.KNIGHT]: {
    lang: ["기사", EnumSynergy[EnumSynergy.KNIGHT]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6],
  },
  [EnumSynergy.LEGIONNAIRE]: {
    lang: ["군단", EnumSynergy[EnumSynergy.LEGIONNAIRE]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6, 8],
  },
  [EnumSynergy.MYSTIC]: {
    lang: ["신비술사", EnumSynergy[EnumSynergy.MYSTIC]],
    type: SynergyType.CLASSES,
    steps: [2, 3, 4, 5],
  },
  [EnumSynergy.RANGER]: {
    lang: ["정찰대", EnumSynergy[EnumSynergy.RANGER]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6],
  },
  [EnumSynergy.RENEWER]: {
    lang: ["재생술사", EnumSynergy[EnumSynergy.RENEWER]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6],
  },
  [EnumSynergy.SKIRMISHER]: {
    lang: ["척후병", EnumSynergy[EnumSynergy.SKIRMISHER]],
    type: SynergyType.CLASSES,
    steps: [3, 6, 9],
  },
  [EnumSynergy.SPELLWEAVER]: {
    lang: ["주문술사", EnumSynergy[EnumSynergy.SPELLWEAVER]],
    type: SynergyType.CLASSES,
    steps: [2, 4, 6],
  },
};

export enum Language {
  KOR = 0,
  ENG,
}
export const synergyToString = (
  synId: EnumSynergy,
  tranType = Language.KOR
) => {
  return Synergy[synId].lang[tranType];
};

export class Champion {
  id: number;
  name: string;
  cost: number;
  originList: number[];
  classList: number[];

  constructor(
    id: number,
    name: string,
    cost: number,
    originList: number[],
    classList: number[]
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.originList = originList;
    this.classList = classList;
  }
  getSynergyList(): number[] {
    return this.originList.concat(this.classList);
  }
}

export const CHAMPIONS = [
  new Champion(0, "가렌", 5, [1, 11], [19]),
  new Champion(1, "갈리오", 4, [10, 2], [19]),
  new Champion(2, "그라가스", 1, [1], [13]),
  new Champion(3, "그웬", 5, [5], [21]),
  new Champion(4, "노틸러스", 2, [6], [19]),
  new Champion(5, "녹턴", 3, [9], [12]),
  new Champion(6, "누누와 윌럼프", 3, [0], [13]),
  new Champion(7, "니달리", 3, [1], [24]),
  new Champion(8, "다이애나", 4, [7], [12]),
  new Champion(9, "드레이븐", 4, [3], [20]),
  new Champion(10, "라칸", 3, [10], [23]),
  new Champion(11, "럭스", 3, [8], [21]),
  new Champion(12, "레오나", 1, [8], [19]),
  new Champion(13, "렐", 4, [8, 6], [16]),
  new Champion(14, "루시안", 4, [10], [14]),
  new Champion(15, "룰루", 3, [4], [21]),
  new Champion(16, "리 신", 3, [7], [24]),
  new Champion(17, "리븐", 3, [1], [20]),
  new Champion(18, "미스 포츈", 3, [3], [14]),
  new Champion(19, "바루스", 2, [8], [22]),
  new Champion(20, "베인", 1, [3], [22]),
  new Champion(21, "벨코즈", 4, [8], [25]),
  new Champion(22, "볼리베어", 5, [9], [13]),
  new Champion(23, "브랜드", 2, [0], [25]),
  new Champion(24, "블라디미르", 1, [7], [23]),
  new Champion(25, "비에고", 5, [3], [12, 24]),
  new Champion(26, "뽀삐", 1, [4], [19]),
  new Champion(27, "세나", 1, [10], [14]),
  new Champion(28, "세주아니", 2, [7], [16, 13]),
  new Champion(29, "세트", 2, [2], [13]),
  new Champion(30, "소라카", 2, [1], [23]),
  new Champion(31, "신드라", 2, [8], [18]),
  new Champion(32, "쓰레쉬", 2, [3], [19]),
  new Champion(33, "아이번", 4, [9], [18, 23]),
  new Champion(34, "아크샨", 5, [10], [22]),
  new Champion(35, "아트록스", 1, [8], [20]),
  new Champion(36, "아펠리오스", 4, [7], [22]),
  new Champion(37, "애쉬", 3, [2], [22]),
  new Champion(38, "야스오", 3, [7], [20]),
  new Champion(39, "올라프", 1, [10], [24]),
  new Champion(40, "우디르", 1, [2], [24]),
  new Champion(41, "이렐리아", 2, [10], [20, 24]),
  new Champion(42, "자이라", 3, [2], [25]),
  new Champion(43, "잭스", 4, [6], [24]),
  new Champion(44, "직스", 1, [4], [25]),
  new Champion(45, "카르마", 4, [1], [18]),
  new Champion(46, "카직스", 1, [1], [12]),
  new Champion(47, "칼리스타", 1, [0], [20]),
  new Champion(48, "케넨", 2, [4], [24]),
  new Champion(49, "케일", 5, [8], [20]),
  new Champion(50, "클레드", 1, [4], [16]),
  new Champion(51, "트리스타나", 2, [4], [14]),
  new Champion(52, "티모", 5, [4], [17, 18]),
  new Champion(53, "파이크", 2, [10], [12]),
  new Champion(54, "피들스틱", 4, [0, 9], [21]),
  new Champion(55, "하이머딩거", 5, [2], [15, 23]),
  new Champion(56, "헤카림", 2, [3], [16]),
];

class UserStatus {
  level: number;
  slotCnt: number;
  probabilities: number[];

  constructor(level: number, slotCnt: number, probabilties: number[]) {
    this.level = level;
    this.slotCnt = slotCnt;
    this.probabilities = probabilties;
  }
}

export enum SORT_OPTION {
  FREQ = 1,
  COST,
}

export const userLvlStatus = [
  new UserStatus(0, 0, [0, 0, 0, 0, 0, 0]),
  new UserStatus(1, 1, [0, 100, 0, 0, 0, 0]),
  new UserStatus(2, 2, [0, 100, 0, 0, 0, 0]),
  new UserStatus(3, 3, [0, 75, 25, 0, 0, 0]),
  new UserStatus(4, 4, [0, 55, 30, 15, 0, 0]),
  new UserStatus(5, 5, [0, 45, 33, 20, 2, 0]),
  new UserStatus(6, 6, [0, 25, 40, 30, 5, 0]),
  new UserStatus(7, 7, [0, 19, 30, 35, 15, 1]),
  new UserStatus(8, 8, [0, 15, 20, 35, 25, 5]),
  new UserStatus(9, 9, [0, 10, 15, 30, 30, 15]),
];

export const findRecipe = (
  level: number,
  synOpt: { synergyId: number; step: number }[],
  sortOpt: SORT_OPTION
) => {
  /**
   * 챔피언들의 정렬은 레벨에 따라 1순위 확률 높은 2순위 코스트 높은 으로 정렬을 하자.(1: 고확률 순, 2: 고밸류 순)
   * 정렬된 챔피언들 중 0인 확률들은 다 제외한다.(조합 수 줄이기 위함.)
   * 정렬된 순으로 레벨에 따른 배치 수 만큼 조합을 뽑아내자
   * 뽑았을 경우 원하는 시너지가 일치하는지 확인한다.
   * 맞는 것을 리스트에 담는다.
   * 시너지의 합이 가장 높은 순으로 정렬한다.
   * 리스트에서 n번째 까지 리턴해준다.
   */
  const { slotCnt, level: lv } = userLvlStatus[level];
  const sorted = sortedChamp(CHAMPIONS, lv, sortOpt);

  const combi = combineWithoutRepetitions(sorted, slotCnt) as Champion[][];
  const filterdBySyn = combi.filter((champs) => {
    const synCounts = new Array(Object.keys(EnumSynergy).length / 2).fill(0);
    console.assert(synCounts.length === 26, {
      SynergyLength: synCounts.length,
      errorMsg: "Object.keys(EnumSynergy).length didnt match.",
    });

    champs.forEach((champ) => {
      const synList = champ.getSynergyList();
      synList.forEach((synId) => synCounts[synId]++);
    });

    let synId, step;
    for (let i = 0; i < synOpt.length; i++) {
      synId = synOpt[i].synergyId;
      step = synOpt[i].step;
      if (synCounts[synId] < step) return false;
    }

    return true;
  });

  return filterdBySyn;
};

const filterdChampByLvl = (champions: Champion[], level: number) => {
  const probabilities = userLvlStatus[level].probabilities;
  return champions.filter((c) => probabilities[c.cost] > 0);
};

const sortedChamp = (
  champions: Champion[],
  level: number,
  option = SORT_OPTION.FREQ
) => {
  const filterd = filterdChampByLvl(champions, level);
  if (option === SORT_OPTION.COST) {
    return filterd.sort((a, b) => a.cost - b.cost);
  }
  if (option === SORT_OPTION.FREQ) {
    const probabilities = userLvlStatus[level].probabilities;
    return filterd.sort(
      (a, b) => probabilities[a.cost] - probabilities[b.cost]
    );
  }

  return [];
};

/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
export default function combineWithoutRepetitions(
  comboOptions: any[],
  comboLength: number
) {
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  // Init combinations array.
  const combos: any[][] = [];

  // Extract characters one by one and concatenate them to combinations of smaller lengths.
  // We need to extract them because we don't want to have repetitions after concatenation.
  comboOptions.forEach((currentOption, optionIndex) => {
    // Generate combinations of smaller size.
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1
    );

    // Concatenate currentOption with all combinations of smaller size.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}
