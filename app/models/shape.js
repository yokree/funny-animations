import Ember from "ember";

var Shape = Ember.Object.extend({
  vector:    null, //describes center and edge length
  edges:     null,

  lines: function(camera) {
    var transformation = this.transformation(camera);
    return this.edges.map(function(edge) {
      var start = vec3.create();
      var end = vec3.create();
      vec3.transformMat4(start, edge[0], transformation);
      vec3.transformMat4(end, edge[1], transformation);
      return [start, end];
    });
  },

  transformation: function(camera) {
    var matrix = mat4.create();
    var length = this.vector[3];
    mat4.translate(matrix, matrix, this.vector);
    mat4.scale(matrix, matrix, vec3.fromValues(length, length, length));
    if (camera) {
      mat4.mul(matrix, matrix, camera);
    }
    return matrix;
  }
});

export default Shape;
