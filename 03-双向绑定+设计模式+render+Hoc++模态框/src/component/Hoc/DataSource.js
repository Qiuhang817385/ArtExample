let DataSource = {
  getComments: () => {
    return [
      'comment1', 'comment2', 'comment3', 'com41'
    ]
  },
  // 订阅单个博客文章
  getBlogPost: () => {
    return 'BlogPost Contents';
  },
  addChangeListener: () => {
    // console.log('method', method)
    console.log('addChangeListener')
  },
  removeChangeListener: () => { console.log('removeChangeListener') },
}
export default DataSource;