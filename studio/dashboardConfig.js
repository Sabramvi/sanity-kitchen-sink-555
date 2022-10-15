export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '634b3de17268300299f8fc8d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-555-studio',
                  apiId: '2f4dc678-2e4b-4d1c-95c1-03dd88ae59f4'
                },
                {
                  buildHookId: '634b3de1dea29b7fe280a23d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-555',
                  apiId: 'c54fdba7-3f00-47eb-9480-2f5e9cfeafcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sabramvi/sanity-kitchen-sink-555',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-555.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
