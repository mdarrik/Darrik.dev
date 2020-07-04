---
pagination:
    data: collections
    size: 1
    alias: tag
    filter:
        - writing
        - all
        - notes
permalink: /{{tag | replace:" ", "-" | urlencode }}/index.html
---

# Posts related to {{ tag }}

{% for post in collections[tag] reversed %}
- [{{post.data.title}}]({{post.url | url}})
{% endfor %}
