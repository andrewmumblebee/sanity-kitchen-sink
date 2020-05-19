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
                  buildHookId: '5ec44320c2d4c96845eaf247',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i28xkzdo',
                  apiId: 'd72959d7-3ffc-463f-ac37-c865ebb890f1'
                },
                {
                  buildHookId: '5ec443218489027193f46487',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5x2xatqg',
                  apiId: 'bcbd573e-d806-484e-8574-6d7be8185bc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrewmumblebee/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5x2xatqg.netlify.app', category: 'apps'}
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
