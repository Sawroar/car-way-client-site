import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:px-20 my-20'>
            <h2 className='text-center text-5xl font-semibold my-5'>Frequently Asked Questions</h2>
            <div className='grid grid-cols-1'></div>
            <div className='border-2 rounded-lg p-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    What are the different ways to manage a state in a React application?</h2>
                <p className='texl-lg font-semibold'>
                    The Four Kinds of React State to Manage
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                    There are four main types of state you need to properly manage in your React apps:

                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state
                    Let's cover each of these in detail:
                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                    Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.

                    Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='border-2 rounded-lg p-5 my-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    How does prototypical inheritance work?</h2>
                <p className='texl-lg font-semibold'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.
                </p>
            </div>
            <div className='border-2 rounded-lg p-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    What is a Unit Test? Why should we write unit tests?</h2>
                <p className='texl-lg font-semibold'>
                    <span className='font-bold text-xl'> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</span>

                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <div className='border-2 rounded-lg p-5'>
                <h2 className='text-2xl bg-orange-500 text-white font-bold py-2 my-5'>
                    React vs. Angular vs. Vue?</h2>
                <p className='texl-lg font-semibold'>
                    React
                    React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                    React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                    Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                    React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.

                    Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.


                    Vue
                    The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                    Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                    Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.

                    Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.

                    SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.


                    Angular
                    AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                    Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                    Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.

                    Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.

                    Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.

                    Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
                </p>
            </div>

        </div>
    );
};

export default Blogs;