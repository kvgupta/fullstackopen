

```mermaid
sequenceDiagram
  Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/spa
  Server-->>Browser: HTML document
  Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/main.css
  Server-->>Browser: CSS file
  Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/spa.js
  Server-->>Browser: JS file
  Browser->>Server: https://studies.cs.helsinki.fi/exampleapp/data.json
  Server-->>Browser: JSON file
```
