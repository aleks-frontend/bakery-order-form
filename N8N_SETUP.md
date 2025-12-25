# n8n Webhook Setup Instructions

## Bread Types GET Webhook

This workflow provides a GET endpoint that returns available bread types for the bakery order form.

### Setup Steps:

1. **Import the Workflow**
   - Open your n8n instance
   - Go to "Workflows" → "Import from File"
   - Select `bread-types-webhook.json`

2. **Activate the Workflow**
   - Click the "Active" toggle to activate the workflow
   - The webhook will be available at: `https://YOUR_N8N_DOMAIN/webhook/bread-types`

3. **Update the URL in index.html**
   - Replace `YOUR_N8N_DOMAIN` in `index.html` with your actual n8n domain
   - The URL should look like: `https://your-n8n-instance.com/webhook/bread-types`

### Workflow Structure:

1. **Webhook Node** - Receives GET requests at `/bread-types`
2. **Code Node** - Returns the bread types data as JSON
3. **Respond to Webhook Node** - Sends the JSON response back

### Response Format:

```json
[
  { "id": "white_500", "name": "White bread 500g", "price": 120 },
  { "id": "rye_700", "name": "Rye bread 700g", "price": 180 },
  { "id": "whole_wheat_500", "name": "Whole wheat bread 500g", "price": 140 },
  { "id": "multigrain_700", "name": "Multigrain bread 700g", "price": 200 },
  { "id": "sourdough_500", "name": "Sourdough bread 500g", "price": 160 }
]
```

### Customization:

You can modify the bread types in the Code node by editing the JavaScript code. The data structure should always include:
- `id`: Unique identifier (string)
- `name`: Display name (string)
- `price`: Price in RSD (number)

