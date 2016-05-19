import {Component} from "@angular/core"
import HeaderComponent from "app/components/header/header";
import NavbarComponent from "app/components/navbar/navbar"; 
import LandingPageComponent from "app/components/landing-page/landing-page";
import ActivityBarComponent from "app/components/activity-bar/activity-bar";
import NoteComponent  from "app/components/note/note";
import PostComponent from "app/components/post/post";



@Component({
	selector: 'noteblog-application',
	providers: [
		Note,
		Post
	],
	templateURL: 'app/components/application/application.html',
	styleURLs: ['app/components/application/application.css'],
	directives: [
		HeaderComponent,
		NavbarComponent,
		LandingPageComponent,
		ActivityBarComponent,
		NoteComponent,
		PostComponent
	]
})

export default class ApplicationComponent{
	
	notes: Array<Note> = [];
	posts: Array<Post> = [];

	constructor(notes: Note, posts: Post) {
		//TD: write function to get five most recent notes and posts
		this.notes = this.notes.getMostRecentNotes(5);
		this.posts = this.posts.getMostRecentPosts(5);
	}
}
