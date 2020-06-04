/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}


function handleClick(count) {
  count += 1;
  render(count);
}

function handleClickNumer(resetNumber) {
  render(resetNumber);
}

function render(count = 0) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world</p>
      <p>
        <button type="button" onClick={() => handleClick(count)}>
          click me
          {' '}
          {count}
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button onClick={() => handleClickNumer(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}
render(0);
