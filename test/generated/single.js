import { Selector } from 'testcafe';

import * as asserts from '../asserts.js';
import * as selectors from '../selectors.js';

fixture("Single")
    .page("https://edbe777.github.io/maps_website/posts/01/index.html");

test("Title should come from Front Matter", async t => {
    await t.expect(Selector("h1").innerText).eql("Lauvitel lake");
});
test("Main content should display 1 paragraph and 1 map", async t => {
    await t
        .expect(Selector(".split-bio p").count).eql(1)
        .expect(Selector(".split-bio #mapid").count).eql(1);
});
test("Metadata should have 4 items", async t => {
    const items = Selector("#list-metadata li");
    await t
        .expect(items.count).eql(4)
        .expect(items.nth(0).innerText).contains("Article published on 2001-05-01")
        .expect(items.nth(1).innerText).contains("Photos taken on 2001-05-01")
        .expect(items.nth(2).innerText).contains("Locations: Mountains")
        .expect(items.nth(3).innerText).contains("Seasons: Summer, Winter");
});
test.page("https://edbe777.github.io/maps_website/posts/02/index.html")
    ("Tracks should have 2 items", async t => {
    const items = Selector("#list-tracks li");
    await t
        .expect(items.count).eql(2)
        .expect(items.nth(0).innerText).contains("Download the track")
        .expect(items.nth(1).innerText).contains("Open the track in map2gpx");
});
test("Tracks should have 2 items per track", async t => {
    const items = Selector("#list-tracks li");
    await t
        .expect(items.count).eql(4)
        .expect(items.nth(0).innerText).contains("Download the track")
        .expect(items.nth(1).innerText).contains("Open the track")
        .expect(items.nth(2).innerText).contains("Download the track")
        .expect(items.nth(3).innerText).contains("Open the track");
});
test("Download all should be disabled by default", async t => {
    const items = Selector("#list-downloads li");
    await t
        .expect(Selector("#list-downloads").exists).notOk();
});
test("See also list should have 1 item", async t => {
    const items = Selector("#list-seealso li");
    await t
        .expect(items.count).eql(1)
        .expect(items.nth(0).innerText).contains("03");
});
test("Grid should display 11 photos + 1 padding element", async t => {
    await t.expect(Selector(".split-grid").childElementCount).eql(12);
});
test("Background image should be from featured image, with filters", async t => {
    await asserts.backgroundBlurred(t, selectors.background(), "posts/02/images/statue");
});
test("Social media images should be from featured image, without filters", async t => {
    await asserts.background(t, selectors.opengraphImage(), "posts/02/images/statue");
    await asserts.background(t, selectors.schemaImage(), "posts/02/images/statue");
    await asserts.background(t, selectors.twitterImage(), "posts/02/images/statue");
});
test("Map should display 2 track markers + 9 photo markers", async t => {
    await t
        .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-green").count).eql(1)
        .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-orange").count).eql(1)
        .expect(Selector("#mapid .leaflet-marker-pane .awesome-marker.awesome-marker-icon-gray").count).eql(9);
});

test.page("https://edbe777.github.io/maps_website//posts/03/index.html")
    ("Link to map2gpx.eu should be displayed by default", async t => {
        await t.expect(Selector("#list-tracks li").nth(1).find("a").getAttribute("href")).eql("https://map2gpx.eu?url=http%3A%2F%2Flocalhost%3A8080%2Fhugo-split-gallery%2Fposts%2Fgrand-veymont%2F2020-06-14%2520Grand%2520Veymont.geojson");
    });
test.page("https://edbe777.github.io/maps_website//posts/03/index.html")
    ("Link to map2gpx.fr should be displayed", async t => {
        await t.expect(Selector("#list-tracks li").nth(1).find("a").getAttribute("href")).eql("https://map2gpx.fr?url=http%3A%2F%2Flocalhost%3A8080%2Fhugo-split-gallery%2Fposts%2Fgrand-veymont%2F2020-06-14%2520Grand%2520Veymont.geojson");
    });

test.page("https://edbe777.github.io/maps_website//posts/03/index.html")
    ("Photos should be displayed by date of capture (if available)", async t => {
        const items = Selector(".split-grid img");
        await t
            .expect(items.nth(0).getAttribute("src")).contains("rocks")
            .expect(items.nth(1).getAttribute("src")).contains("rocks")
            .expect(items.nth(2).getAttribute("src")).contains("rocks")
            .expect(items.nth(3).getAttribute("src")).contains("rocks"); // Without Exif data
    });
