import { Selector } from 'testcafe';

fixture("Translations");

test.page("https://edbe777.github.io/maps_website/")
    ("French translation should be available on homepage", async t => {
        await t.expect(Selector("#menu-translations").innerText).eql("fr");
    });
test.page("https://edbe777.github.io/maps_website/1 About/index.html")
    ("French translation should not be available on about page", async t => {
        await t.expect(Selector("#menu-translations").count).eql(0);
    });

test.page("https://edbe777.github.io/maps_website/locations/index.html")
    ("French translation should be available on taxonomy pages", async t => {
        await t.expect(Selector("#menu-translations").innerText).eql("fr");
    });
test.page("https://edbe777.github.io/maps_website/locations/Surgery/index.html")
    ("French translation should be available on terms pages", async t => {
        await t.expect(Selector("#menu-translations").innerText).eql("fr");
    });

test.page("https://edbe777.github.io/maps_website/404.html")
    ("French translation should not be available on 404 page", async t => {
        await t.expect(Selector("#menu-translations").count).eql(0);
    });

test.page("https://edbe777.github.io/maps_website/fr/posts/02/index.html")
    ("French translation should use images from main site", async t => {
        const items = Selector(".split-grid img");
        await t
            .expect(items.nth(0).getAttribute("src")).contains("/hugo-split-gallery/posts/02/images/statue");
    });

test.page("https://edbe777.github.io/maps_website/fr/posts/01/index.html")
    ("French translation should use tracks from main site", async t => {
        const items = Selector("#list-tracks li a");
        await t
            .expect(items.nth(0).getAttribute("href")).contains("/hugo-split-gallery/posts/01/2016-05-21%20Lac%20du%20Lauvitel.gpx");
    });
