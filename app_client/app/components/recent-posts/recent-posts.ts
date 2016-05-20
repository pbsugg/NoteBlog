import {Component} from "@angular/core";
import {Post} from "app/services/post"


@Component({
})

export default class RecentPostsComponent{
	
	posts: Array<Post> = [];

	constructor(private post: Post) {
		//TD: write function to get five most recent notes and posts
		this.posts = this.posts.getMostRecentPosts(5);
	}
}
