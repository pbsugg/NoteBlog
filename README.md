# NoteBlog

A MEAN stack blog for personal use that combines the features of a (personal) note-taking wiki and a blog.

# Why Build Your Own Blog?

*Develop thoughts in a public-facing format that are a bit longer and more substantive than a tweet.
*To enforce this format, they will be length-limited, something on the order of a not-too-long paragraph. Let's say 100 words for now.
*Declutter the blogging sidebar.  Many blogs have a "two column" format of some
kind, with the primary column being the content and the second, smaller column 
including links, social media accounts, related posts and other secondary
content.  The secondary column largely becomes a catch-all and stops being read. This format will make that secondary column into a more deliberate,
cleaned-up space. Rather than ignoring the second column, the reader can expect to find real content there and start paying more attention.
*Get a "two for one" with a blogging platform.  The big problem with blogs is that, as informal and spontaneous as they are, they still present a fairly high
barrier to entry for a busy person.  You have to have something to say that is
fairly unified and well-structured if it's going to be worth reading. We know
from Twitter that it's a lot easier to say something quickly if it comes in a small, manageable chunk.  This blog is an attempt to bring the same spontaneity to the
blog in a "building block format." Post a few notes, then maybe in a couple of
days you have a blog post worth reading.
notes to my blog, I make it possible 

# Functionality 

As a user, I would like to... ;)

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

The workflow for seeing a note from within a blogpost will be something like the following:
* Begin writing a post. As soon as the user wants to insert a note, put the
cursor somewhere and click an "insert note" button along the notes sidebar (right side)
* A search bar appears. Search by tag, title, date, to start.  Type in a search term and the database is queried for a note of that particular type. 
* Check the box to include any relevant notes that come up during the search process.  
* When the blog is posted, the notes appear in a sidebar alongside the blogpost.
  There will be an icon (superscript in a special color ) in the post indicated
that a relevant note appears at this point.  
*Click on that icon and the note "focuses" in the sidebar.  E.g., font becomes
bigger and is shaded, etc.
