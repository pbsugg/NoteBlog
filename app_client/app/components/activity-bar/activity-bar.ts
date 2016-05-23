import {Component} from "@angular/core";
import {Post} from "app/services/post";
import {Note} from "app/services/note";

@Component({
	select: 'activity-bar',
	providers: [
		Note,
		Post
	],
	templateURL: 'app/components/activity-bar/activity-bar.html',
	styleURLs: 'app/components/activity-bar/activity-bar.css',
	directives: [
	]

})

export default class ActivityBarComponent{}



