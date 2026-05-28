### {{title | capitalize }}

{{ body | safe }}

{% if lang == "pt-br" %}

- **Funcionalidades**: {{features}}
- **Palavras-chave**: {{keywords}}
- [Ver no Github]({{url}})
  {% else %}
- **Features**: {{features}}
- **Keywords**: {{keywords}}
- [View on Github]({{url}})
  {% endif %}

---
