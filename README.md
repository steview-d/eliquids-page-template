# Custom HTML Snippets

For use inside [E-liquids](https://e-liquids.com/) page descriptions

## Usage instructions

### Setting Up

When creating a new page on Shopify, make sure you set the template to `page.custom-html`

### Adding Content

Find the layout block you require and click `Copy Code` - this will paste the required HTML to your clipboard.

For example, if you want a 60% text and 40% image block, click the `Copy Code` button for that block, and paste it into the content section of the Shopify page editor.


The html you paste in will look similar to this

```
<div class="block-columns">
    <div class="w60">
        <h1 class="h3">Lorem ipsum dolor sit amet consectetur</h1>
        <p class="p-normal">Lorem ipsum dolor sit amet consectetur,adipisicing elit.
                            Delectus, totam iusto, numquam iste quibusdam atque officia
                            facere minima a odit vel quae magni blanditiis quis
                            reprehenderit praesentium nostrum soluta ratione!</p>
    </div>
    <div class="w40">
        <div class="image w100">
            <img src="https://via.placeholder.com/1680x525" alt="">
        </div>
    </div>
</div>
```

To add you own text, just replace the `lorem ipsum` in between the `<p class="p-normal">` and `</p>` sections.

To add your own image, replace the `https://via.placeholder.com/1680x525` with the url that points to the image you require.

Add alt tags by adding text to the alt attribute, for example `alt="my alt tag"`.

### Changing font size / weight

All text will have a class, such as `h1`, `p-normal` etc. You can change these classes to adjust the font size and weight. Each block will have a red box above it, which shows the current class and any associated heading & text elements.

To copy the styles of, for example, a h2 heading, you would just replace the value inside the class. So, if your block shows

```
<h1 class="h1">Lorem ipsum dolor sit amet consectetur</h1>
```

but you want it to have smaller heading, say `h2`, you would replace the h1 with h2, like so

```
<h1 class="h2">Lorem ipsum dolor sit amet consectetur</h1>
```

The same applies for paragraph text. You have 2 options, `p-normal` and `p-bold` - swap these out as required.

### Adjusting column widths.

For each 2 column block, there will be 2 lines that look similar to this
```
<div class="w60">
```
You can adjust the width of each column by changing the number to any value from 20 through to 80, in increments of 10. Both columns must add up to 100.

### Image? Text? Or Both?

When dealing with multi column blocks, they can have images or text inside.

Just swap out the html as you need. So long as you keep these sections intact, you can choose to put text or images inside of them.

```
<div class="w60">

</div>
```

### Have more questions?
Ask me :smiley: