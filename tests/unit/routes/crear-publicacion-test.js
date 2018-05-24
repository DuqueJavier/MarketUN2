import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | crear-publicacion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:crear-publicacion');
    assert.ok(route);
  });
});
