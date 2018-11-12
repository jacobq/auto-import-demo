import Controller from '@ember/controller';
import PouchDB from 'pouchdb';
import PouchMemoryPlugin from 'pouchdb-adapter-memory';

export default Controller.extend({
  init() {
    this._super(...arguments);
    PouchDB.plugin(PouchMemoryPlugin);
    const db = new PouchDB('mydb', { adapter: 'memory' });
    console.log(db); // eslint-disable-line
  }
});
