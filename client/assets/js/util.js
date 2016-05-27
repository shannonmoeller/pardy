'use strict';

var morphdom = require('morphdom');
var uuid = require('uuid');

exports.getUser = function (role) {
	var idKey = 'pardy2.' + role + '.id';
	var nameKey = 'pardy2.' + role + '.name';

	var id = localStorage.getItem(idKey) || uuid.v4().slice(0, 6);
	var name = localStorage.getItem(nameKey) || prompt(role + ' name');

	localStorage.setItem(idKey, id);
	localStorage.setItem(nameKey, name);

	return {
		id: id,
		name: name,
	};
};

exports.html = function (literalSections) {
	var substs = Array.prototype.slice.call(arguments, 1);
    var raw = literalSections.raw;
    var result = '';

    substs.forEach(function (subst, i) {
        var lit = raw[i];

        if (Array.isArray(subst)) {
            subst = subst.join('');
        }

        if (subst === undefined || subst === null || typeof subst === 'boolean') {
            subst = '';
        }

        if (lit.endsWith('$')) {
            subst = exports.htmlEscape(subst);
            lit = lit.slice(0, -1);
        }

        result += lit;
        result += subst;
    });

    result += raw[raw.length - 1]; // (A)

    return result;
};

exports.htmlEscape = function (str) {
    return String(str || '')
        .replace(/&/g, '&amp;') // first!
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/`/g, '&#96;');
};

exports.render = function (el, html) {
	morphdom(el, '<div>' + html.trim() + '</div>', {
		childrenOnly: true,
	});
};
