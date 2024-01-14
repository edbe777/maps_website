import { Selector } from 'testcafe';

fixture("Menus")
    .page("https://edbe777.github.io/maps_website/");

test("Menus should display 4 items", async t => {
    await t.expect(Selector("#menu-main").childElementCount).eql(4);
});
