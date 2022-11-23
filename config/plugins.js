module.exports = ({ env }) => ({

    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'devesh.webpatriot@gmail.com',
          defaultReplyTo: 'webdeveshverma@gmail.com',
        },
      },
    },

  });