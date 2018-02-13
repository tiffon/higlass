/**
 * A cluster that contains annotations.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function AreaCluster(isAverageCenter, padding = 0) {
  this.isAverageCenter = isAverageCenter;
  this.center = null;
  this.annotations = new Set();
  this.bounds = null;

  this.minX = 0;
  this.maxX = 0;
  this.minY = 0;
  this.maxY = 0;

  this.padding = padding;
}


/**
 * Add an annotation to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
AreaCluster.prototype.add = function add(annotation) {
  if (this.annotations.has(annotation)) return false;

  const [cX, cY] = annotation.getViewPositionCenter();

  if (!this.center) {
    this.center = [cX, cY];
  }

  const l = this.annotations.size;

  if (this.isAverageCenter) {
    const x = ((this.center[0] * l) + cX) / (l + 1);
    const y = ((this.center[1] * l) + cY) / (l + 1);
    this.center = [x, y];
  }

  annotation.isAdded = true;
  this.annotations.add(annotation);

  this.updateBounds(annotation);

  return true;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
AreaCluster.prototype.updateBounds = function updateBounds(annotation) {
  this.minX = Math.min(this.minX, annotation.minX - this.padding);
  this.maxX = Math.max(this.maxX, annotation.maxX + this.padding);
  this.minY = Math.min(this.minY, annotation.minY - this.padding);
  this.maxY = Math.max(this.maxY, annotation.maxY + this.padding);
};


/**
 * Removes the cluster
 */
AreaCluster.prototype.remove = function remove() {
  this.annotations = new Set();
  delete this.annotations;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
AreaCluster.prototype.getSize = function getSize() {
  return this.annotations.size;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
AreaCluster.prototype.getCenter = function getCenter() {
  return this.center;
};


/**
 * Determines if a annotation lies in the clusters bounds.
 *
 * @param {google.maps.Marker} annotation The annotation to check.
 * @return {boolean} True if the annotation lies in the bounds.
 */
AreaCluster.prototype.isWithin = function isWithin(annotation) {
  const [mMinX, mMaxX, mMinY, mMaxY] = annotation.getViewPosition();
  return (
    mMinX < this.maxX &&
    mMaxX > this.minX &&
    mMinY < this.maxY &&
    mMaxY > this.minY
  );
};

export default AreaCluster;