import {Component} from "@angular/core";
import TopNavbarComponent from "app/components/top-navbar/top-navbar"; 
import FooterComponent from "app/components/footer/footer";
import LinkSidebarComponent from "app/components/link-sidebar/link-sidebar";

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

export default class ApplicationComponent{

}
