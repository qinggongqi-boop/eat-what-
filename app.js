const TAGS = [
  { id: "quick", label: "10分钟", icon: "⏱" },
  { id: "lowCal", label: "低卡", icon: "🌿" },
  { id: "protein", label: "高蛋白", icon: "💪" },
  { id: "lowOil", label: "少油", icon: "💧" },
  { id: "microwave", label: "微波炉友好", icon: "▣" },
  { id: "overnight", label: "隔夜不难吃", icon: "🌙" },
  { id: "beginner", label: "新手友好", icon: "✨" },
  { id: "lowSalt", label: "低盐", icon: "◇" },
  { id: "lessSauce", label: "少汤汁", icon: "◌" },
  { id: "sugarControl", label: "控糖友好", icon: "○" },
  { id: "filling", label: "饱腹感强", icon: "●" },
];

const TYPE_META = {
  meat: { label: "蛋白", icon: "meat" },
  veg: { label: "蔬菜", icon: "veg" },
  egg: { label: "蛋类", icon: "egg" },
  tofu: { label: "豆制品", icon: "tofu" },
  staple: { label: "主食", icon: "rice" },
};

const TIER_META = {
  core: { label: "核心推荐" },
  flexible: { label: "可选变化" },
  lunchbox: { label: "完整饭盒" },
};

const ICON_LIBRARY = [
  { id: "dish", label: "家常菜", symbol: "🍽" },
  { id: "meat", label: "蛋白", symbol: "🍖" },
  { id: "chicken", label: "鸡肉", symbol: "🍗" },
  { id: "beef", label: "牛肉", symbol: "🥩" },
  { id: "pork", label: "猪肉", symbol: "🥓" },
  { id: "fish", label: "鱼类", symbol: "🐟" },
  { id: "shrimp", label: "虾仁", symbol: "🦐" },
  { id: "egg", label: "鸡蛋", symbol: "🥚" },
  { id: "tofu", label: "豆腐", symbol: "⬜" },
  { id: "tofuDry", label: "香干", symbol: "🟫" },
  { id: "veg", label: "蔬菜", symbol: "🥗" },
  { id: "mushroom", label: "菌菇", symbol: "🍄" },
  { id: "leafy", label: "绿叶菜", symbol: "🥬" },
  { id: "root", label: "根茎菜", symbol: "🥕" },
  { id: "celery", label: "芹菜", symbol: "🌿" },
  { id: "cabbage", label: "包菜", symbol: "🥬" },
  { id: "zucchini", label: "西葫芦", symbol: "🥒" },
  { id: "potato", label: "土豆", symbol: "🥔" },
  { id: "rice", label: "主食", symbol: "🍚" },
  { id: "asparagus", label: "芦笋", symbol: "🌿" },
  { id: "pepper", label: "彩椒", symbol: "🫑" },
  { id: "bean", label: "豆类", symbol: "🫘" },
  { id: "purple", label: "紫甘蓝", symbol: "🥬" },
];

const INGREDIENT_GROUPS = [
  { id: "chicken", label: "鸡肉", types: ["meat"], keywords: ["鸡胸肉", "鸡腿肉", "鸡肉"] },
  { id: "beef", label: "牛肉", types: ["meat"], keywords: ["牛肉", "牛里脊", "牛肉末"] },
  { id: "pork", label: "猪肉", types: ["meat"], keywords: ["猪里脊", "猪肉", "肉片"] },
  { id: "fishShrimp", label: "鱼虾", types: ["meat", "egg"], keywords: ["鱼", "虾", "虾仁"] },
  { id: "egg", label: "鸡蛋", types: ["egg"], keywords: ["鸡蛋", "蛋"] },
  { id: "tofu", label: "豆腐", types: ["tofu"], keywords: ["豆腐", "香干", "豆皮"] },
  { id: "mushroom", label: "菌菇", types: ["veg"], keywords: ["香菇", "口蘑", "木耳", "菌菇"] },
  { id: "leafy", label: "绿叶菜", types: ["veg"], keywords: ["青菜", "油麦菜", "生菜", "菠菜", "小白菜"] },
  { id: "root", label: "根茎菜", types: ["veg", "staple"], keywords: ["土豆", "莲藕", "胡萝卜", "山药", "南瓜"] },
];

