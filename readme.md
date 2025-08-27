
# The following questions are clearly answered:

----------------------------
****Question: 1****
What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
****Answer:****
1. The **getElementById()** method of the document object returns an HTML element with the specified id. *Input:* Only an ID. *Output:* Returns a single element (or null if not found).
2.  The **getElementsByClassName()** method returns an HTMLCollection of elements whose class names match one or more specified class names. *Input:* A class name (without the dot). *Output:*  Returns a live HTMLCollection (like an array but not exactly).
3. The **querySelector()** is a method of the Element interface. The querySelector() method allows you to select the first element that matches one or more CSS selectors. *Input:* Any valid CSS selector (id #, class ., tag, attribute, etc.). *Output:* Returns the first matching element (or null).
4. the **querySelectorAll()** method to select all elements that match a CSS selector or a group of CSS selectors. *Input:* Any CSS selector. *Output:* Returns a static NodeList (not live, but array-like).


****Question: 2****
How do you **create and insert a new element into the DOM?**
****Answer:****
Create:
To create an HTML element, you use the document.createElement() method. `let element = document.createElement(htmlTag);
` 
Insert:
The *appendChild()* is a method of the Node interface. The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node. `parentNode.appendChild(childNode);`


****Question: 3****
 What is **Event Bubbling** and how does it work?
****Answer:****
Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.
*How it works:*
→ You click (or trigger an event) on a child element.
→ The event first runs the handler on the target element.
→ Then it bubbles up to the parent → grandparent → … until document.
→ Each ancestor can handle the same event if a listener is attached.


****Question: 4****
What is **Event Delegation** in JavaScript? Why is it useful?
****Answer:****
Event Delegation is a technique where instead of adding event listeners to multiple child elements, you attach a single event listener to their parent.
Because of event bubbling, the parent can “catch” events that happen on its children.
*is it useful:*

*Performance:*
→ Fewer event listeners → less memory & faster page.
→ Especially useful for lists, tables, grids with many elements.

*Dynamic Elements:*
→ Works for elements added later (via JS).

*Cleaner Code:*
→ One handler instead of many.
→ Easier to manage and update.


****Question: 5****
What is the difference between **preventDefault() and stopPropagation()** methods?
****Answer:****
**event.preventDefault()**
→ Purpose: Prevents the default browser action for an event.
→ Does not stop the event from bubbling up the DOM tree.
→ Used for things like stopping form submissions, disabling link navigation, preventing right-click menus, etc.

**event.stopPropagation()**
→ Purpose: Stops the event from bubbling (or trickling in capture phase).
→ The event won’t continue to parent (or ancestor) elements.
→ Does not stop the default browser action.