Package.describe({
  name: 'sgi:ui-mask',
  summary: 'ui-mask: Provide masks for input fields on the client-side',
  version: '1.4.7',
  git: 'https://github.com/sginc/ui-mask.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('angular@1.0.1');
  api.imply('angular');

  api.addFiles([
    'upstream/dist/mask.js',
  ], 'client');
});

Package.on_test(function(api) {
  api.use('sgi:ui-mask');

  api.use([
    'tinytest',
    'test-helpers'
  ], ['client']);

  api.add_files([
    'tests/tests.js',
  ], ['client']);
});
