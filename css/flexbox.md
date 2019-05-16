# Flexbox

Here are some code exmaple using the CSS Flexbox.  

## Basic
::: tip Goal
In this example we have 3 boxes which are aligned horizontally.
The width of box 2 is 2 times the size of box-1 and box-3.
To achieve this, see the code below.
:::
<flexbox-1 /> 
  
```html
  <div class="container">
    <div class="box-1">
      <h3>Box 1</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="box-2">
      <h3>Box 2</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="box-3">
      <h3>Box 3</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
```
```css
.container div {
    border: 1px #ccc solid;
    padding: 10px;
}

.container {
    display: flex;
}

.box-1 {
    flex:1
}

.box-2 {
    flex:2
}

.box-3 {
    flex:1
}
```
## Example 2
