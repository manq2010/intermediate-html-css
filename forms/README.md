# The Input Element

It accepts a type attribute which tells the browser what type of data it should expect and how it should render the input element.

## Labels

To create a label, we use the <label> element.

Labels accept a for attribute, which associates it with a particular input. The input we want to associate with a label needs an id attribute with the same value as the label’s for attribute.

## Placeholder Attribute

To guide users on what to enter in form elements, we can include **placeholder** text in input fields.

This is done by adding a **placeholder** attribute to an input. The value will be the **placeholder** text we want to display in the input:

## The Name Attribute

We need to use labels so that users understand what the data entered into an input field will represent. Just like that, we also need to let the backend, where we send our data, know what each piece of data represents.

We do this by adding a **name** attribute to our inputs:

## The Type Attribute

Email inputs are specialized text inputs just for email addresses. They are different from text inputs in that they will display a different keyboard which will include the `@` symbol on mobile devices to make entering email addresses easier.

They also validate that the user has entered a correctly formatted email address, but there will be more on validations later.

To create an email input, we use an input element with type attribute of **“email”**:

## Text Area

While technically not an input element, the text area element provides an input box that can accept text that spans multiple lines like user comments and reviews. It can also be resized by clicking and dragging the bottom right corner to make it bigger or smaller.

To create a text area, we use the **<textarea>** element:

## Select Dropdown

The select element renders a **dropdown** list where users can select an option. Syntactically, select elements have similar markup to unordered lists. The select element wraps option elements which are the options that can be selected.

To create a select **dropdown**, we use the <select> element. Any options we want to display within the select element are defined using **<option>** elements:

All the option elements need to have a value attribute. This value will be sent to the server when the form is submitted.

We may also split the list of options into groups using the **<optgroup>** element. The **optgroup** element takes a label attribute which the browser uses as the label for each group:

## Radio Buttons

Select dropdowns are great for saving space on the page when we have an extensive list of options we want users to choose from. However, when we have a smaller list of 5 or fewer options to choose from, it is often a better user experience to have them displayed on the page instead of hidden behind a dropdown.

In this case, we can use radio buttons. Radio buttons allow us to create multiple options that the user can choose one of. To create radio buttons, we use the ever adaptable input element again with a type attribute of **“radio”**:

## Checkboxes

**Checkboxes** are similar to radio buttons in that they allow users to choose from a set of predefined options. But unlike radio buttons, they allow multiple options to be selected at once.

To create a **checkbox**, we use the input element with a type attribute of **“checkbox”**:

# Organizing Form Elements

## Fieldset Element

The **fieldset** element is a container element that allows us to group related form inputs into one logical unit.

To create a **fieldset**, we use the **<fieldset>** element. Whatever form inputs we want to group together go within the opening and closing fieldset tags:

## Legend

The legend element is used to give field sets a heading or caption so the user can see what a grouping of inputs is for.

To create a legend, we use the **<legend>** element with the text we want to display within its opening and closing tags. A legend should always come right after an opening fieldset tag:

# Resources

[Resources]

[Resources]: https://web.dev/learn/forms/javascript/
