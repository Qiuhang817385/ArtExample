var aoa = [
  ['主要信息', null, null, '其它信息'],// 特别注意合并的地方后面预留2个null
  ['姓名', '性别', '年龄', '注册时间'],
  ['张三', '男', 18, newDate()],
  ['李四', '女', 22, newDate()]
];
var sheet = XLSX.utils.aoa_to_sheet(aoa);
sheet['!merges'] = [// 设置A1-C1的单元格合并
  // r是行，c是列
  { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
];
openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
