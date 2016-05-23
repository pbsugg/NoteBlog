import {Component} from "@angular/core";
import TopNavbarComponent from "app/components/top-navbar/top-navbar"; 
import ActivityBarComponent from "app/components/activity-bar/activity-bar";

@Component({
	selector: 'top-navbar',
	providers:[],
	templateURL: 'app/components/top-navbar/top-navbar.html',
	styleURLs: ['app/components/top-navbar/top-navbar.css'],
	directives: [
		ActivityBarComponent
	]
})

export default class TopNavbarComponent{}


