##Components

I drew up the following chart to help me think through how I would group my
Angular components and services to support the views that I mocked up on the
wireframes.

Each column represents one provider (from component to service) or directive (from a parent component to a child component)
relationship. Services are listed directly below the component their is their
provider. For example, in the "Landing" view, I will populate the "Recent-Notes"
component with the note data AND draw on the note component to render it
directly on the screen, but the notes data will only be sent once to
"Recent-Notes," and then injected into the relevant note template from there.

![ComponentsAndServices](./mockups/NoteBlogComponentsServices.png)


