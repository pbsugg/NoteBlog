import {Component} from "@angular/core";
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

export default class ApplicationComponent{

}
