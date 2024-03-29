import { Selector } from 'testcafe';

import * as asserts from '../asserts.js';
import * as selectors from '../selectors.js';

fixture("404")
    .page("https://edbe777.github.io/maps_website//404.html");

test("Background image should be from the latest content, resized without filters", async t => {
    await asserts.background(t, selectors.background(), "media/images/logo");
});
