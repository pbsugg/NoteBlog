## NoteBlog

#Overview

A personal blogging platform built on the MEAN stack that combines the features
of a note-taking tool and a blog. The goal is to combine the low-pressure
spontaneity of note-taking with the longer, more developed presentation of a
blog.  For now, I call it a NoteBlog ;)

#Why Build A Blog From Scratch?

Blogging is a well-developed art, with many ready-made options for a variety of
needs and technological skill sets, but none of the existing options were
exactly right for what I envisioned.  Plus, this was a manageable opportunity to
grow my single-page app design skills using modern web frameworks and an
all-Javascript stack, all while building something that I can use, maintain and
port over to a new framework when the time inevitably comes.

Existing blogging platforms can be divided between (1) the all-in-one, turn-key
solutions (e.g., Wordpress, Medium) with a lot of built-in widgets and modules and (2)
the minimalist, back-to-basics static solutions (e.g., Jekyll). I wanted a
site that was cleaner and less opinionated than most of the ready-made options
but that also had more back-end ability to dynamically aggregate and organize a variety of content
than static sites can easily manage.  I needed something that was both more and
less than the typical blogging solution.

# What Sets This Platform Apart?

Tumblr and Twitter are great for posting quick little snippets of media and text, but
they're still very far removed from the blogging mindset.  Blogs are supposed to
be rough drafts of a thought, but they're still a thought with some semblance of
an introduction, body and conclusion.  That can be more than I have to offer on
any given day.  Sometimes a thought hasn't reached blog 
form yet, but it's on the way there.  I wanted a platform for blogging that's
built out of smaller units of thought, little "notes" that were valuable in
themselves and could be supplementary to the art of blogging. The idea is that I
can always post what I think about what I happen to be reading, watching and
doing on a given day, and that those smaller thoughts often add up to what will
become a blog post.  If I had a way to hold onto those thoughts in notes and include them within later blog posts, they
could supplement and deepen blog content, showing both what's behind it, where
it came from, and where's it's going.

So the big difference from every other blog here is the way it lowers the
barrier to entry into blogging.  Take notes when you have something you want to
get out there--they might not lead anywhere (that's fine too, you still have them down), or they might go somewhere.

###What Note-Taking Adds to Blogging

* Notes offer a public-facing format for my thoughts that are a bit longer and more substantive than a tweet, but way less committing than a full blog post.  Whereas I might only get around to blogging once a week or every few weeks, I'm writing notes several times a week at least, and the expectations are low! And I have more of a presence on my blog because I'm more active.
* Notes  will be moderately length-limited, something on the order of 250 words.  That's long enough to enforce some discipline, but still enough to contain some substance.
* Notes can be included in blog posts, but they're also unobtrusive.  A reader
  can see them within the body of a post and click on them if interested.
* At least in my design, I declutter the blogging sidebar on the post level.  Many blogs have a "two column" format of some
kind, with the primary column being the content and the second, smaller column 
including links, social media accounts, related posts and other secondary
content.  The secondary column largely becomes a catch-all and stops being read. This format will make that secondary column into a more useful,
cleaned-up space. Rather than ignoring the second column, the reader can expect to find real content there and start paying more attention.
* Get a "two for one" with a blogging platform. You're not only publishing
  content that's readable and engaging when you post, you're also showing what you're
deliberately working and thinking about when you don't have a publishable blog
post yet ready.

// Image of Blog front page

# Other Project Links
I wrote a few user stories to better understand what I want out of this project.
Here are a few wireframes and visual mockups I'll visual mockups I'll be working
from.

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
