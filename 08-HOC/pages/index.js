import React from 'react'
import CommentList from '../components/CommentList';
import BlogPost from '../components/BlogPost';
import withSubscription from '../components/WithSubscription/index'

// CommentList
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);


// BlogPost
const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }

  render () {
    const style = {
      width: '100%',
      'textAlign': 'center',
      title: {
        color: 'red'
      }
    }
    return (
      <div style={style}>
        <h1 style={style.title}>HOC-Demo</h1>
        <CommentListWithSubscription />
        <BlogPostWithSubscription />
      </div>
    );
  }
}