const BUILT_IN_RECIPES = [
  {
    id: "chicken-broccoli",
    name: "西兰花鸡胸肉",
    type: "meat",
    icon: "chicken",
    mainIngredient: "鸡胸肉",
    ingredients: ["鸡胸肉", "西兰花", "蒜"],
    seasonings: ["生抽", "黑胡椒", "盐", "淀粉"],
    steps: ["鸡胸肉切片，加生抽、黑胡椒、淀粉抓匀腌 8 分钟。", "西兰花掰小朵，焯水 40 秒后沥干。", "少油煎鸡胸肉至变色，加入蒜末和西兰花翻匀。"],
    calories: 360,
    time: 15,
    tags: ["protein", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "鸡胸肉选颜色粉嫩、表面不黏手的；西兰花选花球紧实、颜色深绿的。",
    substitutions: ["鸡胸肉可换鸡腿肉去皮", "西兰花可换芦笋或荷兰豆"],
  },
  {
    id: "tomato-egg",
    name: "番茄炒蛋",
    type: "egg",
    icon: "egg",
    mainIngredient: "鸡蛋",
    ingredients: ["番茄", "鸡蛋", "葱"],
    seasonings: ["盐", "少量糖", "生抽"],
    steps: ["鸡蛋打散，热锅少油炒至刚定型后盛出。", "番茄切块炒出汁，加一点盐和少量糖。", "倒回鸡蛋翻匀，撒葱花。"],
    calories: 300,
    time: 10,
    tags: ["quick", "beginner", "overnight"],
    shoppingTips: "番茄选沉手、表皮光亮、轻按微微软的，太硬会偏酸。",
    substitutions: ["番茄可换圣女果", "鸡蛋可换嫩豆腐做低脂版"],
  },
  {
    id: "beef-pepper",
    name: "青椒牛肉丝",
    type: "meat",
    icon: "beef",
    mainIngredient: "牛肉",
    ingredients: ["牛里脊", "青椒", "姜"],
    seasonings: ["生抽", "蚝油", "黑胡椒", "淀粉"],
    steps: ["牛肉逆纹切丝，加生抽、淀粉和少量油腌 10 分钟。", "青椒切丝。", "热锅快炒牛肉，变色后加青椒和蚝油翻匀。"],
    calories: 420,
    time: 18,
    tags: ["protein", "microwave", "overnight"],
    shoppingTips: "牛肉选纹理细、颜色鲜红的，避开出水多或发暗的。",
    substitutions: ["牛肉可换猪里脊", "青椒可换彩椒"],
  },
  {
    id: "lean-pork-cucumber",
    name: "黄瓜木耳炒肉片",
    type: "meat",
    icon: "pork",
    mainIngredient: "猪里脊",
    ingredients: ["猪里脊", "黄瓜", "木耳", "蒜"],
    seasonings: ["生抽", "盐", "料酒", "淀粉"],
    steps: ["猪里脊切片，加料酒、生抽、淀粉抓匀腌 8 分钟。", "木耳泡发后焯水，黄瓜切片。", "少油先炒肉片至变色，再下黄瓜木耳快速翻炒。"],
    calories: 340,
    time: 18,
    tags: ["lowCal", "lowOil", "overnight", "beginner"],
    shoppingTips: "黄瓜选刺硬、颜色翠绿的；干木耳泡发后闻起来应清爽无异味。",
    substitutions: ["猪里脊可换鸡胸肉", "黄瓜可换西葫芦"],
  },
  {
    id: "shrimp-egg",
    name: "虾仁滑蛋",
    type: "meat",
    icon: "shrimp",
    mainIngredient: "虾仁",
    ingredients: ["虾仁", "鸡蛋", "葱"],
    seasonings: ["盐", "白胡椒", "料酒"],
    steps: ["虾仁加盐、白胡椒和料酒抓匀腌 5 分钟。", "鸡蛋打散，加少量水。", "虾仁炒至变色，倒入蛋液小火推熟。"],
    calories: 330,
    time: 12,
    tags: ["quick", "protein", "lowCal", "beginner"],
    shoppingTips: "冷冻虾仁选冰衣薄、个体完整的；鲜虾闻起来应无腥臭味。",
    substitutions: ["虾仁可换鸡胸肉丁", "鸡蛋可换蛋清加全蛋"],
  },
  {
    id: "mapo-tofu-light",
    name: "轻油麻婆豆腐",
    type: "tofu",
    icon: "tofu",
    mainIngredient: "豆腐",
    ingredients: ["嫩豆腐", "牛肉末", "蒜苗"],
    seasonings: ["豆瓣酱", "生抽", "花椒粉", "淀粉"],
    steps: ["豆腐切块焯水，捞出沥干。", "少油炒香牛肉末和豆瓣酱。", "加水和豆腐煮 3 分钟，勾薄芡后撒蒜苗。"],
    calories: 390,
    time: 18,
    tags: ["protein", "microwave", "overnight"],
    shoppingTips: "盒装豆腐看保质期和包装完整度，回家后冷藏保存。",
    substitutions: ["牛肉末可省略做素版", "嫩豆腐可换北豆腐"],
  },
  {
    id: "mushroom-greens",
    name: "香菇青菜",
    type: "veg",
    icon: "mushroom",
    mainIngredient: "青菜",
    ingredients: ["小青菜", "香菇", "蒜"],
    seasonings: ["盐", "蚝油", "生抽"],
    steps: ["青菜洗净沥干，香菇切片。", "少油炒香蒜和香菇。", "下青菜大火快炒，加盐和少量蚝油。"],
    calories: 130,
    time: 10,
    tags: ["quick", "lowCal", "lowOil", "microwave", "beginner"],
    shoppingTips: "青菜选叶片挺、根部不发黄的；香菇选菌盖厚实不黏的。",
    substitutions: ["青菜可换油麦菜", "香菇可换口蘑"],
  },
  {
    id: "garlic-lettuce",
    name: "蒜蓉油麦菜",
    type: "veg",
    icon: "leafy",
    mainIngredient: "油麦菜",
    ingredients: ["油麦菜", "蒜"],
    seasonings: ["盐", "生抽"],
    steps: ["油麦菜洗净切段。", "少油炒香蒜末。", "大火下菜，变软后加盐和一点生抽。"],
    calories: 95,
    time: 8,
    tags: ["quick", "lowCal", "lowOil", "beginner"],
    shoppingTips: "油麦菜选叶片完整、颜色鲜亮、不打蔫的。",
    substitutions: ["可换生菜、菠菜或小白菜"],
  },
  {
    id: "lotus-pepper",
    name: "清炒藕片",
    type: "veg",
    icon: "root",
    mainIngredient: "莲藕",
    ingredients: ["莲藕", "青椒", "蒜"],
    seasonings: ["盐", "白醋"],
    steps: ["莲藕削皮切薄片，清水冲掉淀粉。", "蒜末爆香，加入藕片翻炒。", "加青椒、盐和少量白醋炒脆。"],
    calories: 180,
    time: 15,
    tags: ["lowOil", "overnight", "beginner"],
    shoppingTips: "莲藕选表皮完整、藕节饱满、切口不发黑的。",
    substitutions: ["莲藕可换山药片", "青椒可省略"],
  },
  {
    id: "celery-tofu-dry",
    name: "芹菜炒香干",
    type: "tofu",
    icon: "tofuDry",
    mainIngredient: "香干",
    ingredients: ["芹菜", "香干", "胡萝卜"],
    seasonings: ["盐", "生抽", "五香粉"],
    steps: ["芹菜切段焯水，香干切条。", "少油炒香干和胡萝卜。", "下芹菜，加生抽和盐翻匀。"],
    calories: 260,
    time: 15,
    tags: ["lowCal", "protein", "overnight", "microwave"],
    shoppingTips: "香干选真空包装完整、闻起来豆香干净的；芹菜选杆脆不空心的。",
    substitutions: ["香干可换豆皮", "芹菜可换韭黄"],
  },
  {
    id: "cabbage-carrot",
    name: "包菜胡萝卜丝",
    type: "veg",
    icon: "cabbage",
    mainIngredient: "包菜",
    ingredients: ["包菜", "胡萝卜", "蒜"],
    seasonings: ["盐", "生抽", "米醋"],
    steps: ["包菜和胡萝卜切丝。", "蒜末爆香后下菜丝。", "大火炒软，加盐、生抽和一点米醋。"],
    calories: 150,
    time: 12,
    tags: ["quick", "lowCal", "lowOil", "overnight", "beginner"],
    shoppingTips: "包菜选紧实沉手、外叶干净的，胡萝卜选表皮光滑不开裂的。",
    substitutions: ["包菜可换紫甘蓝", "胡萝卜可换彩椒"],
  },
  {
    id: "potato-chicken",
    name: "土豆鸡腿丁",
    type: "meat",
    icon: "chicken",
    mainIngredient: "鸡腿肉",
    ingredients: ["鸡腿肉", "土豆", "胡萝卜"],
    seasonings: ["生抽", "老抽", "盐", "黑胡椒"],
    steps: ["鸡腿肉去皮切丁，土豆胡萝卜切小块。", "少油煎鸡腿丁，加入蔬菜块。", "加水焖至土豆软糯，收汁。"],
    calories: 480,
    time: 25,
    tags: ["protein", "microwave", "overnight", "beginner"],
    shoppingTips: "鸡腿肉选肉质弹、无异味的；土豆选表皮完整无发芽的。",
    substitutions: ["鸡腿肉可换鸡胸肉", "土豆可换南瓜"],
  },
];

const EXTRA_RECIPES = [
  {
    id: "chicken-mushroom",
    name: "口蘑鸡胸肉",
    type: "meat",
    icon: "chicken",
    mainIngredient: "鸡胸肉",
    ingredients: ["鸡胸肉", "口蘑", "蒜"],
    seasonings: ["生抽", "黑胡椒", "盐", "淀粉"],
    steps: ["鸡胸肉切片，加生抽、黑胡椒、淀粉抓匀腌 8 分钟。", "口蘑切片，蒜切末。", "先煎鸡胸肉至变色，再下口蘑炒到收汁。"],
    calories: 350,
    time: 16,
    tags: ["protein", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "口蘑选伞面完整、颜色自然、不发黏的。",
    substitutions: ["口蘑可换香菇", "鸡胸肉可换鸡腿肉去皮"],
  },
  {
    id: "chicken-corn-carrot",
    name: "玉米胡萝卜鸡丁",
    type: "meat",
    icon: "chicken",
    mainIngredient: "鸡胸肉",
    ingredients: ["鸡胸肉", "玉米粒", "胡萝卜", "青豆"],
    seasonings: ["盐", "生抽", "黑胡椒", "淀粉"],
    steps: ["鸡胸肉切丁，加盐、生抽、黑胡椒、淀粉抓匀腌 8 分钟。", "胡萝卜切丁，与玉米青豆焯水。", "少油炒鸡丁至变色，再倒入蔬菜丁炒匀。"],
    calories: 390,
    time: 18,
    tags: ["protein", "lowOil", "microwave", "overnight", "beginner", "filling"],
    shoppingTips: "冷冻杂蔬选颗粒分明、冰霜少的，适合工作日晚餐快手做。",
    substitutions: ["青豆可省略", "鸡胸肉可换虾仁"],
  },
  {
    id: "chicken-cucumber",
    name: "黄瓜鸡丁",
    type: "meat",
    icon: "chicken",
    mainIngredient: "鸡胸肉",
    ingredients: ["鸡胸肉", "黄瓜", "胡萝卜"],
    seasonings: ["生抽", "盐", "料酒", "淀粉"],
    steps: ["鸡胸肉切丁，加生抽、料酒、淀粉抓匀腌 8 分钟。", "黄瓜和胡萝卜切丁。", "少油先炒鸡丁至变色，再快速下蔬菜丁翻匀。"],
    calories: 330,
    time: 15,
    tags: ["protein", "lowCal", "lowOil", "beginner"],
    shoppingTips: "黄瓜选刺硬、挺直的，带饭时黄瓜不要炒太久。",
    substitutions: ["黄瓜可换西葫芦", "胡萝卜可换彩椒"],
  },
  {
    id: "chicken-pumpkin",
    name: "南瓜鸡腿丁",
    type: "meat",
    icon: "chicken",
    mainIngredient: "鸡腿肉",
    ingredients: ["鸡腿肉", "南瓜", "洋葱"],
    seasonings: ["生抽", "盐", "黑胡椒"],
    steps: ["鸡腿肉去皮切丁。", "南瓜切小块，洋葱切丝。", "先煎鸡腿丁，再加南瓜焖到软糯。"],
    calories: 460,
    time: 24,
    tags: ["protein", "microwave", "overnight", "filling"],
    shoppingTips: "南瓜选切面颜色深、质地紧实的，带饭复热后口感稳定。",
    substitutions: ["南瓜可换土豆", "洋葱可省略"],
  },
  {
    id: "beef-onion",
    name: "洋葱牛肉片",
    type: "meat",
    icon: "beef",
    mainIngredient: "牛肉",
    ingredients: ["牛肉", "洋葱", "姜"],
    seasonings: ["生抽", "蚝油", "黑胡椒", "淀粉"],
    steps: ["牛肉逆纹切片腌 10 分钟。", "洋葱切丝。", "快炒牛肉变色后加洋葱和蚝油炒匀。"],
    calories: 430,
    time: 18,
    tags: ["protein", "microwave", "overnight", "filling"],
    shoppingTips: "牛肉选纹理细、出水少的，切片后更容易快熟。",
    substitutions: ["牛肉可换猪里脊", "洋葱可换彩椒"],
  },
  {
    id: "beef-tomato",
    name: "番茄牛肉片",
    type: "meat",
    icon: "beef",
    mainIngredient: "牛肉",
    ingredients: ["牛肉", "番茄", "洋葱"],
    seasonings: ["生抽", "盐", "黑胡椒", "淀粉"],
    steps: ["牛肉切片，加生抽、黑胡椒、淀粉抓匀腌 10 分钟。", "番茄切块，洋葱切丝。", "番茄炒出少量汁后加入牛肉快炒收浓。"],
    calories: 410,
    time: 20,
    tags: ["protein", "lowOil", "microwave", "overnight"],
    shoppingTips: "番茄选熟度适中的，带饭版要把汤汁收浓一点。",
    substitutions: ["番茄可换彩椒", "牛肉可换鸡腿肉"],
  },
  {
    id: "pork-pepper",
    name: "青椒猪里脊",
    type: "meat",
    icon: "pork",
    mainIngredient: "猪里脊",
    ingredients: ["猪里脊", "青椒", "姜"],
    seasonings: ["生抽", "料酒", "盐", "淀粉"],
    steps: ["猪里脊切片，加料酒、生抽、淀粉抓匀腌 8 分钟。", "青椒切块。", "少油先炒肉片至变色，再加青椒快速翻炒。"],
    calories: 360,
    time: 16,
    tags: ["protein", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "猪里脊选颜色粉红、纹理细的，适合快炒带饭。",
    substitutions: ["青椒可换彩椒", "猪里脊可换鸡胸肉"],
  },
  {
    id: "pork-potato",
    name: "土豆肉片",
    type: "meat",
    icon: "potato",
    mainIngredient: "猪里脊",
    ingredients: ["猪里脊", "土豆", "青椒"],
    seasonings: ["生抽", "盐", "淀粉"],
    steps: ["土豆切薄片泡水后沥干。", "猪里脊切片，加生抽和淀粉抓匀腌 8 分钟。", "少油先炒肉片，再下土豆片炒熟收干。"],
    calories: 440,
    time: 22,
    tags: ["protein", "microwave", "overnight", "filling"],
    shoppingTips: "土豆不要选发芽或发青的，带饭版切薄更容易熟。",
    substitutions: ["土豆可换山药", "青椒可省略"],
  },
  {
    id: "fish-cod-broccoli",
    name: "鳕鱼西兰花",
    type: "meat",
    icon: "fish",
    mainIngredient: "鳕鱼",
    ingredients: ["鳕鱼", "西兰花", "蒜"],
    seasonings: ["盐", "黑胡椒", "料酒"],
    steps: ["鳕鱼擦干切块，加盐和料酒。", "西兰花焯水。", "少油煎鳕鱼，再加西兰花轻轻翻匀。"],
    calories: 310,
    time: 16,
    tags: ["protein", "lowCal", "lowOil", "microwave", "beginner"],
    shoppingTips: "冷冻鳕鱼选冰衣薄、肉色自然的，解冻后擦干再煎。",
    substitutions: ["鳕鱼可换巴沙鱼", "西兰花可换芦笋"],
  },
  {
    id: "shrimp-broccoli",
    name: "西兰花虾仁",
    type: "meat",
    icon: "shrimp",
    mainIngredient: "虾仁",
    ingredients: ["虾仁", "西兰花", "胡萝卜"],
    seasonings: ["盐", "白胡椒", "料酒"],
    steps: ["虾仁加盐、白胡椒和料酒抓匀腌 5 分钟。", "西兰花和胡萝卜焯水后沥干。", "虾仁炒变色后加入蔬菜翻匀。"],
    calories: 300,
    time: 14,
    tags: ["quick", "protein", "lowCal", "lowOil", "beginner"],
    shoppingTips: "虾仁选个体完整、腥味轻的，适合低卡饭盒。",
    substitutions: ["虾仁可换鸡胸肉", "西兰花可换荷兰豆"],
  },
  {
    id: "egg-chive",
    name: "韭菜炒蛋",
    type: "egg",
    icon: "egg",
    mainIngredient: "鸡蛋",
    ingredients: ["鸡蛋", "韭菜"],
    seasonings: ["盐"],
    steps: ["鸡蛋打散。", "韭菜切段。", "先炒蛋，再下韭菜快速翻匀。"],
    calories: 280,
    time: 8,
    tags: ["quick", "protein", "lowCal", "beginner"],
    shoppingTips: "韭菜选叶片挺、根部不烂的，带饭要炒干一点。",
    substitutions: ["韭菜可换蒜黄", "鸡蛋可加一个蛋清"],
  },
  {
    id: "egg-cucumber",
    name: "黄瓜炒蛋",
    type: "egg",
    icon: "egg",
    mainIngredient: "鸡蛋",
    ingredients: ["鸡蛋", "黄瓜", "木耳"],
    seasonings: ["盐", "生抽"],
    steps: ["鸡蛋先炒定型盛出。", "黄瓜切片，木耳焯水。", "下黄瓜木耳快炒后倒回鸡蛋。"],
    calories: 290,
    time: 12,
    tags: ["quick", "lowCal", "lowOil", "beginner"],
    shoppingTips: "木耳提前泡发并焯水，带饭更安心。",
    substitutions: ["黄瓜可换西葫芦", "木耳可省略"],
  },
  {
    id: "egg-spinach",
    name: "菠菜炒蛋",
    type: "egg",
    icon: "egg",
    mainIngredient: "鸡蛋",
    ingredients: ["鸡蛋", "菠菜", "蒜"],
    seasonings: ["盐"],
    steps: ["菠菜焯水挤干。", "鸡蛋先炒定型。", "蒜末爆香后加菠菜和鸡蛋翻匀。"],
    calories: 270,
    time: 12,
    tags: ["quick", "lowCal", "lowOil", "beginner"],
    shoppingTips: "菠菜焯水后挤干，第二天不容易出水。",
    substitutions: ["菠菜可换小白菜", "蒜可省略"],
  },
  {
    id: "tofu-broccoli",
    name: "西兰花豆腐",
    type: "tofu",
    icon: "tofu",
    mainIngredient: "豆腐",
    ingredients: ["北豆腐", "西兰花", "蒜"],
    seasonings: ["生抽", "盐", "淀粉"],
    steps: ["豆腐切块煎到两面微黄。", "西兰花焯水。", "蒜末爆香后加豆腐和西兰花，薄芡收汁。"],
    calories: 310,
    time: 18,
    tags: ["protein", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "北豆腐比嫩豆腐更适合带饭，不容易碎。",
    substitutions: ["北豆腐可换老豆腐", "西兰花可换口蘑"],
  },
  {
    id: "tofu-mushroom",
    name: "香菇豆腐",
    type: "tofu",
    icon: "tofu",
    mainIngredient: "豆腐",
    ingredients: ["北豆腐", "香菇", "胡萝卜"],
    seasonings: ["生抽", "盐", "淀粉"],
    steps: ["豆腐煎定型。", "香菇和胡萝卜切片。", "一起烧 3 分钟后收汁。"],
    calories: 320,
    time: 20,
    tags: ["protein", "lowOil", "microwave", "overnight", "filling"],
    shoppingTips: "香菇选菌盖厚实、闻起来清香的。",
    substitutions: ["香菇可换口蘑", "胡萝卜可换青椒"],
  },
  {
    id: "tofu-skin-pepper",
    name: "青椒豆皮",
    type: "tofu",
    icon: "tofuDry",
    mainIngredient: "豆皮",
    ingredients: ["豆皮", "青椒", "胡萝卜"],
    seasonings: ["生抽", "盐", "五香粉"],
    steps: ["豆皮切条焯水。", "青椒和胡萝卜切丝。", "少油翻炒到水分收干。"],
    calories: 290,
    time: 14,
    tags: ["quick", "protein", "lowOil", "overnight", "beginner"],
    shoppingTips: "豆皮买回来尽量当天做，带饭前炒干更好吃。",
    substitutions: ["豆皮可换香干", "青椒可换芹菜"],
  },
  {
    id: "tofu-dry-leek",
    name: "韭黄炒香干",
    type: "tofu",
    icon: "tofuDry",
    mainIngredient: "香干",
    ingredients: ["香干", "韭黄", "胡萝卜"],
    seasonings: ["生抽", "盐"],
    steps: ["香干切条。", "韭黄切段，胡萝卜切丝。", "先炒香干，再下蔬菜快速翻匀。"],
    calories: 280,
    time: 12,
    tags: ["quick", "protein", "lowOil", "overnight", "beginner"],
    shoppingTips: "香干选包装完整、豆香干净的。",
    substitutions: ["韭黄可换芹菜", "胡萝卜可省略"],
  },
  {
    id: "mushroom-carrot",
    name: "口蘑胡萝卜",
    type: "veg",
    icon: "mushroom",
    mainIngredient: "口蘑",
    ingredients: ["口蘑", "胡萝卜", "蒜"],
    seasonings: ["盐", "黑胡椒"],
    steps: ["口蘑切片，胡萝卜切片。", "蒜末爆香。", "先炒胡萝卜，再加口蘑炒到收汁。"],
    calories: 120,
    time: 12,
    tags: ["quick", "lowCal", "lowOil", "microwave", "beginner"],
    shoppingTips: "口蘑炒到收汁，第二天不容易水塌。",
    substitutions: ["口蘑可换香菇", "胡萝卜可换彩椒"],
  },
  {
    id: "broccoli-carrot",
    name: "西兰花胡萝卜",
    type: "veg",
    icon: "leafy",
    mainIngredient: "西兰花",
    ingredients: ["西兰花", "胡萝卜", "蒜"],
    seasonings: ["盐", "生抽"],
    steps: ["西兰花和胡萝卜焯水。", "蒜末爆香。", "下蔬菜快速翻匀。"],
    calories: 130,
    time: 10,
    tags: ["quick", "lowCal", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "西兰花焯水后沥干再炒，饭盒里不积水。",
    substitutions: ["胡萝卜可换玉米粒", "西兰花可换菜花"],
  },
  {
    id: "zucchini-eggless",
    name: "清炒西葫芦",
    type: "veg",
    icon: "zucchini",
    mainIngredient: "西葫芦",
    ingredients: ["西葫芦", "胡萝卜", "蒜"],
    seasonings: ["盐", "生抽"],
    steps: ["西葫芦切片。", "蒜末爆香。", "大火快炒，出水前收住。"],
    calories: 110,
    time: 10,
    tags: ["quick", "lowCal", "lowOil", "beginner"],
    shoppingTips: "西葫芦选表皮光亮、拿起来沉手的，别炒太久。",
    substitutions: ["西葫芦可换黄瓜", "胡萝卜可省略"],
  },
  {
    id: "cabbage-mushroom",
    name: "包菜香菇",
    type: "veg",
    icon: "cabbage",
    mainIngredient: "包菜",
    ingredients: ["包菜", "香菇", "蒜"],
    seasonings: ["盐", "生抽"],
    steps: ["包菜撕片，香菇切片。", "蒜末爆香。", "下香菇和包菜炒到断生并收干。"],
    calories: 140,
    time: 12,
    tags: ["quick", "lowCal", "lowOil", "overnight", "beginner"],
    shoppingTips: "包菜耐放，适合一周买一次分几顿用。",
    substitutions: ["香菇可换口蘑", "包菜可换娃娃菜"],
  },
  {
    id: "yam-carrot",
    name: "山药胡萝卜",
    type: "veg",
    icon: "root",
    mainIngredient: "山药",
    ingredients: ["山药", "胡萝卜", "木耳"],
    seasonings: ["盐", "白醋"],
    steps: ["山药和胡萝卜切片。", "木耳泡发焯水。", "大火快炒，出锅前加少量白醋。"],
    calories: 180,
    time: 16,
    tags: ["lowOil", "overnight", "beginner", "filling"],
    shoppingTips: "山药选表皮完整、切口新鲜的，处理时可戴手套。",
    substitutions: ["山药可换莲藕", "木耳可省略"],
  },
  {
    id: "potato-shredded",
    name: "青椒土豆丝",
    type: "veg",
    icon: "potato",
    mainIngredient: "土豆",
    ingredients: ["土豆", "青椒", "蒜"],
    seasonings: ["盐", "米醋"],
    steps: ["土豆切丝冲掉淀粉。", "蒜末爆香。", "大火快炒土豆丝和青椒，保持脆感。"],
    calories: 210,
    time: 15,
    tags: ["quick", "lowOil", "overnight", "beginner", "filling"],
    shoppingTips: "土豆丝冲水后沥干，带饭时口感更清爽。",
    substitutions: ["青椒可换胡萝卜", "米醋可换白醋"],
  },
  {
    id: "pumpkin-steamed",
    name: "清蒸南瓜",
    type: "staple",
    icon: "root",
    mainIngredient: "南瓜",
    ingredients: ["南瓜"],
    seasonings: ["盐"],
    steps: ["南瓜切块。", "蒸 12-15 分钟。", "按口味撒一点盐或黑胡椒。"],
    calories: 180,
    time: 15,
    tags: ["lowOil", "microwave", "overnight", "beginner", "filling"],
    shoppingTips: "南瓜切块冷藏可分两顿用，适合替代部分主食。",
    substitutions: ["南瓜可换红薯", "也可不加盐"],
  },
  {
    id: "rice-egg-veggie",
    name: "蛋蔬炒饭",
    type: "staple",
    icon: "rice",
    mainIngredient: "米饭",
    ingredients: ["米饭", "鸡蛋", "胡萝卜", "玉米粒", "青豆"],
    seasonings: ["盐", "生抽"],
    steps: ["鸡蛋炒散盛出。", "杂蔬炒香。", "加入米饭和鸡蛋炒散收干。"],
    calories: 520,
    time: 15,
    tags: ["quick", "microwave", "overnight", "beginner", "filling"],
    shoppingTips: "隔夜米饭更容易炒散，杂蔬可用冷冻小包装。",
    substitutions: ["米饭可换糙米饭", "青豆可省略"],
  },
  {
    id: "brown-rice-chicken",
    name: "鸡肉糙米饭",
    type: "staple",
    icon: "rice",
    mainIngredient: "糙米饭",
    ingredients: ["糙米饭", "鸡胸肉", "西兰花", "胡萝卜"],
    seasonings: ["盐", "黑胡椒", "生抽"],
    steps: ["鸡胸肉切丁煎熟。", "西兰花和胡萝卜焯水。", "和糙米饭装盒，调味拌匀。"],
    calories: 560,
    time: 22,
    tags: ["protein", "lowOil", "microwave", "overnight", "filling"],
    shoppingTips: "糙米饭可提前多煮分装冷藏，适合工作日复用。",
    substitutions: ["糙米饭可换米饭", "鸡胸肉可换虾仁"],
  },
  {
    id: "pepper-chicken",
    name: "彩椒鸡胸肉",
    type: "meat",
    icon: "pepper",
    tier: "core",
    mainIngredient: "鸡胸肉",
    ingredients: ["鸡胸肉", "彩椒", "洋葱"],
    seasonings: ["生抽", "黑胡椒", "盐", "淀粉"],
    steps: ["鸡胸肉切片，加生抽、黑胡椒、淀粉抓匀腌 8 分钟。", "彩椒和洋葱切条。", "少油先炒鸡胸肉至变色，再下彩椒洋葱快炒收干。"],
    calories: 360,
    time: 16,
    tags: ["protein", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "彩椒选表皮光亮、蒂部新鲜的；鸡胸肉选颜色粉嫩、表面不黏手的。",
    substitutions: ["彩椒可换青椒", "鸡胸肉可换去皮鸡腿肉"],
  },
  {
    id: "asparagus-shrimp",
    name: "芦笋虾仁",
    type: "meat",
    icon: "shrimp",
    tier: "core",
    mainIngredient: "虾仁",
    ingredients: ["虾仁", "芦笋", "胡萝卜"],
    seasonings: ["盐", "白胡椒", "料酒"],
    steps: ["虾仁加盐、白胡椒和料酒抓匀腌 5 分钟。", "芦笋切段，和胡萝卜片焯水 30 秒后沥干。", "少油炒虾仁至变色，加入芦笋胡萝卜快速翻匀。"],
    calories: 290,
    time: 14,
    tags: ["quick", "protein", "lowCal", "lowOil", "microwave", "beginner"],
    shoppingTips: "芦笋选根部不空心、颜色鲜绿的；冷冻虾仁选冰衣薄、个体完整的。",
    substitutions: ["芦笋可换西兰花", "虾仁可换鸡胸肉丁"],
  },
  {
    id: "tomato-tofu-beef",
    name: "番茄豆腐牛肉末",
    type: "tofu",
    icon: "tofu",
    tier: "core",
    mainIngredient: "豆腐",
    ingredients: ["北豆腐", "番茄", "牛肉末", "葱"],
    seasonings: ["生抽", "盐", "黑胡椒", "淀粉"],
    steps: ["北豆腐切块焯水，番茄切块。", "少油炒牛肉末至变色，加入番茄炒出少量汁。", "放入豆腐烧 3 分钟，勾薄芡后收浓。"],
    calories: 380,
    time: 18,
    tags: ["protein", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "北豆腐比嫩豆腐更适合带饭；番茄选熟而不软烂的，汤汁更容易收浓。",
    substitutions: ["牛肉末可换鸡肉末", "北豆腐可换老豆腐"],
  },
  {
    id: "beef-broccoli-mushroom",
    name: "西兰花口蘑牛肉粒",
    type: "meat",
    icon: "beef",
    tier: "core",
    mainIngredient: "牛肉",
    ingredients: ["牛肉", "西兰花", "口蘑"],
    seasonings: ["生抽", "蚝油", "黑胡椒", "淀粉"],
    steps: ["牛肉切小粒，加生抽、黑胡椒、淀粉抓匀腌 10 分钟。", "西兰花焯水，口蘑切片。", "少油快炒牛肉粒，加入口蘑和西兰花炒到水分收干。"],
    calories: 430,
    time: 20,
    tags: ["protein", "lowOil", "microwave", "overnight", "filling"],
    shoppingTips: "牛肉选纹理细、颜色鲜红的；口蘑选伞面完整、不发黏的。",
    substitutions: ["牛肉可换鸡腿肉", "口蘑可换香菇"],
  },
  {
    id: "carrot-fungus-egg",
    name: "胡萝卜木耳炒蛋",
    type: "egg",
    icon: "egg",
    tier: "core",
    mainIngredient: "鸡蛋",
    ingredients: ["鸡蛋", "胡萝卜", "木耳", "葱"],
    seasonings: ["盐", "生抽"],
    steps: ["木耳泡发后焯水，胡萝卜切片。", "鸡蛋打散，少油炒到刚定型后盛出。", "先炒胡萝卜和木耳，再倒回鸡蛋翻匀调味。"],
    calories: 300,
    time: 12,
    tags: ["quick", "protein", "lowCal", "lowOil", "microwave", "overnight", "beginner"],
    shoppingTips: "干木耳泡发后闻起来应清爽无异味，胡萝卜选表皮光滑不开裂的。",
    substitutions: ["胡萝卜可换黄瓜", "木耳可省略"],
  },
  {
    id: "chickpea-chicken-salad-rice",
    name: "鹰嘴豆鸡胸肉饭",
    type: "staple",
    icon: "bean",
    tier: "lunchbox",
    mainIngredient: "鹰嘴豆",
    ingredients: ["鹰嘴豆", "鸡胸肉", "糙米饭", "彩椒", "黄瓜"],
    seasonings: ["盐", "黑胡椒", "生抽"],
    steps: ["鸡胸肉切丁，加盐、黑胡椒和生抽腌 8 分钟后煎熟。", "鹰嘴豆沥干，彩椒切丁，黄瓜切丁。", "糙米饭打底，放入鸡胸肉和配菜，黄瓜建议单独放一侧。"],
    calories: 560,
    time: 18,
    tags: ["protein", "lowOil", "overnight", "filling"],
    shoppingTips: "鹰嘴豆可用熟制罐装款，选配料简单、钠含量较低的；黄瓜带饭前尽量沥干。",
    substitutions: ["鹰嘴豆可换毛豆", "黄瓜可换西兰花以降低出水"],
  },
  {
    id: "purple-cabbage-egg-rice",
    name: "紫甘蓝鸡蛋炒饭",
    type: "staple",
    icon: "purple",
    tier: "lunchbox",
    mainIngredient: "米饭",
    ingredients: ["米饭", "鸡蛋", "紫甘蓝", "胡萝卜"],
    seasonings: ["盐", "生抽"],
    steps: ["紫甘蓝和胡萝卜切细丝，鸡蛋炒散盛出。", "少油炒紫甘蓝和胡萝卜至断生。", "加入米饭和鸡蛋炒散收干，少量生抽调味。"],
    calories: 500,
    time: 15,
    tags: ["quick", "microwave", "overnight", "beginner", "filling"],
    shoppingTips: "紫甘蓝选叶片紧实、切口不发黑的；隔夜米饭更容易炒散。",
    substitutions: ["米饭可换糙米饭", "紫甘蓝可换包菜"],
  },
  {
    id: "bean-chicken",
    name: "豆角鸡胸肉丁",
    type: "meat",
    icon: "chicken",
    tier: "flexible",
    mainIngredient: "鸡胸肉",
    ingredients: ["鸡胸肉", "豆角", "胡萝卜"],
    seasonings: ["生抽", "盐", "料酒", "淀粉"],
    steps: ["鸡胸肉切丁，加生抽、料酒、淀粉抓匀腌 8 分钟。", "豆角切小段，沸水焯 2 分钟至颜色变深后沥干。", "少油炒鸡丁至变色，加入豆角和胡萝卜炒熟收干。"],
    calories: 350,
    time: 18,
    tags: ["protein", "lowCal", "lowOil", "microwave", "overnight"],
    shoppingTips: "豆角选颜色鲜绿、豆荚饱满但不鼓胀的；豆角必须彻底加热熟透。",
    substitutions: ["豆角可换荷兰豆", "鸡胸肉可换猪里脊"],
  },
  {
    id: "shrimp-veggie-brown-rice",
    name: "三色虾仁糙米饭",
    type: "staple",
    icon: "rice",
    tier: "lunchbox",
    mainIngredient: "糙米饭",
    ingredients: ["糙米饭", "虾仁", "西兰花", "玉米粒", "胡萝卜"],
    seasonings: ["盐", "白胡椒", "生抽"],
    steps: ["虾仁加盐、白胡椒抓匀腌 5 分钟后炒熟。", "西兰花、玉米粒和胡萝卜焯水后沥干。", "糙米饭装盒，铺上虾仁和蔬菜，少量生抽调味。"],
    calories: 520,
    time: 18,
    tags: ["protein", "lowOil", "microwave", "overnight", "filling"],
    shoppingTips: "糙米饭可提前分装；冷冻玉米粒和虾仁选冰霜少、颗粒分明的。",
    substitutions: ["虾仁可换鸡胸肉", "糙米饭可换米饭"],
  },
];

const DEFAULT_SETTINGS = {
  preferFavorites: false,
  randomMeatCount: 1,
  randomVegCount: 1,
};

const DEFAULT_MY_SECTIONS = {
  preferences: true,
  favorites: true,
  blocked: false,
  custom: false,
  history: false,
};

const MODE_META = {
  default: { label: "省脑默认" },
  quick: { label: "快手" },
  lean: { label: "低卡" },
};

const INGREDIENT_CATEGORY_RULES = [
  { category: "肉蛋豆", keywords: ["鸡", "牛", "猪", "虾", "鱼", "蛋", "豆腐", "香干", "豆皮", "肉"] },
  { category: "调料", keywords: ["盐", "糖", "生抽", "老抽", "蚝油", "料酒", "黑胡椒", "白胡椒", "淀粉", "豆瓣酱", "花椒粉", "醋", "五香粉"] },
  { category: "主食", keywords: ["米饭", "糙米", "面", "土豆", "南瓜", "山药", "藕"] },
];

const state = {
  view: "random",
  recipeFilters: { type: "all", ingredient: "all", tag: "all", tier: "all" },
  diyFilters: { type: "all", ingredient: "all", tag: "all", tier: "all" },
  recipeSearch: "",
  diySelected: load("diySelected", []),
  randomResults: [],
  previewResults: [],
  diyRecommendationKey: "",
  diyRecommendationIds: [],
  isRolling: false,
  swappingRecipeId: "",
  swappedRecipeId: "",
  settings: load("settings", DEFAULT_SETTINGS),
  modePreference: load("modePreference", "default"),
  mealHistory: load("mealHistory", []),
  mySections: load("mySections", DEFAULT_MY_SECTIONS),
  shoppingChecked: load("shoppingChecked", {}),
  favorites: load("favorites", []),
  blocked: load("blocked", []),
  recent: load("recent", []),
  customRecipes: load("customRecipes", []),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(`chibale:${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(`chibale:${key}`, JSON.stringify(value));
}

function persistState() {
  normalizePreferences();
  save("settings", state.settings);
  save("modePreference", state.modePreference);
  save("mealHistory", state.mealHistory);
  save("mySections", state.mySections);
  save("shoppingChecked", state.shoppingChecked);
  save("favorites", state.favorites);
  save("blocked", state.blocked);
  save("recent", state.recent);
  save("customRecipes", state.customRecipes);
  save("diySelected", state.diySelected);
  save("randomResultIds", state.randomResults.map((recipe) => recipe.id));
}

function allRecipes() {
  return [...BUILT_IN_RECIPES, ...EXTRA_RECIPES, ...state.customRecipes].map(normalizeRecipe);
}

function getRecipe(id) {
  return allRecipes().find((recipe) => recipe.id === id);
}

function normalizeRecipe(recipe) {
  const tags = [...new Set([...(recipe.tags || []), ...inferHealthTags(recipe)])];
  const lunchboxScore = Number(recipe.lunchboxScore) || inferLunchboxScore(recipe);
  return {
    ...recipe,
    tags,
    tier: recipe.tier || inferRecipeTier(recipe),
    lunchboxScore,
    reheatTip: recipe.reheatTip || inferReheatTip(recipe),
    overnightNote: recipe.overnightNote || inferOvernightNote(recipe),
    storageTip: recipe.storageTip || "晾到不烫手后密封冷藏，第二天吃前充分加热。",
    wateryRisk: recipe.wateryRisk || inferWateryRisk(recipe),
    verifiedLevel: recipe.verifiedLevel || (recipe.custom ? "自定义内容" : "已人工复核"),
  };
}

function inferRecipeTier(recipe) {
  if (recipe.type === "staple") return "lunchbox";
  const text = [recipe.name, recipe.mainIngredient, ...(recipe.ingredients || [])].join("");
  if (/(黄瓜|油麦菜|青菜|菠菜|韭菜|韭黄|芹菜|西葫芦|豆角|番茄|嫩豆腐)/.test(text)) return "flexible";
  if (recipe.tags?.includes("overnight") && recipe.tags?.includes("protein")) return "core";
  if (recipe.tags?.includes("lowOil") && recipe.tags?.includes("beginner") && inferWateryRisk(recipe) === "低") return "core";
  return "flexible";
}

function inferHealthTags(recipe) {
  const tags = [];
  const text = [recipe.name, ...(recipe.ingredients || []), ...(recipe.seasonings || [])].join("");
  if (!/(老抽|蚝油|豆瓣酱)/.test(text)) tags.push("lowSalt");
  if (!/(番茄|嫩豆腐|汤|汁)/.test(text)) tags.push("lessSauce");
  if ((Number(recipe.calories) || 0) <= 360 && !/(土豆|南瓜|糖)/.test(text)) tags.push("sugarControl");
  if (recipe.tags?.includes("protein") || /(土豆|莲藕|香干|鸡|牛|虾|蛋|豆腐)/.test(text)) tags.push("filling");
  return tags;
}

function inferLunchboxScore(recipe) {
  let score = 3;
  if (recipe.tags?.includes("overnight")) score += 1;
  if (recipe.tags?.includes("microwave")) score += 1;
  if (recipe.tags?.includes("lowOil")) score += 0.5;
  if (inferWateryRisk(recipe) === "高") score -= 1;
  return Math.max(1, Math.min(5, Math.round(score)));
}

function inferReheatTip(recipe) {
  if (!recipe.tags?.includes("microwave")) return "复热前先少量试温，绿叶菜不建议反复加热太久。";
  return "微波炉中高火 1-2 分钟，中途翻动一次，口感更均匀。";
}

function inferOvernightNote(recipe) {
  if (recipe.tags?.includes("overnight")) return "适合提前做好，第二天口感相对稳定。";
  return "更适合现做现吃，带饭时建议控水并尽快冷藏。";
}

function inferWateryRisk(recipe) {
  const text = [recipe.name, recipe.mainIngredient, ...(recipe.ingredients || [])].join("");
  if (/(番茄|黄瓜|青菜|油麦菜|生菜|菠菜|小白菜)/.test(text)) return "中";
  if (/(豆腐|土豆|莲藕|包菜|胡萝卜|香干|肉|蛋|虾)/.test(text)) return "低";
  return "中";
}

function tagMeta(tagId) {
  return TAGS.find((tag) => tag.id === tagId) || { id: tagId, label: tagId, icon: "＋" };
}

function typeMeta(type) {
  return TYPE_META[type] || { label: "其他", icon: "□" };
}

function tierMeta(tier) {
  return TIER_META[tier] || TIER_META.flexible;
}

function iconMeta(iconId) {
  return ICON_LIBRARY.find((icon) => icon.id === iconId) || ICON_LIBRARY[0];
}

function ingredientGroupIds(recipe) {
  const searchable = [recipe.mainIngredient, ...(recipe.ingredients || [])].join(" ");
  return INGREDIENT_GROUPS
    .filter((group) => group.keywords.some((keyword) => searchable.includes(keyword)))
    .map((group) => group.id);
}

function fallbackIconId(recipe) {
  const searchable = [recipe.name, recipe.mainIngredient, ...(recipe.ingredients || [])].join("");
  const groupIds = ingredientGroupIds(recipe);
  if (groupIds.includes("chicken")) return "chicken";
  if (groupIds.includes("beef")) return "beef";
  if (groupIds.includes("pork")) return "pork";
  if (/虾/.test(searchable)) return "shrimp";
  if (/鱼|鳕/.test(searchable)) return "fish";
  if (groupIds.includes("egg")) return "egg";
  if (/香干|豆皮/.test(searchable)) return "tofuDry";
  if (groupIds.includes("tofu")) return "tofu";
  if (/西葫芦/.test(searchable)) return "zucchini";
  if (/土豆/.test(searchable)) return "potato";
  if (groupIds.includes("mushroom")) return "mushroom";
  if (groupIds.includes("leafy")) return "leafy";
  if (groupIds.includes("root")) return "root";
  return typeMeta(recipe.type).icon || "dish";
}

function recipeIcon(recipe) {
  return iconMeta(recipe.icon || fallbackIconId(recipe)).symbol;
}

function isProteinType(type) {
  return ["meat", "egg", "tofu"].includes(type);
}

function isVegType(type) {
  return type === "veg";
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function isBlocked(id) {
  return state.blocked.includes(id);
}

function normalizePreferences() {
  const favoriteSet = new Set(state.favorites);
  state.blocked = state.blocked.filter((id) => !favoriteSet.has(id));
  if (!MODE_META[state.modePreference]) state.modePreference = "default";
  state.mySections = { ...DEFAULT_MY_SECTIONS, ...(state.mySections || {}) };
  state.recipeFilters = { type: "all", ingredient: "all", tag: "all", tier: "all", ...(state.recipeFilters || {}) };
  state.diyFilters = { type: "all", ingredient: "all", tag: "all", tier: "all", ...(state.diyFilters || {}) };
}

function weekStart(date = new Date()) {
  const copy = new Date(date);
  const day = copy.getDay() || 7;
  copy.setHours(0, 0, 0, 0);
  copy.setDate(copy.getDate() - day + 1);
  return copy;
}

function recentMealIds(days = 7) {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return new Set(
    state.mealHistory
      .filter((meal) => new Date(meal.date).getTime() >= cutoff)
      .flatMap((meal) => meal.recipeIds || [])
  );
}

function lunchboxStats(recipes) {
  const calories = recipes.reduce((sum, recipe) => sum + (Number(recipe.calories) || 0), 0);
  const time = recipes.reduce((sum, recipe) => sum + (Number(recipe.time) || 0), 0);
  const proteinCount = recipes.filter((recipe) => isProteinType(recipe.type)).length;
  const vegCount = recipes.filter((recipe) => isVegType(recipe.type)).length;
  const microwaveCount = recipes.filter((recipe) => recipe.tags?.includes("microwave")).length;
  const overnightCount = recipes.filter((recipe) => recipe.tags?.includes("overnight")).length;
  const lowOilCount = recipes.filter((recipe) => recipe.tags?.includes("lowOil")).length;
  const lowCalCount = recipes.filter((recipe) => recipe.tags?.includes("lowCal")).length;
  const score = recipes.length
    ? Math.round(recipes.reduce((sum, recipe) => sum + (Number(recipe.lunchboxScore) || 3), 0) / recipes.length)
    : 0;
  return { calories, time, proteinCount, vegCount, microwaveCount, overnightCount, lowOilCount, lowCalCount, score };
}

function lunchboxMoodText(recipes) {
  if (!recipes.length) return "先抽一盒，今晚少纠结五分钟。";
  const stats = lunchboxStats(recipes);
  if (state.modePreference === "quick" || stats.time <= 22) return "适合没什么力气做饭的晚上。";
  if (state.modePreference === "lean" || stats.lowCalCount >= recipes.length) return "这组偏清爽，适合明天中午不想犯困。";
  if (stats.microwaveCount === recipes.length && stats.overnightCount === recipes.length) return "这盒挺稳，复热不容易翻车。";
  return "这盒搭得比较踏实，明天中午不用临时纠结。";
}

function lunchboxReasonText(recipes) {
  if (!recipes.length) return "";
  const stats = lunchboxStats(recipes);
  const balance = stats.proteinCount && stats.vegCount
    ? "蛋白质和蔬菜都有"
    : stats.proteinCount ? "蛋白质够了，蔬菜可以再补一道" : "蔬菜有了，加道蛋白质会更顶饱";
  const overnight = `${stats.overnightCount} 道适合隔夜`;
  const reuse = ingredientReuseText(recipes);
  return `${balance}，约 ${stats.time || "--"} 分钟，${overnight}。${reuse}`;
}

function lunchboxHealthText(recipes) {
  if (!recipes.length) return "";
  const stats = lunchboxStats(recipes);
  const parts = [];
  parts.push(stats.proteinCount ? "有蛋白质" : "缺蛋白质");
  parts.push(stats.vegCount ? "有蔬菜" : "缺蔬菜");
  if (stats.lowOilCount >= Math.max(1, recipes.length - 1)) parts.push("整体少油");
  parts.push(stats.lowCalCount ? "适合控卡" : "控卡时注意份量");
  return parts.join(" · ");
}

function thisWeekMeals() {
  const start = weekStart().getTime();
  return state.mealHistory.filter((meal) => new Date(meal.date).getTime() >= start);
}

function mainIngredients(recipes) {
  return recipes.map((recipe) => recipe.mainIngredient).filter(Boolean);
}

function sharedMainIngredientCount(recipe, contextRecipes) {
  const context = new Set(mainIngredients(contextRecipes));
  if (!context.size || !recipe.mainIngredient) return 0;
  return context.has(recipe.mainIngredient) ? 1 : 0;
}

function uniqueIngredientCount(recipes) {
  return new Set(recipes.flatMap((recipe) => recipe.ingredients || [])).size;
}

function ingredientReuseText(recipes) {
  const mains = mainIngredients(recipes);
  const repeated = mains.filter((item, index) => mains.indexOf(item) !== index);
  if (repeated.length) return `${[...new Set(repeated)].join("、")}可以复用，买菜更省心。`;
  const count = uniqueIngredientCount(recipes);
  if (count <= recipes.length * 2) return "主食材不多，适合工作日顺手买。";
  return "这盒食材稍多，适合顺路买菜或周末备菜。";
}

function localFeedbackText() {
  const weekMeals = thisWeekMeals();
  if (!weekMeals.length) return "确认带饭后，会帮你记下本周少点了几次外卖。";
  const recentRecipes = weekMeals.flatMap((meal) => meal.recipeIds || []).map(getRecipe).filter(Boolean);
  const counts = recentRecipes.reduce((map, recipe) => {
    const key = recipe.mainIngredient || typeMeta(recipe.type).label;
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
  return `本周已安排 ${weekMeals.length} 顿，少点了 ${weekMeals.length} 次外卖${top ? `，常用食材是 ${top}` : ""}。`;
}

function mealKey(recipes = state.randomResults) {
  return recipes.map((recipe) => recipe.id).sort().join("|") || "empty";
}

function ingredientCategory(item) {
  const matched = INGREDIENT_CATEGORY_RULES.find((rule) => rule.keywords.some((keyword) => item.includes(keyword)));
  return matched?.category || "蔬菜";
}

function shoppingItems(recipes) {
  const items = new Map();
  recipes.forEach((recipe) => {
    [...(recipe.ingredients || []), ...(recipe.seasonings || [])].forEach((item) => {
      const clean = String(item || "").trim();
      if (!clean) return;
      items.set(clean, { name: clean, category: ingredientCategory(clean) });
    });
  });
  const order = ["肉蛋豆", "蔬菜", "主食", "调料"];
  return [...items.values()].sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category) || a.name.localeCompare(b.name, "zh-CN"));
}

function shoppingComplexityText(recipes) {
  const itemCount = shoppingItems(recipes).filter((item) => item.category !== "调料").length;
  if (itemCount <= 4) return `本盒主食材 ${itemCount} 类，买菜很轻。`;
  if (itemCount <= 6) return `本盒主食材 ${itemCount} 类，适合顺手补齐。`;
  return `本盒主食材 ${itemCount} 类，建议和本周其他饭盒一起买。`;
}

function groupedShoppingItems(recipes) {
  return shoppingItems(recipes).reduce((groups, item) => {
    groups[item.category] = groups[item.category] || [];
    groups[item.category].push(item);
    return groups;
  }, {});
}

function shoppingText(recipes = state.randomResults) {
  const groups = groupedShoppingItems(recipes);
  return ["肉蛋豆", "蔬菜", "主食", "调料"]
    .filter((category) => groups[category]?.length)
    .map((category) => `${category}：${groups[category].map((item) => item.name).join("、")}`)
    .join("\n");
}

function renderShoppingPanel(recipes) {
  const panel = $("#shoppingPanel");
  if (!recipes.length || state.isRolling) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  const key = mealKey(recipes);
  const checked = new Set(state.shoppingChecked[key] || []);
  const groups = groupedShoppingItems(recipes);
  const sections = ["肉蛋豆", "蔬菜", "主食", "调料"]
    .filter((category) => groups[category]?.length)
    .map((category) => `
      <div class="shopping-group">
        <p class="filter-label">${category}</p>
        <div class="shopping-items">
          ${groups[category].map((item) => `
            <label class="${checked.has(item.name) ? "checked" : ""}">
              <input data-shopping-item="${escapeHtml(item.name)}" type="checkbox" ${checked.has(item.name) ? "checked" : ""} />
              <span>${escapeHtml(item.name)}</span>
            </label>
          `).join("")}
        </div>
      </div>
    `).join("");
  panel.hidden = false;
  panel.innerHTML = `
    <div class="section-head compact">
      <div>
        <p class="eyebrow">买菜清单</p>
        <h3>照着买就行</h3>
      </div>
      <button class="ghost-button" data-copy-shopping type="button">复制清单</button>
    </div>
    <p class="shopping-summary">${escapeHtml(shoppingComplexityText(recipes))} ${escapeHtml(ingredientReuseText(recipes))}</p>
    ${sections}
  `;
}

function mealCardHtml(meal, options = {}) {
  const recipes = validRecipeIds(meal.recipeIds).map(getRecipe).filter(Boolean);
  const names = recipes.map((recipe) => recipe.name).join(" + ") || "这份饭盒";
  const date = new Date(meal.date);
  const label = `${date.getMonth() + 1}/${date.getDate()}`;
  const actions = options.reuse ? `<button class="action-button good" data-reuse-meal="${meal.id}" type="button">复用</button>` : "";
  return `
    <article class="meal-card">
      <div>
        <p class="meal-date">${label}</p>
        <h4>${escapeHtml(names)}</h4>
        <p>约 ${meal.calories || "--"} kcal · ${meal.time || "--"} 分钟</p>
      </div>
      ${actions}
    </article>
  `;
}

function renderWeekHistoryPanel() {
  const panel = $("#weekHistoryPanel");
  const meals = state.mealHistory.slice(0, 5);
  if (!meals.length) {
    panel.innerHTML = "";
    return;
  }
  panel.innerHTML = `
    <div class="history-panel-inner">
      <div class="section-head compact">
        <div>
          <p class="eyebrow">本周饭盒</p>
          <h3>最近安排</h3>
        </div>
      </div>
      <div class="meal-history-list">${meals.map((meal) => mealCardHtml(meal, { reuse: true })).join("")}</div>
    </div>
  `;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function showView(view) {
  state.view = view;
  $$(".view").forEach((el) => el.classList.toggle("active", el.id === `view-${view}`));
  $$(".nav-item").forEach((el) => el.classList.toggle("active", el.dataset.view === view));
  render();
}

function preferenceIcon(kind, active) {
  const heartPath = "M12 21s-7.05-4.35-9.35-8.83C.5 7.97 2.97 4 7.23 4 9.29 4 10.73 5.08 12 6.6 13.27 5.08 14.71 4 16.77 4c4.26 0 6.73 3.97 4.58 8.17C19.05 16.65 12 21 12 21Z";
  const fill = active ? "currentColor" : "none";
  if (kind === "block") {
    return `
      <svg class="preference-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path class="heart-shape" d="${heartPath}" fill="${fill}" />
        <path class="heart-crack" d="M13.1 6.75 10.75 10.35 13.35 12.25 10.85 16.75" />
      </svg>
    `;
  }
  return `
    <svg class="preference-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path class="heart-shape" d="${heartPath}" fill="${fill}" />
    </svg>
  `;
}

function lunchboxDishRow(recipe) {
  const meta = typeMeta(recipe.type);
  const tags = (recipe.tags || []).slice(0, 2);
  const isSwapping = state.swappingRecipeId === recipe.id;
  const isSwapped = state.swappedRecipeId === recipe.id;
  if (isSwapping) {
    return `
      <article class="lunchbox-dish-row is-swapping">
        <div class="dish-swap-panel">
          <div class="dish-swap-icon">${recipeIcon(recipe)}</div>
          <div>
            <h3>正在换这道</h3>
            <p>给这一格重新配个口味</p>
          </div>
        </div>
      </article>
    `;
  }
  return `
    <article class="lunchbox-dish-row${isSwapping ? " is-swapping" : ""}${isSwapped ? " is-swapped" : ""}">
      ${isSwapped ? `<span class="swap-done-badge">已换好</span>` : ""}
      <div class="lunchbox-dish-main">
        <div class="food-mark ${recipe.type}">${recipeIcon(recipe)}</div>
        <div class="recipe-main">
          <div class="recipe-topline">
            <h3 class="recipe-name">${escapeHtml(recipe.name)}</h3>
            <span class="recipe-type">${meta.label}</span>
          </div>
          <div class="mini-meta">
            <span>${recipe.time || "--"} 分钟</span>
            <span>约 ${recipe.calories || "--"} kcal</span>
          </div>
          <div class="tag-list">
            ${tags.map((tag) => `<span class="tag">${tagMeta(tag).icon} ${tagMeta(tag).label}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="lunchbox-dish-actions">
        <button class="action-button good" data-swap-random="${recipe.id}" type="button" ${isSwapping ? "disabled" : ""}>${isSwapping ? "换菜中" : "换这道"}</button>
        <button class="action-button" data-detail="${recipe.id}" type="button" ${isSwapping ? "disabled" : ""}>详情</button>
      </div>
    </article>
  `;
}

function recipeCard(recipe, options = {}) {
  const compact = options.compact ? " compact" : "";
  const meta = typeMeta(recipe.type);
  const tags = (recipe.tags || []).slice(0, options.compact ? 2 : 4);
  const customControls = recipe.custom ? `<button class="action-button" data-edit="${recipe.id}" type="button">编辑</button><button class="action-button" data-delete="${recipe.id}" type="button">删除</button>` : "";
  const favoriteActive = isFavorite(recipe.id);
  const blockActive = isBlocked(recipe.id);
  return `
    <article class="recipe-card${compact} ${state.isRolling ? "rolling" : ""}">
      ${options.compact ? "" : `<div class="food-mark ${recipe.type}">${recipeIcon(recipe)}</div>`}
      <div class="recipe-main">
        <div class="recipe-topline">
          <h3 class="recipe-name">${escapeHtml(recipe.name)}</h3>
          <div class="recipe-badges">
            <span class="recipe-type">${meta.label}</span>
            <span class="recipe-tier ${recipe.tier}">${tierMeta(recipe.tier).label}</span>
          </div>
        </div>
        <div class="mini-meta">
          <span>${recipe.time || "--"} 分钟</span>
          <span>约 ${recipe.calories || "--"} kcal</span>
        </div>
        <div class="tag-list">
          ${tags.map((tag) => `<span class="tag">${tagMeta(tag).icon} ${tagMeta(tag).label}</span>`).join("")}
        </div>
      </div>
      <div class="recipe-actions">
        <div class="action-row command-row">
          ${options.showAdd ? `<button class="action-button good" data-add="${recipe.id}" type="button">加入</button>` : ""}
          ${options.showSwap ? `<button class="action-button good" data-swap-random="${recipe.id}" type="button">换这道</button>` : ""}
          ${customControls}
          <button class="action-button" data-detail="${recipe.id}" type="button">详情</button>
        </div>
        <div class="action-row preference-row">
          <button class="action-button preference-button favorite-button ${favoriteActive ? "active" : ""}" data-fav="${recipe.id}" type="button" aria-label="喜欢 ${escapeHtml(recipe.name)}">${preferenceIcon("favorite", favoriteActive)}</button>
          <button class="action-button preference-button block-button ${blockActive ? "active" : ""}" data-block="${recipe.id}" type="button" aria-label="不喜欢 ${escapeHtml(recipe.name)}">${preferenceIcon("block", blockActive)}</button>
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(text) {
  return String(text || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function renderRandom() {
  const { randomMeatCount, randomVegCount } = state.settings;
  const weekCount = thisWeekMeals().length;
  $("#randomSummary").textContent = `${randomMeatCount} 蛋白 ${randomVegCount} 蔬菜 · 本周已安排 ${weekCount} 顿`;
  $$(".mode-chip").forEach((button) => button.classList.toggle("active", button.dataset.mode === state.modePreference));
  $$(".preset-chip").forEach((button) => {
    const active = Number(button.dataset.presetMeat) === randomMeatCount && Number(button.dataset.presetVeg) === randomVegCount;
    button.classList.toggle("active", active);
  });
  const visibleResults = state.isRolling ? state.previewResults : state.randomResults;
  const hasSettledResults = !state.isRolling && Boolean(state.randomResults.length);
  $(".random-hero").hidden = state.isRolling;
  renderLunchboxPanel(visibleResults);
  renderShoppingPanel(visibleResults);
  renderWeekHistoryPanel();
  $("#drawStage").classList.toggle("active", state.isRolling);
  $("#drawReels").innerHTML = state.isRolling
    ? visibleResults.map((recipe) => `
      <div class="draw-reel">
        <span class="draw-icon">${recipeIcon(recipe)}</span>
        <span class="draw-name">${escapeHtml(recipe.name)}</span>
      </div>
    `).join("")
    : "";
  $("#randomResults").classList.toggle("hidden-while-drawing", true);
  $("#randomResults").innerHTML = "";
  $("#randomRecipeHead").hidden = true;
  $("#randomizeBtn").disabled = state.isRolling;
  $("#randomizeBtn span").textContent = state.isRolling ? "配饭中" : hasSettledResults ? "重新生成明日饭盒" : "生成明日饭盒";
  $("#randomHint").textContent = visibleResults.length ? "" : "先抽一盒，今晚少纠结五分钟。";
}

function renderLunchboxPanel(recipes) {
  const panel = $("#lunchboxPanel");
  if (!recipes.length || state.isRolling) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  const stats = lunchboxStats(recipes);
  const metrics = [
    `${recipes.length} 道菜`,
    `约 ${stats.calories || "--"} kcal`,
    `${stats.time || "--"} 分钟`,
    `${stats.overnightCount}/${recipes.length} 隔夜友好`,
  ];
  panel.hidden = false;
  panel.innerHTML = `
    <div class="lunchbox-title-row">
      <div>
        <p class="eyebrow">明天带这盒</p>
        <h3>${escapeHtml(lunchboxMoodText(recipes))}</h3>
      </div>
      <span class="score-badge">${stats.score || "--"}/5 带饭适配</span>
    </div>
    <div class="metric-line">${metrics.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
    <div class="health-line">${escapeHtml(lunchboxHealthText(recipes))}</div>
    <div class="lunchbox-recipes">
      <div class="recipe-section-head embedded">
        <p class="eyebrow">饭盒里的菜</p>
        <h3>${recipes.length > 1 ? `具体就吃这 ${recipes.length} 道` : "具体就吃这道"}</h3>
      </div>
      <div class="recipe-grid lunchbox-recipe-grid">
        ${recipes.map(lunchboxDishRow).join("")}
      </div>
    </div>
    <div class="lunchbox-actions">
      <button class="primary-button" data-confirm-meal type="button">确认带这盒</button>
      <button class="ghost-button" data-reroll-meal type="button">换一盒</button>
    </div>
  `;
}

function weightedPick(candidates, count, chosen = [], options = {}) {
  const picked = [];
  let pool = [...candidates].filter((recipe) => !chosen.includes(recipe.id));
  if (options.avoidRecent) {
    const freshPool = pool.filter((recipe) => !state.recent.includes(recipe.id));
    if (freshPool.length >= count) pool = freshPool;
  }
  while (picked.length < count && pool.length) {
    const weighted = pool.flatMap((recipe) => {
      let weight = recipeWeight(recipe, options.contextRecipes || []);
      if (state.settings.preferFavorites && isFavorite(recipe.id)) weight += 7;
      if (chosen.includes(recipe.id)) weight = 0;
      return Array(Math.max(1, weight)).fill(recipe);
    });
    const choice = weighted[Math.floor(Math.random() * weighted.length)];
    picked.push(choice);
    pool = pool.filter((recipe) => recipe.id !== choice.id);
  }
  return picked;
}

function recipeWeight(recipe, contextRecipes = []) {
  let weight = 6;
  const tags = recipe.tags || [];
  const recentMeals = recentMealIds(7);
  if (isFavorite(recipe.id)) weight += 3;
  if (state.recent.includes(recipe.id)) weight -= 2;
  if (recentMeals.has(recipe.id)) weight -= 4;
  if (tags.includes("quick")) weight += 3;
  if (tags.includes("lowCal")) weight += 4;
  if (tags.includes("lowOil")) weight += 4;
  if (tags.includes("protein")) weight += 3;
  if (tags.includes("overnight")) weight += 3;
  if (tags.includes("microwave")) weight += 2;
  if (tags.includes("beginner")) weight += 1;
  if (recipe.tier === "core") weight += 5;
  if (recipe.tier === "flexible") weight -= 1;
  if (recipe.tier === "lunchbox") weight -= contextRecipes.length ? 2 : 1;
  if ((Number(recipe.time) || 99) <= 15) weight += 2;
  if (Number(recipe.calories) > 430) weight -= 2;
  if (sharedMainIngredientCount(recipe, contextRecipes)) weight += 4;
  if (contextRecipes.length && uniqueIngredientCount([...contextRecipes, recipe]) <= uniqueIngredientCount(contextRecipes) + 2) weight += 2;
  if (recipe.wateryRisk === "高") weight -= 3;
  if (recipe.wateryRisk === "低") weight += 1;
  if (state.modePreference === "quick") {
    if ((Number(recipe.time) || 99) <= 15) weight += 5;
    if (tags.includes("quick")) weight += 3;
  }
  if (state.modePreference === "lean") {
    if (tags.includes("lowCal")) weight += 5;
    if (tags.includes("protein")) weight += 4;
    if (tags.includes("lowOil")) weight += 3;
    if (Number(recipe.calories) > 420) weight -= 4;
  }
  return Math.max(1, Math.round(weight));
}

function buildRandomResults(options = {}) {
  const meatCount = Number(state.settings.randomMeatCount);
  const vegCount = Number(state.settings.randomVegCount);
  if (meatCount + vegCount <= 0) {
    return [];
  }
  const recipes = allRecipes();
  const preferredRecipes = recipes.filter((recipe) => !isBlocked(recipe.id));
  let proteinPool = preferredRecipes.filter((recipe) => isProteinType(recipe.type));
  let vegPool = preferredRecipes.filter((recipe) => isVegType(recipe.type));
  if (proteinPool.length < meatCount) proteinPool = recipes.filter((recipe) => isProteinType(recipe.type));
  if (vegPool.length < vegCount) vegPool = recipes.filter((recipe) => isVegType(recipe.type));
  const pickedMeat = weightedPick(proteinPool, meatCount, [], { avoidRecent: Boolean(options.avoidRecent) });
  const pickedVeg = weightedPick(vegPool, vegCount, pickedMeat.map((recipe) => recipe.id), {
    avoidRecent: Boolean(options.avoidRecent),
    contextRecipes: pickedMeat,
  });
  return [...pickedMeat, ...pickedVeg];
}

function replaceRandomRecipe(id) {
  const oldRecipe = getRecipe(id);
  if (!oldRecipe || state.isRolling || state.swappingRecipeId) return;
  const usedIds = state.randomResults.map((recipe) => recipe.id).filter((recipeId) => recipeId !== id);
  const allCandidates = allRecipes()
    .filter((recipe) => recipe.id !== id)
    .filter((recipe) => isVegType(oldRecipe.type) ? isVegType(recipe.type) : isProteinType(recipe.type))
    .filter((recipe) => !usedIds.includes(recipe.id));
  let pool = allCandidates
    .filter((recipe) => !isBlocked(recipe.id))
  if (!pool.length) pool = allCandidates;
  const contextRecipes = state.randomResults.filter((recipe) => recipe.id !== id);
  const replacement = weightedPick(pool, 1, usedIds, { avoidRecent: true, contextRecipes })[0];
  if (!replacement) {
    showToast("暂时没有同类可替换菜");
    return;
  }
  state.swappingRecipeId = id;
  state.swappedRecipeId = "";
  renderRandom();
  setTimeout(() => {
    state.randomResults = state.randomResults.map((recipe) => recipe.id === id ? replacement : recipe);
    state.swappingRecipeId = "";
    state.swappedRecipeId = replacement.id;
    rememberRecent([replacement.id]);
    save("randomResultIds", state.randomResults.map((recipe) => recipe.id));
    renderRandom();
    setTimeout(() => {
      if (state.swappedRecipeId === replacement.id) {
        state.swappedRecipeId = "";
        renderRandom();
      }
    }, 1000);
  }, 360);
}

function finishRandomize(finalResults, expectedCount) {
  state.isRolling = false;
  state.previewResults = [];
  state.randomResults = finalResults;
  if (state.randomResults.length < expectedCount) {
    showToast("可选菜不够了，可以减少数量或添加自定义菜谱");
  }
  rememberRecent(state.randomResults.map((recipe) => recipe.id));
  save("randomResultIds", state.randomResults.map((recipe) => recipe.id));
  render();
  if (state.view === "random" && state.randomResults.length) {
    $("#lunchboxPanel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function randomResultsMatchSettings() {
  const meatCount = Number(state.settings.randomMeatCount);
  const vegCount = Number(state.settings.randomVegCount);
  const proteinCount = state.randomResults.filter((recipe) => isProteinType(recipe.type)).length;
  const vegetableCount = state.randomResults.filter((recipe) => isVegType(recipe.type)).length;
  return proteinCount === meatCount && vegetableCount === vegCount;
}

function randomize() {
  const meatCount = Number(state.settings.randomMeatCount);
  const vegCount = Number(state.settings.randomVegCount);
  const expectedCount = meatCount + vegCount;
  if (expectedCount <= 0) {
    showToast("随机数量至少要有一道菜");
    return;
  }
  if (state.isRolling) return;
  state.swappingRecipeId = "";
  state.swappedRecipeId = "";
  const finalResults = buildRandomResults({ avoidRecent: true });
  state.isRolling = true;
  state.previewResults = buildRandomResults({ avoidRecent: false });
  renderRandom();
  let ticks = 0;
  const tickDelays = [70, 80, 95, 115, 145, 180, 230];
  const tick = () => {
    ticks += 1;
    if (ticks >= 7) {
      state.previewResults = finalResults;
      renderRandom();
      setTimeout(() => finishRandomize(finalResults, expectedCount), 300);
      return;
    }
    state.previewResults = buildRandomResults({ avoidRecent: false });
    renderRandom();
    setTimeout(tick, tickDelays[Math.min(ticks, tickDelays.length - 1)]);
  };
  setTimeout(tick, tickDelays[0]);
}

function expectedRandomCount() {
  return Number(state.settings.randomMeatCount) + Number(state.settings.randomVegCount);
}

function ensureRandomResults() {
  if (state.isRolling || expectedRandomCount() <= 0 || randomResultsMatchSettings()) return;
  randomize();
}

function rememberRecent(ids) {
  const next = [...ids, ...state.recent].filter(Boolean);
  state.recent = [...new Set(next)].slice(0, 24);
  save("recent", state.recent);
}

function renderDiy() {
  const selectedRecipes = state.diySelected.map(getRecipe).filter(Boolean);
  const hasProtein = selectedRecipes.some((recipe) => isProteinType(recipe.type));
  const hasVeg = selectedRecipes.some((recipe) => isVegType(recipe.type));
  if (!selectedRecipes.length) {
    $("#selectedRecipes").innerHTML = `<p class="empty-hint">还没选菜，从下面推荐或菜谱列表里加一道。</p>`;
  } else {
    $("#selectedRecipes").innerHTML = selectedRecipes.map((recipe) => `
      <span class="selected-pill">${typeMeta(recipe.type).icon} ${escapeHtml(recipe.name)} <button data-remove-selected="${recipe.id}" type="button">×</button></span>
    `).join("");
  }

  $("#comboSummary").textContent = selectedRecipes.length ? comboSummaryText(selectedRecipes) : "自由搭配，不限制一荤一素。";

  const recommendations = stableDiyRecommendations(selectedRecipes);
  $("#recommendTitle").textContent = selectedRecipes.length
    ? hasProtein && hasVeg ? "想更丰富可以再添一道" : hasProtein ? "来个蔬菜更均衡" : "加个蛋白质更顶饱"
    : "先选一道喜欢的菜";
  $("#recommendations").innerHTML = recommendations.map((recipe) => recipeCard(recipe, { compact: true, showAdd: true })).join("");
  renderDiyCatalog();
}

function stableDiyRecommendations(selectedRecipes) {
  const selectedIds = selectedRecipes.map((recipe) => recipe.id);
  const key = selectedIds.join("|") || "empty";
  if (state.diyRecommendationKey !== key) {
    const recommendations = getRecommendations(selectedRecipes);
    state.diyRecommendationKey = key;
    state.diyRecommendationIds = recommendations.map((recipe) => recipe.id);
    return recommendations;
  }
  const selectedSet = new Set(selectedIds);
  const pinned = state.diyRecommendationIds
    .map(getRecipe)
    .filter((recipe) => recipe && !selectedSet.has(recipe.id));
  if (pinned.length >= 6) return pinned.slice(0, 6);
  const pinnedIds = pinned.map((recipe) => recipe.id);
  const refill = getRecommendations(selectedRecipes)
    .filter((recipe) => !pinnedIds.includes(recipe.id));
  const recommendations = [...pinned, ...refill].slice(0, 6);
  state.diyRecommendationIds = recommendations.map((recipe) => recipe.id);
  return recommendations;
}

function comboSummaryText(recipes) {
  const calories = recipes.reduce((sum, recipe) => sum + (Number(recipe.calories) || 0), 0);
  const hasProtein = recipes.some((recipe) => isProteinType(recipe.type));
  const hasVeg = recipes.some((recipe) => isVegType(recipe.type));
  const microwaveCount = recipes.filter((recipe) => recipe.tags?.includes("microwave")).length;
  const overnightCount = recipes.filter((recipe) => recipe.tags?.includes("overnight")).length;
  const balance = hasProtein && hasVeg ? "蛋白质和蔬菜都照顾到了" : hasProtein ? "再来一道蔬菜会更均衡" : "加一道蛋白质菜会更顶饱";
  const prep = microwaveCount === recipes.length || overnightCount === recipes.length ? "整体适合带饭复热" : "带饭前留意复热口感";
  return `${recipes.length} 道菜，约 ${calories} kcal。${balance}，${prep}。`;
}

function getRecommendations(selectedRecipes) {
  const selectedIds = selectedRecipes.map((recipe) => recipe.id);
  const hasProtein = selectedRecipes.some((recipe) => isProteinType(recipe.type));
  const hasVeg = selectedRecipes.some((recipe) => isVegType(recipe.type));
  let target = allRecipes().filter((recipe) => !selectedIds.includes(recipe.id) && !isBlocked(recipe.id));
  if (hasProtein && !hasVeg) target = target.filter((recipe) => isVegType(recipe.type));
  if (!hasProtein && hasVeg) target = target.filter((recipe) => isProteinType(recipe.type));
  if (!hasProtein && !hasVeg) target = target.filter((recipe) => recipe.tags?.includes("beginner") || recipe.tags?.includes("quick"));
  return weightedPick(target, 6, selectedIds, { avoidRecent: true, contextRecipes: selectedRecipes });
}

function filterGroupsHtml(target, filters) {
  const typeItems = [
    { id: "all", label: "全部" },
    { id: "meat", label: "蛋白" },
    { id: "veg", label: "蔬菜" },
    { id: "egg", label: "蛋类" },
    { id: "tofu", label: "豆制品" },
    { id: "staple", label: "主食" },
  ];
  const availableIngredients = filters.type === "all"
    ? INGREDIENT_GROUPS
    : INGREDIENT_GROUPS.filter((group) => group.types.includes(filters.type));
  const ingredientItems = [{ id: "all", label: "全部食材" }, ...availableIngredients];
  const tagItems = [{ id: "all", label: "全部场景" }, ...TAGS];
  const tierItems = [{ id: "all", label: "全部层级" }, ...Object.entries(TIER_META).map(([id, meta]) => ({ id, label: meta.label }))];
  return `
    <div class="filter-group">
      <p class="filter-label">菜品分类</p>
      <div class="filters">
        ${typeItems.map((item) => `<button class="chip ${filters.type === item.id ? "active" : ""}" data-filter-target="${target}" data-filter-kind="type" data-filter-value="${item.id}" type="button">${item.label}</button>`).join("")}
      </div>
    </div>
    <div class="filter-group">
      <p class="filter-label">食材分类</p>
      <div class="filters">
        ${ingredientItems.map((item) => `<button class="chip ${filters.ingredient === item.id ? "active" : ""}" data-filter-target="${target}" data-filter-kind="ingredient" data-filter-value="${item.id}" type="button">${item.label}</button>`).join("")}
      </div>
    </div>
    <div class="filter-group">
      <p class="filter-label">推荐层级</p>
      <div class="filters">
        ${tierItems.map((item) => `<button class="chip ${filters.tier === item.id ? "active" : ""}" data-filter-target="${target}" data-filter-kind="tier" data-filter-value="${item.id}" type="button">${item.label}</button>`).join("")}
      </div>
    </div>
    <div class="filter-group">
      <p class="filter-label">场景标签</p>
      <div class="filters">
        ${tagItems.map((item) => `<button class="chip ${filters.tag === item.id ? "active" : ""}" data-filter-target="${target}" data-filter-kind="tag" data-filter-value="${item.id}" type="button">${item.icon ? `${item.icon} ` : ""}${item.label}</button>`).join("")}
      </div>
    </div>
  `;
}

function recipeMatchesFilters(recipe, filters) {
  const typeMatches = filters.type === "all" || recipe.type === filters.type;
  const ingredientMatches = filters.ingredient === "all" || ingredientGroupIds(recipe).includes(filters.ingredient);
  const tagMatches = filters.tag === "all" || recipe.tags?.includes(filters.tag);
  const tierMatches = !filters.tier || filters.tier === "all" || recipe.tier === filters.tier;
  return typeMatches && ingredientMatches && tagMatches && tierMatches;
}

function recipeMatchesSearch(recipe, keyword) {
  if (!keyword) return true;
  const text = [recipe.name, recipe.mainIngredient, tierMeta(recipe.tier).label, ...(recipe.ingredients || []), ...(recipe.tags || [])].join(" ");
  return text.includes(keyword);
}

function normalizeFilterState(filters) {
  if (filters.ingredient === "all" || filters.type === "all") return;
  const group = INGREDIENT_GROUPS.find((item) => item.id === filters.ingredient);
  if (!group || !group.types.includes(filters.type)) {
    filters.ingredient = "all";
  }
}

function renderFilters() {
  $("#filters").innerHTML = filterGroupsHtml("recipes", state.recipeFilters);
}

function renderRecipeList() {
  const recipes = allRecipes()
    .filter((recipe) => recipeMatchesFilters(recipe, state.recipeFilters))
    .filter((recipe) => recipeMatchesSearch(recipe, state.recipeSearch));
  $("#recipeList").innerHTML = recipes.length
    ? recipes.map((recipe) => recipeCard(recipe, { showAdd: true })).join("")
    : `<p class="empty-hint">没找到匹配的菜，换个关键词或分类试试。</p>`;
}

function renderDiyCatalog() {
  $("#diyFilters").innerHTML = filterGroupsHtml("diy", state.diyFilters);
  const selectedIds = new Set(state.diySelected);
  const recipes = allRecipes()
    .filter((recipe) => recipeMatchesFilters(recipe, state.diyFilters))
    .filter((recipe) => !selectedIds.has(recipe.id));
  $("#diyRecipeList").innerHTML = recipes.length
    ? recipes.map((recipe) => recipeCard(recipe, { showAdd: true })).join("")
    : `<p class="empty-hint">当前筛选下没有可加入的菜，可以换个食材分类。</p>`;
}

function renderFavorites() {
  const recipes = state.favorites.map(getRecipe).filter(Boolean);
  $("#favoriteList").innerHTML = recipes.map((recipe) => recipeCard(recipe, { showAdd: true })).join("");
  $("#favoriteHint").textContent = recipes.length ? "" : "还没有收藏。看到顺眼的菜，点一下“喜欢”。";
}

function renderMy() {
  renderFavorites();
  const blockedRecipes = state.blocked.map(getRecipe).filter(Boolean);
  $("#blockedList").innerHTML = blockedRecipes.map((recipe) => recipeCard(recipe, { showAdd: true })).join("");
  $("#blockedHint").textContent = blockedRecipes.length ? "" : "还没有不喜欢的菜。";

  $("#customList").innerHTML = state.customRecipes.length
    ? state.customRecipes.map((recipe) => recipeCard(recipe, { showAdd: true })).join("")
    : "";
  $("#customHint").textContent = state.customRecipes.length ? "" : "还没有自己添加的菜谱。";
  renderMealHistory();
  renderMySections();
}

function renderSettings() {
  $("#preferFavorites").checked = Boolean(state.settings.preferFavorites);
  $("#randomMeatCount").value = state.settings.randomMeatCount;
  $("#randomVegCount").value = state.settings.randomVegCount;
}

function renderMealHistory() {
  const list = $("#mealHistoryList");
  const hint = $("#mealHistoryHint");
  if (!list || !hint) return;
  const meals = state.mealHistory.slice(0, 5);
  list.innerHTML = meals.map((meal) => mealCardHtml(meal, { reuse: true })).join("");
  hint.textContent = meals.length ? `本周已安排 ${thisWeekMeals().length} 顿，最近吃过会自动降低推荐权重。` : "还没有确认带饭记录。";
}

function renderMySections() {
  $("#favoriteCount").textContent = state.favorites.length;
  $("#blockedCount").textContent = state.blocked.length;
  $("#customCount").textContent = state.customRecipes.length;
  $("#mealHistoryCount").textContent = state.mealHistory.length;
  $$(".collapsible-section").forEach((section) => {
    const key = section.dataset.sectionKey;
    const expanded = state.mySections[key] !== false;
    section.classList.toggle("collapsed", !expanded);
    section.querySelectorAll(":scope > :not(.section-toggle):not(.section-toggle-row)").forEach((child) => {
      child.hidden = !expanded;
    });
  });
}

function toggleMySection(key) {
  state.mySections = {
    ...DEFAULT_MY_SECTIONS,
    ...state.mySections,
    [key]: state.mySections[key] === false,
  };
  save("mySections", state.mySections);
  renderMySections();
}

function renderSearch() {
  const input = $("#recipeSearch");
  if (input && input.value !== state.recipeSearch) input.value = state.recipeSearch;
}

function renderTagPicker(selected = []) {
  $("#customTagPicker").innerHTML = TAGS.map((tag) => `
    <label><input type="checkbox" value="${tag.id}" ${selected.includes(tag.id) ? "checked" : ""} />${tag.icon} ${tag.label}</label>
  `).join("");
}

function renderIconPicker(selected = "dish") {
  $("#customIconPicker").innerHTML = ICON_LIBRARY.map((icon) => `
    <label class="icon-choice">
      <input type="radio" name="customIcon" value="${icon.id}" ${selected === icon.id ? "checked" : ""} />
      <span class="icon-swatch">${icon.symbol}</span>
      <span>${icon.label}</span>
    </label>
  `).join("");
}

function render() {
  normalizePreferences();
  renderRandom();
  renderDiy();
  renderFilters();
  renderRecipeList();
  renderMy();
  renderSettings();
  renderSearch();
}

function toggleFavorite(id) {
  state.blocked = state.blocked.filter((recipeId) => recipeId !== id);
  if (isFavorite(id)) {
    state.favorites = state.favorites.filter((recipeId) => recipeId !== id);
  } else {
    state.favorites = [...state.favorites.filter((recipeId) => recipeId !== id), id];
  }
  save("favorites", state.favorites);
  save("blocked", state.blocked);
  render();
}

function toggleBlocked(id) {
  state.favorites = state.favorites.filter((recipeId) => recipeId !== id);
  if (isBlocked(id)) {
    state.blocked = state.blocked.filter((recipeId) => recipeId !== id);
  } else {
    state.blocked = [...state.blocked.filter((recipeId) => recipeId !== id), id];
  }
  save("blocked", state.blocked);
  save("favorites", state.favorites);
  render();
}

function confirmCurrentMeal() {
  const recipes = state.randomResults;
  if (!recipes.length) {
    showToast("先生成一份饭盒");
    return;
  }
  const stats = lunchboxStats(recipes);
  const meal = {
    id: `meal-${Date.now()}`,
    date: new Date().toISOString(),
    recipeIds: recipes.map((recipe) => recipe.id),
    calories: stats.calories,
    time: stats.time,
    favorites: recipes.filter((recipe) => isFavorite(recipe.id)).map((recipe) => recipe.id),
    blocked: recipes.filter((recipe) => isBlocked(recipe.id)).map((recipe) => recipe.id),
  };
  state.mealHistory = [meal, ...state.mealHistory].slice(0, 30);
  rememberRecent(meal.recipeIds);
  save("mealHistory", state.mealHistory);
  showToast(`明天饭盒已定：${recipes.map((recipe) => recipe.name).join(" + ")}`);
  render();
}

function reuseMeal(id) {
  const meal = state.mealHistory.find((item) => item.id === id);
  if (!meal) return;
  const recipes = validRecipeIds(meal.recipeIds).map(getRecipe).filter(Boolean);
  if (!recipes.length) {
    showToast("这份历史饭盒里的菜找不到了");
    return;
  }
  state.randomResults = recipes;
  save("randomResultIds", recipes.map((recipe) => recipe.id));
  showView("random");
}

async function copyShoppingList() {
  const text = shoppingText();
  if (!text) {
    showToast("先生成一份饭盒");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showToast("购物清单已复制");
  } catch {
    showToast("复制失败，可以手动查看清单");
  }
}

function toggleShoppingItem(name, checked) {
  const key = mealKey();
  const current = new Set(state.shoppingChecked[key] || []);
  if (checked) current.add(name);
  else current.delete(name);
  state.shoppingChecked = { ...state.shoppingChecked, [key]: [...current] };
  save("shoppingChecked", state.shoppingChecked);
  renderShoppingPanel(state.randomResults);
}

function addToDiy(id) {
  if (!state.diySelected.includes(id)) {
    state.diySelected.push(id);
    save("diySelected", state.diySelected);
    showToast("已加入自选组合");
  }
  showView("diy");
}

function openDetail(id) {
  const recipe = getRecipe(id);
  if (!recipe) return;
  $("#dialogMeta").textContent = `${typeMeta(recipe.type).label} · ${recipe.time || "--"} 分钟 · 约 ${recipe.calories || "--"} kcal`;
  $("#dialogTitle").textContent = recipe.name;
  $("#dialogBody").innerHTML = `
    <div class="detail-section">
      <h3>场景标签</h3>
      <div class="tag-list">${(recipe.tags || []).map((tag) => `<span class="tag">${tagMeta(tag).icon} ${tagMeta(tag).label}</span>`).join("") || "<p>暂无标签</p>"}</div>
      <p class="detail-note">隔夜表现：${escapeHtml(recipe.overnightNote)} · 出水风险：${escapeHtml(recipe.wateryRisk)}</p>
    </div>
    <div class="detail-section"><h3>食材</h3><p>${(recipe.ingredients || []).map(escapeHtml).join("、")}</p></div>
    <div class="detail-section"><h3>调料</h3><p>${(recipe.seasonings || []).map(escapeHtml).join("、") || "按口味调整"}</p></div>
    <div class="detail-section"><h3>操作步骤</h3>${recipe.steps?.length ? `<ol>${recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>` : "<p>暂无步骤，可以按自己的习惯做。</p>"}</div>
    <div class="detail-section"><h3>买菜提示</h3><p>${escapeHtml(recipe.shoppingTips || "暂无买菜提示。")}</p></div>
    <div class="detail-section"><h3>替代食材</h3><p>${(recipe.substitutions || []).map(escapeHtml).join("；") || "暂无替代建议。"}</p></div>
  `;
  $("#recipeDialog").showModal();
}

function openCustom(recipeId) {
  const recipe = recipeId ? getRecipe(recipeId) : null;
  $("#customDialogTitle").textContent = recipe ? "编辑自定义菜" : "添加自己的菜";
  $("#editingRecipeId").value = recipe?.id || "";
  $("#customName").value = recipe?.name || "";
  $("#customType").value = recipe?.type || "meat";
  $("#customIngredients").value = (recipe?.ingredients || []).join(", ");
  $("#customSteps").value = (recipe?.steps || []).join("\n");
  $("#customSeasonings").value = (recipe?.seasonings || []).join(", ");
  $("#customCalories").value = recipe?.calories || "";
  $("#customTime").value = recipe?.time || "";
  $("#customTips").value = recipe?.shoppingTips || "";
  $("#customExtraTags").value = (recipe?.tags || []).filter((tag) => !TAGS.some((preset) => preset.id === tag)).join(", ");
  $("#customDialog").dataset.iconTouched = recipe?.icon ? "true" : "false";
  renderIconPicker(recipe?.icon || fallbackIconId(recipe || { type: "meat", ingredients: [] }));
  renderTagPicker(recipe?.tags || []);
  $("#customDialog").showModal();
}

function customDraftRecipe() {
  return {
    type: $("#customType").value || "meat",
    name: $("#customName").value.trim(),
    mainIngredient: parseList($("#customIngredients").value)[0] || "",
    ingredients: parseList($("#customIngredients").value),
  };
}

function updateCustomIconSuggestion() {
  const dialog = $("#customDialog");
  if (dialog.dataset.iconTouched === "true") return;
  renderIconPicker(fallbackIconId(customDraftRecipe()));
}

function parseList(value) {
  return value.split(/[,，\n]/).map((item) => item.trim()).filter(Boolean);
}

function saveCustomRecipe(event) {
  event.preventDefault();
  const id = $("#editingRecipeId").value || `custom-${Date.now()}`;
  const selectedTags = $$("#customTagPicker input:checked").map((input) => input.value);
  const extraTags = parseList($("#customExtraTags").value);
  const selectedIcon = $("#customIconPicker input:checked")?.value || "";
  const iconTouched = $("#customDialog").dataset.iconTouched === "true";
  const draft = customDraftRecipe();
  const recipe = {
    id,
    custom: true,
    name: $("#customName").value.trim(),
    type: $("#customType").value,
    icon: iconTouched && selectedIcon ? selectedIcon : fallbackIconId(draft),
    mainIngredient: parseList($("#customIngredients").value)[0] || "",
    ingredients: parseList($("#customIngredients").value),
    seasonings: parseList($("#customSeasonings").value),
    steps: $("#customSteps").value.split("\n").map((step) => step.trim()).filter(Boolean),
    calories: Number($("#customCalories").value) || "",
    time: Number($("#customTime").value) || "",
    tags: [...new Set([...selectedTags, ...extraTags])],
    shoppingTips: $("#customTips").value.trim(),
    lunchboxScore: 3,
    verifiedLevel: "自定义内容",
    substitutions: [],
  };
  if (!recipe.name || !recipe.type || !recipe.ingredients.length) {
    showToast("菜名、分类、食材是必填项");
    return;
  }
  state.customRecipes = state.customRecipes.filter((item) => item.id !== id);
  state.customRecipes.push(recipe);
  save("customRecipes", state.customRecipes);
  $("#customDialog").close();
  showToast("菜谱已保存");
  render();
}

function deleteCustomRecipe(id) {
  state.customRecipes = state.customRecipes.filter((recipe) => recipe.id !== id);
  state.favorites = state.favorites.filter((recipeId) => recipeId !== id);
  state.blocked = state.blocked.filter((recipeId) => recipeId !== id);
  state.diySelected = state.diySelected.filter((recipeId) => recipeId !== id);
  state.diyRecommendationIds = state.diyRecommendationIds.filter((recipeId) => recipeId !== id);
  save("customRecipes", state.customRecipes);
  save("favorites", state.favorites);
  save("blocked", state.blocked);
  save("diySelected", state.diySelected);
  showToast("已删除自定义菜谱");
  render();
}

function updateSettings() {
  const meat = Math.max(0, Number($("#randomMeatCount").value) || 0);
  const veg = Math.max(0, Number($("#randomVegCount").value) || 0);
  if (meat + veg <= 0) {
    $("#settingsNote").textContent = "总菜数不能为 0，请至少保留 1 道。";
    $("#settingsNote").style.color = "#d85c45";
    $("#randomMeatCount").value = state.settings.randomMeatCount;
    $("#randomVegCount").value = state.settings.randomVegCount;
    return;
  }
  $("#settingsNote").textContent = "默认 1 蛋白 1 蔬菜；总菜数不能为 0。";
  $("#settingsNote").style.color = "";
  state.settings = {
    preferFavorites: $("#preferFavorites").checked,
    randomMeatCount: meat,
    randomVegCount: veg,
  };
  save("settings", state.settings);
  renderRandom();
}

function setMode(mode) {
  if (!MODE_META[mode]) return;
  state.modePreference = mode;
  save("modePreference", state.modePreference);
  randomize();
}

function setRandomPreset(meat, veg) {
  state.settings = {
    ...state.settings,
    randomMeatCount: meat,
    randomVegCount: veg,
  };
  save("settings", state.settings);
  randomize();
}

function exportAllData() {
  const data = JSON.stringify(sharedSnapshot(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "chibale-local-data.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function importAllData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    applySharedSnapshot(payload);
    showToast("全部本地数据已导入");
  } catch {
    showToast("导入失败，请检查 JSON 文件");
  } finally {
    event.target.value = "";
  }
}

function clearMealHistory() {
  state.mealHistory = [];
  state.shoppingChecked = {};
  save("mealHistory", state.mealHistory);
  save("shoppingChecked", state.shoppingChecked);
  showToast("带饭记录已清空");
  render();
}

function exportCustomRecipes() {
  const data = JSON.stringify(state.customRecipes, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "chibale-custom-recipes.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function importCustomRecipes(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const imported = JSON.parse(text);
    if (!Array.isArray(imported)) throw new Error("bad shape");
    const valid = imported.filter((recipe) => recipe.name && recipe.type && Array.isArray(recipe.ingredients) && recipe.ingredients.length)
      .map((recipe) => ({ ...recipe, id: recipe.id || `custom-${Date.now()}-${Math.random()}`, icon: recipe.icon || fallbackIconId(recipe), custom: true }));
    state.customRecipes = [...state.customRecipes, ...valid];
    save("customRecipes", state.customRecipes);
    showToast(`已导入 ${valid.length} 道菜`);
    render();
  } catch {
    showToast("导入失败，请检查 JSON 文件");
  } finally {
    event.target.value = "";
  }
}

function encodeSharePayload(payload) {
  const json = JSON.stringify(payload);
  const encoded = btoa(unescape(encodeURIComponent(json)));
  return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeSharePayload(encoded) {
  const normalized = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
  const json = decodeURIComponent(escape(atob(padded)));
  return JSON.parse(json);
}

function sharedSnapshot() {
  return {
    version: 2,
    createdAt: new Date().toISOString(),
    settings: state.settings,
    modePreference: state.modePreference,
    mealHistory: state.mealHistory,
    mySections: state.mySections,
    shoppingChecked: state.shoppingChecked,
    favorites: state.favorites,
    blocked: state.blocked,
    recent: state.recent,
    diySelected: state.diySelected,
    randomResultIds: state.randomResults.map((recipe) => recipe.id),
    customRecipes: state.customRecipes,
  };
}

async function createShareLink() {
  const payload = encodeSharePayload(sharedSnapshot());
  const url = `${location.origin}${location.pathname}#share=${payload}`;
  $("#shareUrl").value = url;
  $("#shareBox").hidden = false;
  try {
    await navigator.clipboard.writeText(url);
    showToast("共享链接已复制");
  } catch {
    $("#shareUrl").focus();
    $("#shareUrl").select();
    showToast("链接已生成，可以手动复制");
  }
}

function validCustomRecipes(recipes) {
  if (!Array.isArray(recipes)) return [];
  return recipes
    .filter((recipe) => recipe.name && recipe.type && Array.isArray(recipe.ingredients) && recipe.ingredients.length)
    .map((recipe, index) => ({
      ...recipe,
      id: recipe.id || `shared-custom-${Date.now()}-${index}`,
      icon: recipe.icon || fallbackIconId(recipe),
      custom: true,
    }));
}

function validRecipeIds(ids) {
  if (!Array.isArray(ids)) return [];
  const allIds = new Set(allRecipes().map((recipe) => recipe.id));
  return [...new Set(ids)].filter((id) => allIds.has(id));
}

function applySharedSnapshot(payload) {
  if (!payload || ![1, 2].includes(payload.version)) throw new Error("unsupported share payload");
  const sharedSettings = { ...DEFAULT_SETTINGS, ...(payload.settings || {}) };
  const meat = Math.max(0, Number(sharedSettings.randomMeatCount) || 0);
  const veg = Math.max(0, Number(sharedSettings.randomVegCount) || 0);
  state.settings = {
    preferFavorites: Boolean(sharedSettings.preferFavorites),
    randomMeatCount: meat + veg > 0 ? meat : 1,
    randomVegCount: meat + veg > 0 ? veg : 1,
  };
  state.modePreference = MODE_META[payload.modePreference] ? payload.modePreference : "default";
  state.customRecipes = validCustomRecipes(payload.customRecipes);
  state.favorites = validRecipeIds(payload.favorites);
  state.blocked = validRecipeIds(payload.blocked);
  state.recent = validRecipeIds(payload.recent);
  state.diySelected = validRecipeIds(payload.diySelected);
  state.randomResults = validRecipeIds(payload.randomResultIds).map(getRecipe).filter(Boolean);
  state.mealHistory = Array.isArray(payload.mealHistory)
    ? payload.mealHistory
        .map((meal) => ({ ...meal, recipeIds: validRecipeIds(meal.recipeIds) }))
        .filter((meal) => meal.id && meal.recipeIds.length)
        .slice(0, 30)
    : [];
  state.mySections = { ...DEFAULT_MY_SECTIONS, ...(payload.mySections || {}) };
  state.shoppingChecked = payload.shoppingChecked && typeof payload.shoppingChecked === "object" ? payload.shoppingChecked : {};
  persistState();
  render();
  showToast("共享设置已导入");
}

function summarizeSharedSnapshot(payload) {
  const randomCount = Array.isArray(payload?.randomResultIds) ? payload.randomResultIds.length : 0;
  const diyCount = Array.isArray(payload?.diySelected) ? payload.diySelected.length : 0;
  const favoriteCount = Array.isArray(payload?.favorites) ? payload.favorites.length : 0;
  const blockedCount = Array.isArray(payload?.blocked) ? payload.blocked.length : 0;
  const customCount = Array.isArray(payload?.customRecipes) ? payload.customRecipes.length : 0;
  const historyCount = Array.isArray(payload?.mealHistory) ? payload.mealHistory.length : 0;
  return `这份共享包含 ${randomCount} 道随机结果、${diyCount} 道自选已选菜、${favoriteCount} 个收藏、${blockedCount} 个不喜欢、${customCount} 道自定义菜谱、${historyCount} 条带饭记录，以及本地偏好设置。导入会覆盖当前设备上的这些本地数据。`;
}

function detectSharedSnapshot() {
  const match = location.hash.match(/^#share=(.+)$/);
  if (!match) return false;
  if ($("#shareImportDialog").open) return true;
  try {
    const payload = decodeSharePayload(match[1]);
    $("#shareImportSummary").textContent = summarizeSharedSnapshot(payload);
    $("#acceptShareImport").onclick = () => {
      applySharedSnapshot(payload);
      $("#shareImportDialog").close();
      history.replaceState(null, "", `${location.origin}${location.pathname}`);
      showView("random");
    };
    $("#shareImportDialog").showModal();
    return true;
  } catch {
    showToast("共享链接解析失败");
    return false;
  }
}

function bindEvents() {
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => showView(button.dataset.view)));
  $("#openSettings").addEventListener("click", () => showView("my"));
  $("#randomizeBtn").addEventListener("click", randomize);
  $("#clearDiyBtn").addEventListener("click", () => {
    state.diySelected = [];
    save("diySelected", state.diySelected);
    renderDiy();
  });
  $("#addRecipeBtn").addEventListener("click", () => openCustom());
  $("#addRecipeFromMyBtn").addEventListener("click", () => openCustom());
  $("#closeDialog").addEventListener("click", () => $("#recipeDialog").close());
  $("#closeCustomDialog").addEventListener("click", () => $("#customDialog").close());
  $("#customRecipeForm").addEventListener("submit", saveCustomRecipe);
  $("#customType").addEventListener("change", updateCustomIconSuggestion);
  $("#customName").addEventListener("input", updateCustomIconSuggestion);
  $("#customIngredients").addEventListener("input", updateCustomIconSuggestion);
  $("#customIconPicker").addEventListener("change", (event) => {
    if (event.target.closest("input[name='customIcon']")) {
      $("#customDialog").dataset.iconTouched = "true";
    }
  });
  $("#recipeSearch").addEventListener("input", (event) => {
    state.recipeSearch = event.target.value.trim();
    renderRecipeList();
  });
  $("#settingsForm").addEventListener("input", updateSettings);
  $("#shareStateBtn").addEventListener("click", createShareLink);
  $("#exportAllBtn").addEventListener("click", exportAllData);
  $("#importAllInput").addEventListener("change", importAllData);
  $("#clearHistoryBtn").addEventListener("click", clearMealHistory);
  $("#exportBtn").addEventListener("click", exportCustomRecipes);
  $("#importInput").addEventListener("change", importCustomRecipes);
  $("#closeShareImport").addEventListener("click", () => $("#shareImportDialog").close());
  $("#ignoreShareImport").addEventListener("click", () => {
    $("#shareImportDialog").close();
    history.replaceState(null, "", `${location.origin}${location.pathname}`);
  });
  window.addEventListener("hashchange", detectSharedSnapshot);

  document.body.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.dataset.toggleSection) toggleMySection(target.dataset.toggleSection);
    if (target.dataset.fav) toggleFavorite(target.dataset.fav);
    if (target.dataset.block) toggleBlocked(target.dataset.block);
    if (target.dataset.detail) openDetail(target.dataset.detail);
    if (target.dataset.add) addToDiy(target.dataset.add);
    if (target.dataset.swapRandom) replaceRandomRecipe(target.dataset.swapRandom);
    if (target.dataset.mode) setMode(target.dataset.mode);
    if (target.dataset.confirmMeal !== undefined) confirmCurrentMeal();
    if (target.dataset.rerollMeal !== undefined) randomize();
    if (target.dataset.copyShopping !== undefined) copyShoppingList();
    if (target.dataset.reuseMeal) reuseMeal(target.dataset.reuseMeal);
    if (target.dataset.presetMeat) setRandomPreset(Number(target.dataset.presetMeat), Number(target.dataset.presetVeg));
    if (target.dataset.filterTarget) {
      const filterState = target.dataset.filterTarget === "diy" ? state.diyFilters : state.recipeFilters;
      filterState[target.dataset.filterKind] = target.dataset.filterValue;
      normalizeFilterState(filterState);
      render();
    }
    if (target.dataset.removeSelected) {
      state.diySelected = state.diySelected.filter((id) => id !== target.dataset.removeSelected);
      save("diySelected", state.diySelected);
      renderDiy();
    }
    if (target.dataset.edit) openCustom(target.dataset.edit);
    if (target.dataset.delete) deleteCustomRecipe(target.dataset.delete);
  });

  document.body.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-shopping-item]");
    if (!input) return;
    toggleShoppingItem(input.dataset.shoppingItem, input.checked);
  });
}

bindEvents();
renderIconPicker();
renderTagPicker();
state.diySelected = validRecipeIds(state.diySelected);
state.randomResults = validRecipeIds(load("randomResultIds", [])).map(getRecipe).filter(Boolean);
render();
detectSharedSnapshot();
