import {Component} from "@angular/core";
import {Note} from "app/services/note"


@Component({
})

export default class RecentNotesComponent{
	
	notes: Array<Note> = [];

	constructor(private note: Note) {
		//TD: write function to get five most recent notes and posts
		this.notes = this.notes.getMostRecentNotes(5);
	}
}
