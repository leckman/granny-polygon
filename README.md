# granny-polygon

Modular knitting designer/simulator

Personal project to help quickly generate arrangement options for my [Beekeeper's Quilt](https://www.ravelry.com/patterns/library/the-beekeepers-quilt) and other blanket projects without having to manually readjust all the pieces.

# Goal

User defines type of regular polygon, edge length, and dimensions of space to fill.

Polygon options:
- triangle
- square
- hexagon
- octagon (tiled with squares)

At least for now, all spaces to fill must be rectangles. Pre-configured options will include:
- baby blanket
- couch throw
- twin bed
- double bed
- queen bed
- king bed
- cal. king bed
Tiling the polygons into arbitrary dimensions should eventually be supported.

The program will display the tiling and number of polygons needed to fill the described space. If the polygons do not tile evenly into the specified space dimensions, the output should include the minimum number of polygons necessary to completely cover the space.

Users can then assign colors to different polygons via a color picker or photo upload. They should be able to bulk assign - e.g. if the calculator determines they need 100 polygons, they should be able to easily configure that 67 are blue and 33 are green.

Users should be able to:
- assign colors to specific polygons in the tiling
- randomize the assignment of colors after specifying how many of each color polygon exist
- assign colors in an ordered fashion, either arranged radially from the center, diagonally from any corner, vertically in either direction, or horizontally in either direction
    - according to color spectrum
    - according to luminance/value

Note: the [Image Color API](http://mkweb.bcgsc.ca/color-summarizer/) by Martin Krzywinski does a good job of calculating the values I'd need for color filtering based off an arbitrary uploaded image, and it's free. However, it does seem to be a bit overkill and it would be nice to be able to do that processing locally. There are some npm packages that address this but none blow me out of the water and it could be fun to write that myself. Users should also be able to assign a 'closest color' override to an uploaded image for sorting purposes in the event they have some highly pigmented multicolored yarn.

Users should be able to save a gallery of configurations associated with a certain project.

# Milestones

## 1 - Proof of Concept

- [ ] Tile squares over a pre-configured rectangle space
- [ ] Color picker for bulk polygon color assignment
- [ ] Randomize color assignment
- [ ] Sort color assignment vertically or horizontally
  - [ ] Luminance/value
  - [ ] Color spectrum

## 2 - MVP

- [ ] Tile triangles, squares, hexagons, and octagons over arbitrary-sized rectangle
- [ ] Sort color assignment diagonally or radially
- [ ] Image upload for color assignment
- [ ] Save configurations in gallery

## 3 - Extended Features
- [ ] Save configurations in per-project galleries
- [ ] Tile polygons over non-rectangular shapes
- [ ] Manually assign colors to hexagons
- [ ] Manually arrange polygons in arbitrary configurations
- [ ] Uploaded image color override
- [ ] Metric measurement support

## 4 - Maybe Someday?
- [ ] Ravelry integration to look up yarns
- [ ] Gauge calculation/recommender
- [ ] Go backwards: instead of "I want to make a king sized blanket out of 8" hexagons, how many do I need?", ask "I want to make a king sized blanket with 100 hexagons, how big should they be?" or "I have 20 12" squares, how close am I to covering my bed?"
