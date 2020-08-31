export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f4d6807a106750b3e9488a0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v7um7mgo',
                  apiId: '6f51c522-ed91-4aa2-80cd-8729514b9ce0'
                },
                {
                  buildHookId: '5f4d6808479f110a10a7cdfe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nb5o5615',
                  apiId: 'a9ac40a7-e110-406d-9e1d-894e341de334'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbaustin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nb5o5615.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
