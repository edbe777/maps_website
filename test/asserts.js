
const background = async (t, style, image) => {
    await t.expect(style).match(new RegExp('https://edbe777.github.io/maps_website/' + image + '_[a-z0-9]+_[0-9]+_2000x0_resize_q75_box\.jpg'));
}

const backgroundBlurred = async (t, style, image) => {
    await t.expect(style).match(new RegExp('https://edbe777.github.io/maps_website/' + image + '_[a-z0-9]+_[0-9]+_[a-z0-9]*\.jpg'));
}

export { background, backgroundBlurred };