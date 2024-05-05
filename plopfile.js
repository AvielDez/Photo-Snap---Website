export default function (plop) {
  plop.setGenerator('component', {
    description: 'component boiler plate',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/components/{{componentName}}/{{componentName}}.tsx',
        templateFile: 'plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{componentName}}/{{componentName}}.module.css',
        templateFile: 'plop-templates/component/component.module.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{componentName}}/index.ts',
        templateFile: 'plop-templates/component/index.hbs',
      },
    ],
  });
}
