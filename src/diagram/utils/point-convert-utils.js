//@ts-ignore
window.dgrmOffsetX = 0;
//@ts-ignore
window.dgrmOffsetY = 0;

/**
 * Point in view (in SVG) to point in canvas
 * @param {Point} canvasPosition
 * @param {number} scale
 * @param {Point} point
 * @returns {Point}
 */
export function pointViewToCanvas(canvasPosition, scale, point) {
	return {
		//@ts-ignore
		x: (point.x - canvasPosition.x - window.dgrmOffsetX) / scale,
		//@ts-ignore
		y: (point.y - canvasPosition.y - window.dgrmOffsetY) / scale
	};
}

/**
 * Point in canvas to point in view (in SVG)
 * @param {Point} canvasPosition
 * @param {number} scale
 * @param {Point} point
 * @returns {Point}
 */
export function pointCanvasToView(canvasPosition, scale, point) {
	console.log(canvasPosition, scale, point)
	return {
		//@ts-ignore
		x: (point.x) * scale + (canvasPosition.x + window.dgrmOffsetX),
		//@ts-ignore
		y: (point.y) * scale + (canvasPosition.y + window.dgrmOffsetY)
	};
}
