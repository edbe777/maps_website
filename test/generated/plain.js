import { Selector } from 'testcafe';

import * as asserts from '../asserts.js';
import * as selectors from '../selectors.js';

fixture("Plain content")
    .page("https://edbe777.github.io/maps_website/");

test("Title should come from Front Matter", async t => {
    await t.expect(Selector("h1").innerText).eql("About Hugo Split Gallery theme");
});
test("Content should be available", async t => {
    await t.expect(Selector(".split-bio p").count).eql(3);
});
test("Background image should match Front Matter", async t => {
    await asserts.background(t, selectors.background(), "media/images/logo");
});
test("Social media images should match Front Matter", async t => {
    await asserts.background(t, selectors.opengraphImage(), "media/images/logo");
    await asserts.background(t, selectors.schemaImage(), "media/images/logo");
    await asserts.background(t, selectors.twitterImage(), "media/images/logo");
});
test("Date should come from Front Matter", async t => {
    await t.expect(Selector("#list-metadata").childElementCount).eql(1);
});

test.page("https://edbe777.github.io/maps_website/1 About/index.html")
    ("Date should not be displayed if not present in Front Matter", async t => {
        await t.expect(Selector("#list-metadata").count).eql(0);
    });
