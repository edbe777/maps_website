import { Selector } from 'testcafe';

import * as asserts from '../asserts.js';
import * as selectors from '../selectors.js';

fixture("Taxonomies")
    .page("https://edbe777.github.io/maps_website/");

test("Taxonomies should be displayed on homepage", async t => {
    await t
        .expect(Selector("#taxonomy-location ul").childElementCount).eql(3)
        .expect(Selector("#taxonomy-season ul").childElementCount).eql(4);
});

test.page("https://edbe777.github.io/maps_website/Surgery/index.html")
    ("Locations taxonomy page title should be taxonomy plural with icon", async t => {
        await t.expect(Selector("h1").innerText).eql("Surgery")
            .expect(Selector("h1 i").classNames).eql(["fa", "fa-location-arrow", "fa-fw"]);
    });
test.page("https://edbe777.github.io/maps_website/locations/index.html")
    ("Locations taxonomy page should display 3 items", async t => {
        await t.expect(Selector(".split-bio ul").childElementCount).eql(3);
    });
test.page("https://edbe777.github.io/maps_website/locations/index.html")
    ("Locations taxonomy grid should display 3 photos + 1 padding element", async t => {
        await t.expect(Selector(".split-grid").childElementCount).eql(4);
    });
test.page("https://edbe777.github.io/maps_website/locations/index.html")
    ("Locations taxonomy page background image should be from the latest post, with filters", async t => {
        await asserts.backgroundBlurred(t, selectors.background(), "posts/01/images/dragon");
    });
test.page("https://edbe777.github.io/maps_website/locations/index.html")
    ("Locations taxonomy page social media images should be from the latest post, without filters", async t => {
        await asserts.background(t, selectors.opengraphImage(), "posts/01/images/dragon");
        await asserts.background(t, selectors.twitterImage(), "posts/01/images/dragon");
    });
test.page("https://edbe777.github.io/maps_website/locations/index.html")
    ("Locations taxonomy page should not have a map", async t => {
        await t
            .expect(Selector("#mapid").exists).notOk;
    });

test.page("https://edbe777.github.io/maps_website/locations/Surgery/index.html")
    ("Surgery term page title should be taxonomy singular + term with icon", async t => {
        await t.expect(Selector("h1").innerText).eql("Location Surgery")
            .expect(Selector("h1 i").classNames).eql(["fa", "fa-location-arrow", "fa-fw"]);
    });
test.page("https://edbe777.github.io/maps_website/locations/Surgery/index.html")
    ("Surgery term page should display 5 items", async t => {
        await t.expect(Selector(".split-bio ul").childElementCount).eql(5);
    });
test.page("https://edbe777.github.io/maps_website/locations/Surgery/index.html")
    ("Surgery term grid should display 5 photos + 1 padding element", async t => {
        await t.expect(Selector(".split-grid").childElementCount).eql(6);
    });
test.page("https://edbe777.github.io/maps_website/locations/Surgery/index.html")
    ("Surgery term page background image should be from the latest post, with filters", async t => {
        await asserts.backgroundBlurred(t, selectors.background(), "posts/01/images/dragon");
    });
test.page("https://edbe777.github.io/maps_website/locations/Surgery/index.html")
    ("Surgery term page social media images should be from the latest post, without filters", async t => {
        await asserts.background(t, selectors.opengraphImage(), "posts/01/images/dragon");
        await asserts.background(t, selectors.twitterImage(), "posts/01/images/dragon");
    });
test.page("https://edbe777.github.io/maps_website/locations/Surgery/index.html")
    ("Surgery term page map should display 3 track markers + 2 photo markers", async t => {
        await t
            .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-gray").count).eql(2)
            .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker").count).eql(3+2);
    });
