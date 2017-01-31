import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  link() { return faker.internet.url(); },
  userId() { return faker.random.number({max: 10, min: 1}); },
  title() { return faker.lorem.words(5); },
  about(i) { if (i % 3 === 0) { return faker.lorem.sentences(2); } else { return null; } },
  public() { return faker.random.boolean(0.2); },
  created() { return faker.date.past(); }
});
