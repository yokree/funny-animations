import Ember from "ember";
import Cube from "funny-animations/models/cube";

var RotatingCube = Ember.Component.extend({
  tagName:   'svg',
  container: null,
  camera:    mat4.create(),
  cube:      null,
  test:      null,

  didInsertElement: function () {
    var width = this.$().parent().width();
    var height = this.$().parent().height();
    this.container = d3.select(this.element)
      .attr('width', width)
      .attr('height',height)
      .append('g');
    var cubeLength = Math.min(width, height) / 2 / Math.sin(Math.PI / 3);
    this.set('cube', Cube.create({
      vector:    vec4.fromValues(width / 2, height / 2, 0, cubeLength),
      container: this.container,
      camera:    this.get('camera')
    }));
    this.update();
  },

  update: function() {
    this.cube.renderTo(this.camera);
  }.observes('camera')
});

export default RotatingCube;
