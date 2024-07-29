const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    console.log(document.querySelectorAll('li.seed'));

    // 2. Get all seedless fruit elements
    // Your code here
    console.log(document.querySelectorAll('li.seedless'));

    // 3. Get first seedless fruit element
    // Your code here
    console.log(document.getElementsByClassName("seedless")[0]);


    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    console.log(document.querySelector('div#wrapper>p>span'));

    // 5. Get all children of element "wrapper"
    // Your code here
    console.log(document.getElementById('wrapper').children);

    // 6. Get all odd number list items in the list
    // Your code here
    console.log(document.querySelectorAll("li.odd"));

    // 7. Get all even number list items in the list
    // Your code here
    console.log(document.querySelectorAll("ol>li:not(.odd)"));

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    console.log(document.querySelectorAll("a:not([class])"));

    // 9. Get "Amazon" list element there isn't one but there is an anchor
    // Your code here
    console.log(document.querySelector("a.shopping"));


    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorns = document.querySelectorAll("img.unicorn");
    const unicornLis = [];
    unicorns.forEach(el => unicornLis.push(el.parentElement));

    console.log(unicornLis);
}

window.onload = select;
