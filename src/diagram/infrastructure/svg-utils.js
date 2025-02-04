import { first } from '../infrastructure/iterable-utils.js';

/**
 * @param {SVGGraphicsElement} svgEl
 * @param {number} transform
 * @param {SVGSVGElement=} svg pass if svgEl not yet in DOM
 * @returns {SVGTransform}
 */
export function ensureTransform(svgEl, transform, svg) {
	let tr = first(svgEl.transform.baseVal, tt => tt.type === transform);
	if (!tr) {
		tr = (svgEl.ownerSVGElement || svg).createSVGTransform();
		svgEl.transform.baseVal.appendItem(tr);
	}
	return tr;
}

/**
* @param {SVGGraphicsElement} svgEl
* @param { {x: number, y: number} } position
* @param {SVGSVGElement=} svg pass if svgEl not yet in DOM
* @returns {void}
*/
export function svgPositionSet(svgEl, position, svg) {
	ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_TRANSLATE, svg).setTranslate(position.x, position.y);
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @returns { {x: number, y: number} }
 */
export function svgPositionGet(svgEl) {
	const tr = first(svgEl.transform.baseVal, tt => tt.type === SVGTransform.SVG_TRANSFORM_TRANSLATE);
	return tr ? { x: tr.matrix.e, y: tr.matrix.f } : { x: 0, y: 0 };
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @param {number} angle
 * @param {SVGSVGElement=} svg pass if svgEl not yet in DOM
 * @returns {void}
 */
export function svgRotate(svgEl, angle, svg) {
	ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_ROTATE, svg).setRotate(angle, 0, 0);
}

/**
 * @param {SVGGraphicsElement} svgEl
 * @param {Point} fixedPoint this point will not chage position while scale
 * @param {number} scale
 * @param {number} nextScale
 */
export function svgScale(svgEl, fixedPoint, scale, nextScale) {
	const position = svgPositionGet(svgEl);

	svgPositionSet(svgEl, {
		//@ts-ignore
		x: nextScale / scale * (position.x - (fixedPoint.x - window.dgrmOffsetX)) + (fixedPoint.x - window.dgrmOffsetX),
		//@ts-ignore
		y: nextScale / scale * (position.y - (fixedPoint.y - window.dgrmOffsetY)) + (fixedPoint.y - window.dgrmOffsetY)
	});

	ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_SCALE)
		.setScale(nextScale, nextScale);
}
