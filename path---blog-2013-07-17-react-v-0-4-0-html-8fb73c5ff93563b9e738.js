webpackJsonp([0xdbed273198fe],{618:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Over the past 2 months we’ve been taking feedback and working hard to make React even better. We fixed some bugs, made some under-the-hood improvements, and added several features that we think will improve the experience developing with React. Today we’re proud to announce the availability of React v0.4!</p>\n<p>This release could not have happened without the support of our growing community. Since launch day, the community has contributed blog posts, questions to the <a href="https://groups.google.com/group/reactjs">Google Group</a>, and issues and pull requests on GitHub. We’ve had contributions ranging from documentation improvements to major changes to React’s rendering. We’ve seen people integrate React into the tools they’re using and the products they’re building, and we’re all very excited to see what our budding community builds next!</p>\n<p>React v0.4 has some big changes. We’ve also restructured the documentation to better communicate how to use React. We’ve summarized the changes below and linked to documentation where we think it will be especially useful.</p>\n<p>When you’re ready, <a href="/docs/installation.html">go download it</a>!</p>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>Switch from using <code>id</code> attribute to <code>data-reactid</code> to track DOM nodes. This allows you to integrate with other JS and CSS libraries more easily.</li>\n<li>Support for more DOM elements and attributes (e.g., <code>&#x3C;canvas></code>)</li>\n<li>Improved server-side rendering APIs. <code>React.renderComponentToString(&#x3C;component>, callback)</code> allows you to use React on the server and generate markup which can be sent down to the browser.</li>\n<li><code>prop</code> improvements: validation and default values. <a href="/blog/2013/07/11/react-v0-4-prop-validation-and-default-values.html">Read our blog post for details…</a></li>\n<li>Support for the <code>key</code> prop, which allows for finer control over reconciliation. <a href="/docs/multiple-components.html">Read the docs for details…</a></li>\n<li>Removed <code>React.autoBind</code>. <a href="/blog/2013/07/02/react-v0-4-autobind-by-default.html">Read our blog post for details…</a></li>\n<li>Improvements to forms. We’ve written wrappers around <code>&#x3C;input></code>, <code>&#x3C;textarea></code>, <code>&#x3C;option></code>, and <code>&#x3C;select></code> in order to standardize many inconsistencies in browser implementations. This includes support for <code>defaultValue</code>, and improved implementation of the <code>onChange</code> event, and circuit completion. <a href="/docs/forms.html">Read the docs for details…</a></li>\n<li>We’ve implemented an improved synthetic event system that conforms to the W3C spec.</li>\n<li>Updates to your component are batched now, which may result in a significantly faster re-render of components. <code>this.setState</code> now takes an optional callback as its second parameter. If you were using <code>onClick={this.setState.bind(this, state)}</code> previously, you’ll want to make sure you add a third parameter so that the event is not treated as the callback.</li>\n</ul>\n<h3 id="jsx"><a href="#jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX</h3>\n<ul>\n<li>Support for comment nodes <code>&#x3C;div>{/* this is a comment and won\'t be rendered */}&#x3C;/div></code></li>\n<li>Children are now transformed directly into arguments instead of being wrapped in an array\nE.g. <code>&#x3C;div>&#x3C;Component1/>&#x3C;Component2/>&#x3C;/div></code> is transformed into <code>React.DOM.div(null, Component1(null), Component2(null))</code>.\nPreviously this would be transformed into <code>React.DOM.div(null, [Component1(null), Component2(null)])</code>.\nIf you were using React without JSX previously, your code should still work.</li>\n</ul>\n<h3 id="react-tools"><a href="#react-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>react-tools</h3>\n<ul>\n<li>Fixed a number of bugs when transforming directories</li>\n<li>No longer re-write <code>require()</code>s to be relative unless specified</li>\n</ul>',excerpt:"Over the past 2 months we’ve been taking feedback and working hard to make React even better. We fixed some bugs, made some under-the-hood improvements, and added several features that we think will improve the experience developing with React. Today we’re proud to announce the availability of React v0.4! This release could not have happened without the support of our growing community. Since launch day, the community has contributed blog posts, questions to the  Google Group , and issues and…",frontmatter:{title:"React v0.4.0",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"July 17, 2013",path:"blog/2013-07-17-react-v0-4-0.md",slug:"/blog/2013/07/17/react-v0-4-0.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2013/07/17/react-v0-4-0.html"}}}});
//# sourceMappingURL=path---blog-2013-07-17-react-v-0-4-0-html-8fb73c5ff93563b9e738.js.map