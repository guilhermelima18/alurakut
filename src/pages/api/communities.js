import { SiteClient } from 'datocms-client';

export default async function Request(request, response) {
  if (request.method === 'POST') {
    const TOKEN = 'feb3e7b59c9ed2c5c4ad2885920606';

    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: "975304", // model ID
      ...request.body
    });

    response.json({
      record: record
    })

    return;
  }

  response.status(404).json({
    message: 'Ainda não existe nada no método GET.'
  })
};