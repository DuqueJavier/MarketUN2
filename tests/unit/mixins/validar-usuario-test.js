import EmberObject from '@ember/object';
import ValidarUsuarioMixin from 'market-un2/mixins/validar-usuario';
import { module, test } from 'qunit';

module('Unit | Mixin | validarUsuario', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ValidarUsuarioObject = EmberObject.extend(ValidarUsuarioMixin);
    let subject = ValidarUsuarioObject.create();
    assert.ok(subject);
  });
});
