import { Selector } from 'testcafe';

fixture("Baseof content")
    .page("https://edbe777.github.io/maps_website/");

test("Footnote should be displayed", async t => {
    await t.expect(Selector(".split-footnote").innerText).eql("Fork me!");
});
test("Credit should be displayed", async t => {
    await t.expect(Selector(".split-credit").innerText).contains("Powered by");
});
test("Prev/Next links should not be displayed on homepage", async t => {
    await t.expect(Selector("#menu-prevnext").count).eql(0);
});
test.page("http://127.0.0.1:8080/hugo-split-gallery/posts/01/index.html")
    ("Only prev link should be displayed on latest post", async t => {
        await t.expect(Selector("#menu-prevnext").childElementCount).eql(1);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/posts/02/index.html")
    ("Only next link should be displayed on first post", async t => {
        await t.expect(Selector("#menu-prevnext").childElementCount).eql(1);
    });
test.page("http://127.0.0.1:8080/hugo-split-gallery/posts/03/index.html")
    ("Prev and next links should be displayed", async t => {
        await t.expect(Selector("#menu-prevnext").childElementCount).eql(2);
    });
