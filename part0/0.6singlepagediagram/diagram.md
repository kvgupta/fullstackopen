sequenceDiagram
actor User
User->>Browser: something
Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note over Browser,Server: payload: something
Server-->>Browser: 201 Created, application/json