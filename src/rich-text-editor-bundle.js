import { makeRichText } from '../src/rich-text-editor';
import { defaults } from './util';

// Expose makeRichText and sanitizeHtml
window.makeRichText = makeRichText;
window.sanitizeHtml = defaults.sanitize;