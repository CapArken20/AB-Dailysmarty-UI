import React, { Component } from "react";

export default class RecentPosts extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts__heading">
                        Recent Posts
                    </div>
                    <div className="recent-posts__posts">
                        <ul>
                            <li>Recent Post 0</li>
                            <li>Recent Post 1</li>
                            <li>Recent Post 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}