export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3727240de2baee4172945a',
                  title: 'Sanity Studio',
                  name: 'personal-website-studio-zn512hgy',
                  apiId: '3cb22c10-23f5-4b58-a82f-eeb96456ee18'
                },
                {
                  buildHookId: '5f372724c4123855bbd9b00b',
                  title: 'Blog Website',
                  name: 'personal-website-web',
                  apiId: '25ec1be2-1b30-45c7-9854-41dfdd22f1b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Cal-Hagner/personal-website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://personal-website-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
