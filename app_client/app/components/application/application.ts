import {Component} from "@angular/core"
import NavbarComponent from "app/components/navbar/navbar"; 
import FooterComponent from "app/components/footer/footer";
import LandingPageComponent  from "app/components/landing-page/landing-page";
import SidebarComponent from "app/components/sidebar/sidebar";

@Component({
	selector: 'noteblog-application',
	providers: [
		Note,
		Post
	], 
	templateURL: 'app/components/application/application.html',
	styleURLs: ['app/components/application/application.css'],
	directives: [
		NavbarComponent,
		FooterComponent,
		LandingPageComponent,
		SidebarComponent	
	]
})

//not sure if I will need to import "note" and "post" components, revisit this
//when necessary...
//
export default class ApplicationComponent{
	
	notes: Array<Note> = [];
	posts: Array<Post> = [];

	constructor(notes: Note, posts: Post) {
		//TD: write function to get five most recent notes and posts
		this.notes = this.notes.getMostRecentNotes(5);
		this.posts = this.posts.getMostRecentPosts(5);
	}
}
