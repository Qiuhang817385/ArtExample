export const config = {
  "a": {// "a" 是field的id，后⾯的layout会⽤到
    "fieldName": "field_a",// field对应的名称
    "type": "input",// field类型，可以为text：输⼊框<Input />，"select"：选择器<Select />，"number": <InputNumber />
  },
  "b": {
    "fieldName": "field_b",
    "type": "select",
    "options": [ // 如果type是select的话，会给出具体的options，是⼀个数组
      {
        "value": "aa",
        "text": "aa"
      },
      {
        "value": "bb",
        "text": "bb"
      }
    ]
  },
  "c": {
    "fieldName": "filed_c",
    "type": "number",
    "min": 10, // number类型field的最⼩值
    "max": 100 // number类型的field的最⼤值
  }
}

export const layout = [
  ["a"],
  ["b", "c"]
]
// 第⼀⾏只有⼀个field，就是a，是⼀个Input组件
// 第⼆⾏有两个field，左边是b, 右边是c
// 这个layout可以使⽤antd的Grid来实现，每⾏只会有⼀个或两个field