import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

declare var process:any
declare var require:any


if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}