#User Stories

As a user, I would like to...

1. Show and provide a record of what I am reading/thinking without commiting to
the structure and presentation of a full blog post.  I want to be able to jot
thoughts that might be useful to myself and others in a small, spontaneous and
miniature form.
	* Notes should have the ability to add code snippets, links, images
  etc.--anything a normal blog post might contain.
	* I should be able to add category and topic tags to organize notes.  
	*Notes should be searchable by tags and other fields like tag, title, date, etc. (this will
likely just happen through database queries)
	*There should be a "recents" page where I can see all my most recent notes laid
out.
2. Write blog posts that include a rich range of input formats (e.g., code snippets) and the rest.  Anything a Jekyll, Wordpress, etc. blog might do.
3. Link blog posts and notes together.  A few rules:
Notes should be unobtrusive.  
	* I should see a sidebar with a summary of the notes at the beginning of a blogpost. I can click on any of these notes at the beginning to expand it.
	* When I want to see more about a note from within a blogpost text, I just click on its superscript link in
  the text and it appears directly to the right of the relevant document. 
4. As a user, I would like to workflow for attaching a note to a blog post to be something like the following:
	* Begin writing a post. As soon as the user wants to insert a note, put the
cursor somewhere and click an "insert note" button along the notes sidebar (right side)
	* A search bar appears. Search by tag, title, date, to start.  Type in a search term and the database is queried for a note of that particular type. 
	* Check the box to include any relevant notes that come up during the search process.  
	* When the blog is posted, the notes appear in a sidebar alongside the blogpost.
  There will be an icon (superscript) in the post indicating that a relevant note appears at this point.  
