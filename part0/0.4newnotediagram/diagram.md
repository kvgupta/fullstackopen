sequenceDiagram
actor User
User->>Browser: something
Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/new_note 
Note over Browser,Server: payload: something
Server-->>Browser: 302 Status Redirect
Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/notes
Server-->>Browser: HTML document
Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: CSS file
Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/main.js
Server-->>Browser: JS file
Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Browser: JSON file