import React, { Component } from 'react';
// export Comment to './BlogPost.js'



export default class Comment extends Component {
    render(){
        return  <div className="comment">{this.props.commentText}</div> 
    }
}

// class Comment extends React.Component{
//     render(){
//       return(
//           <div  className="comment">
//         {this.props.CommentText}
//         </div>
//       )
//     }
//   }
