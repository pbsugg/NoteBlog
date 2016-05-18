//not the css framework--'barrel' that combines several modules into one
//enables @Component annotation
import {bootstrap} from '@angular/platform-browser-dynamic';
//dependency injection
import {provide} from '@angular/core';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS } from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import ApplicationComponent from './components/application/application';
import {NOTEBLOG_SERVICES} from './services/services';

//initiate application by specifying this as root component
bootstrap(ApplicationComponent, [
	FORM_PROVIDERS,
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy}),

	NOTEBLOG_SERVICES
])


