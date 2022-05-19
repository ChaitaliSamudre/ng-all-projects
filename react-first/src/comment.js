import React from 'react';
class Comment extends React.Component {
    render() {
        return (
            <p>
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
            </p>
        )
    }
}
export default Comment;